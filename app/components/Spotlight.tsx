'use client';

export default function Spotlight() {
  return (
    <GradientHoverText />
  );
}

function GradientHoverText() {
  return (
    <div className="wrap flex items-center justify-center bg-white">
      <h1 className="gradient-text text-[35vh] font-semibold text-shadow-blue-400">
        LOGICGEN
      </h1>

      <style jsx>{`
        .wrap {
          width: 100%;
          margin: 0;
          padding: 0;
        }
        
        .gradient-text {
          /* Gradient with your exact Tailwind-like colors + opacity */
          background: linear-gradient(
            to right,
            rgba(59, 130, 246, 0.9),   /* blue-500 @ 20% */
            rgba(139, 92, 246, 0.6),   /* purple-500 @ 30% */
            rgba(103, 211, 238, 0.4),  /* cyan-400 @ 10% */
            rgba(139, 92, 246, 0.3),
            rgba(59, 130, 246, 0.2)
          );
          background-size: 300% 100%;
          background-clip: text;
          -webkit-background-clip: text;
          color: #000;                     /* Solid black by default */
          transition: color 0.4s ease;
          animation: flow 8s ease-in-out infinite;
        }
        .gradient-text:hover {
          color: transparent;             /* Reveal the gradient */
        }
        
        @keyframes rainbow {
          0% { background-position: left; }
          50% { background-position: right; }
          100% { background-position: left; }
        }
      `}</style>
    </div>
  );
}