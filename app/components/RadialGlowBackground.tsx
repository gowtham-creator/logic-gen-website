export default function RadialGlowBackground({
  className,
  intensity = 'high', // "low" | "medium" | "high"
  children,
}: {
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
  children?: React.ReactNode;
}) {
  // Responsive intensity - lower on mobile
  const intensityMap = {
    low: 'opacity-20 sm:opacity-30 md:opacity-40 blur-2xl sm:blur-3xl',
    medium: 'opacity-25 sm:opacity-40 md:opacity-60 blur-2xl sm:blur-3xl',
    high: 'opacity-30 sm:opacity-50 md:opacity-80 blur-2xl sm:blur-3xl',
  };

  return (
    <div className={`relative rounded-3xl ${className || ''}`}>
      {/* Main glowing radial blob - smaller on mobile */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div
          className={`h-[250px] w-[300px] sm:h-[400px] sm:w-[500px] md:h-[600px] md:w-[800px] rounded-full bg-linear-to-r from-blue-500/15 via-purple-500/20 to-cyan-400/10 ${intensityMap[intensity]} animate-pulse-slow`}
        />
      </div>

      {/* Optional extra glow layers for depth - smaller and dimmer on mobile */}
      <div className="pointer-events-none absolute -inset-10 sm:-inset-16 md:-inset-20">
        <div className="absolute left-1/4 top-0 h-32 w-32 sm:h-64 sm:w-64 md:h-96 md:w-96 rounded-full bg-blue-400/5 sm:bg-blue-400/8 blur-2xl sm:blur-3xl animate-float" />
        <div className="absolute right-1/3 bottom-0 h-32 w-32 sm:h-64 sm:w-64 md:h-96 md:w-96 rounded-full bg-purple-400/5 sm:bg-purple-400/8 blur-2xl sm:blur-3xl animate-float-delayed" />
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
