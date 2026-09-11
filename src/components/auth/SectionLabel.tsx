export function SectionLabel({ children }: { children: string }) {
  return (
    <div className="mt-10 flex items-center gap-3 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-acqua-blue/45 first:mt-0">
      {children}
      <span className="h-px flex-1 bg-acqua-blue/10" aria-hidden="true" />
    </div>
  );
}
