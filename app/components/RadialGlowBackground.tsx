export default function RadialGlowBackground({
  className,
  intensity = 'high', // "low" | "medium" | "high"
  children,
}: {
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
  children?: React.ReactNode;
}) {
  const intensityMap = {
    low: 'opacity-40 blur-3xl',
    medium: 'opacity-60 blur-3xl',
    high: 'opacity-80 blur-3xl',
  };

  return (
    <div className={`relative rounded-3xl ${className || ''}`}>
      {/* Main glowing radial blob */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div
          className={`h-[600px] w-[800px] rounded-full bg-linear-to-r from-blue-500/20 via-purple-500/30 to-cyan-400/10 ${intensityMap[intensity]} animate-pulse-slow`}
        />
      </div>

      {/* Optional extra glow layers for depth */}
      <div className="pointer-events-none absolute -inset-20">
        <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl animate-float" />
        <div className="absolute right-1/3 bottom-0 h-96 w-96 rounded-full bg-purple-400/10 blur-3xl animate-float-delayed" />
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
