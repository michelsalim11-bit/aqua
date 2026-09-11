import { createSign } from 'node:crypto';
import { NextResponse } from 'next/server';

import { phoneToE164 } from '@/lib/phone';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Leads do site → Google Sheets (interim até a integração com o HubSpot).
// SHEETS_SA_KEY é o JSON da service account em base64 (evita problemas com
// \n da private key em env vars); LEADS_SHEET_ID é o id da planilha
// "Leads Aqua Site" (aba "Leads").
const SHEETS_SA_KEY = process.env.SHEETS_SA_KEY;
const LEADS_SHEET_ID = process.env.LEADS_SHEET_ID;

interface ContatoPayload {
  nome?: string;
  email?: string;
  telefone?: string;
  mensagem?: string;
  faixaAporte?: string;
  origem?: string;
}

interface Lead {
  nome: string;
  email: string;
  telefone: string;
  mensagem: string;
  faixaAporte: string;
  origem: string;
}

type HubSpotField = { name: string; value: string };

// Leads também entram como submissão de formulário no HubSpot. O endpoint de
// submissão é público (não usa token) — precisa só do portal id e do guid do
// form.
const HUBSPOT_PORTAL_ID = process.env.HUBSPOT_PORTAL_ID;

/**
 * Campos comuns a todos os forms. O nome completo vira firstname/lastname com
 * o mesmo split que o sync usa nas views; o telefone vai normalizado em E.164,
 * também para bater com o que o sync grava. A planilha continua recebendo o
 * número como o visitante digitou, que é mais legível.
 */
function nomeFields(lead: Lead): HubSpotField[] {
  const [firstname, ...rest] = lead.nome.split(/\s+/).filter(Boolean);
  return [
    { name: 'firstname', value: firstname },
    { name: 'lastname', value: rest.join(' ') },
    { name: 'email', value: lead.email },
    { name: 'phone', value: phoneToE164(lead.telefone) },
  ];
}

/**
 * Cada origem tem seu form, e cada form declara seus campos — mandar um campo
 * que o form não declara derruba a submissão inteira (400), então a lista aqui
 * precisa espelhar a definição no HubSpot. Origem sem guid configurado segue só
 * na planilha.
 */
const HUBSPOT_FORMS: Record<
  string,
  { guid: string | undefined; fields: (lead: Lead) => HubSpotField[] }
> = {
  'Interesse (home)': {
    guid: process.env.HUBSPOT_FORM_GUID_PLATAFORMA,
    fields: nomeFields,
  },
  'Contato (site)': {
    guid: process.env.HUBSPOT_FORM_GUID_CONTATO,
    fields: (lead) => [...nomeFields(lead), { name: 'message', value: lead.mensagem }],
  },
  LP: {
    guid: process.env.HUBSPOT_FORM_GUID_LP,
    fields: (lead) => [
      ...nomeFields(lead),
      { name: 'qual_sua_pretenso_de_aporte', value: lead.faixaAporte },
    ],
  },
};

function b64url(value: object) {
  return Buffer.from(JSON.stringify(value)).toString('base64url');
}

async function sheetsAccessToken(sa: { client_email: string; private_key: string }) {
  const now = Math.floor(Date.now() / 1000);
  const unsigned = `${b64url({ alg: 'RS256', typ: 'JWT' })}.${b64url({
    iss: sa.client_email,
    scope: 'https://www.googleapis.com/auth/spreadsheets',
    aud: 'https://oauth2.googleapis.com/token',
    iat: now,
    exp: now + 3600,
  })}`;
  const signature = createSign('RSA-SHA256').update(unsigned).sign(sa.private_key, 'base64url');
  const resp = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: `${unsigned}.${signature}`,
    }),
  });
  const data = await resp.json();
  if (!resp.ok) {
    throw new Error(`token Google: ${JSON.stringify(data)}`);
  }
  return data.access_token as string;
}

async function appendToSheet(lead: Lead) {
  if (!SHEETS_SA_KEY || !LEADS_SHEET_ID) {
    throw new Error('SHEETS_SA_KEY/LEADS_SHEET_ID não configuradas');
  }
  const sa = JSON.parse(Buffer.from(SHEETS_SA_KEY, 'base64').toString('utf8'));
  const token = await sheetsAccessToken(sa);
  const timestamp = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
  const resp = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${LEADS_SHEET_ID}/values/${encodeURIComponent('Leads!A1')}:append?valueInputOption=USER_ENTERED`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        values: [[timestamp, lead.origem, lead.nome, lead.email, lead.telefone, lead.mensagem]],
      }),
    },
  );
  if (!resp.ok) {
    throw new Error(`Sheets respondeu ${resp.status}: ${await resp.text()}`);
  }
}

/**
 * Submete o lead ao formulário do HubSpot. Best-effort: a planilha é a fonte
 * que bloqueia a resposta, então uma falha aqui não pode perder o lead.
 * O `hutk` (cookie hubspotutk) é o que liga a submissão à sessão do visitante
 * no analytics — vai junto quando o tracking code do HubSpot estiver no site.
 */
async function submitToHubSpotForm(lead: Lead, request: Request) {
  const form = HUBSPOT_FORMS[lead.origem];
  if (!HUBSPOT_PORTAL_ID || !form?.guid) return;

  const hutk = request.headers
    .get('cookie')
    ?.match(/(?:^|;\s*)hubspotutk=([^;]+)/)?.[1];
  const referer = request.headers.get('referer') ?? undefined;

  // Campo vazio é omitido: o HubSpot rejeita string vazia em campo obrigatório,
  // e os opcionais (sobrenome, telefone, faixa de aporte) nem sempre vêm.
  const fields = form.fields(lead).filter((field) => field.value);

  const resp = await fetch(
    `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${form.guid}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fields,
        context: { pageUri: referer, pageName: lead.origem, ...(hutk ? { hutk } : {}) },
      }),
    },
  );
  if (!resp.ok) {
    throw new Error(`HubSpot respondeu ${resp.status}: ${await resp.text()}`);
  }
}

export async function POST(request: Request) {
  let body: ContatoPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Requisição inválida.' }, { status: 400 });
  }

  const nome = body.nome?.trim();
  const email = body.email?.trim();
  const telefone = body.telefone?.trim() ?? '';
  const mensagem = body.mensagem?.trim() ?? '';
  const faixaAporte = body.faixaAporte?.trim() ?? '';
  const origem = body.origem?.trim() || 'Contato (site)';

  if (!nome || !email) {
    return NextResponse.json({ error: 'Informe nome e e-mail.' }, { status: 400 });
  }

  const lead: Lead = { nome, email, telefone, mensagem, faixaAporte, origem };

  try {
    await appendToSheet(lead);
  } catch (err) {
    console.error('[contato] falha ao registrar lead:', err);
    return NextResponse.json(
      { error: 'Não foi possível registrar seu contato. Tente novamente.' },
      { status: 502 },
    );
  }

  try {
    await submitToHubSpotForm(lead, request);
  } catch (err) {
    // Lead já está na planilha — não devolve erro para o visitante.
    console.error('[contato] falha ao enviar lead ao HubSpot:', err);
  }

  return NextResponse.json({ ok: true });
}
