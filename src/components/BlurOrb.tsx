interface BlurOrbProps {
  className?: string;
  color?: 'green' | 'green-soft';
}

export function BlurOrb({ className = '', color = 'green' }: BlurOrbProps) {
  const fill = color === 'green' ? 'bg-aqua-green/25' : 'bg-aqua-green-soft/15';
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute rounded-full blur-3xl ${fill} ${className}`.trim()}
    />
  );
}
