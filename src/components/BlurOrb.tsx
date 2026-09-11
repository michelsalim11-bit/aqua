interface BlurOrbProps {
  className?: string;
  color?: 'green' | 'green-soft';
}

export function BlurOrb({ className = '', color = 'green' }: BlurOrbProps) {
  const fill = color === 'green' ? 'bg-acqua-blue/10' : 'bg-acqua-blue/6';
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute rounded-full blur-3xl ${fill} ${className}`.trim()}
    />
  );
}
