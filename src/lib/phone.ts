/**
 * Máscara de telefone brasileiro, aplicada enquanto o visitante digita.
 * O hífen se desloca de (00) 0000-0000 para (00) 00000-0000 assim que o
 * 11º dígito entra — é o comportamento que separa fixo de celular.
 */
export function maskPhone(value: string): string {
  // Número nacional tem 10 ou 11 dígitos, então 12/13 começando com 55 só pode
  // ser DDI — caso de quem cola o número do WhatsApp. Digitando nunca se chega
  // aqui (o corte em 11 vem antes), então o DDD 55 não é afetado.
  const raw = value.replace(/\D/g, '');
  const nacional = raw.length >= 12 && raw.startsWith('55') ? raw.slice(2) : raw;

  const digits = nacional.slice(0, 11);
  if (!digits) return '';
  if (digits.length <= 2) return `(${digits}`;

  const prefixo = digits.length <= 10 ? 4 : 5;
  if (digits.length <= 2 + prefixo) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 2 + prefixo)}-${digits.slice(2 + prefixo)}`;
}

/** Só os dígitos — para validar comprimento antes de enviar. */
export function phoneDigits(value: string): string {
  return value.replace(/\D/g, '');
}

/** DDD + 8 (fixo) ou 9 (celular) dígitos. Evita mandar número pela metade. */
export function isPhoneComplete(value: string): boolean {
  const digits = phoneDigits(value);
  return digits.length === 10 || digits.length === 11;
}

/**
 * (11) 99999-8888 -> +5511999998888, o mesmo formato que o sync do backoffice
 * grava no HubSpot. Comprimento inesperado volta como veio, para não inventar
 * um DDI em cima de um número que a máscara não cobre.
 */
export function phoneToE164(value: string): string {
  const digits = phoneDigits(value);
  if (digits.length === 10 || digits.length === 11) return `+55${digits}`;
  if (digits.startsWith('55') && (digits.length === 12 || digits.length === 13)) {
    return `+${digits}`;
  }
  return value;
}
