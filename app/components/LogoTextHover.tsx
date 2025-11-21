// app/components/LogoTextHover.tsx
'use client';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useRef } from 'react';

interface LogoTextHoverProps {
  text: string;
  className?: string;
}

export function LogoTextHover({ text = 'LOGIC GEN', className }: LogoTextHoverProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = mouseYSpring;
  const left = mouseXSpring;

  const handleMouseMove = (e: React.MouseEvent<HTMLParagraphElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    x.set(e.clientX - rect.left - width / 2);
    y.set(e.clientY - rect.top - height / 2);
  };

  return (
    <motion.p
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="hover"
    >
      <motion.span
        variants={{
          initial: { clipPath: `inset(0% 100% 0% 0%)` },
          hover: { clipPath: `inset(0% 0% 0% 0%)` },
        }}
        style={{
          left,
          top,
          backgroundImage: 'linear-gradient(90deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          display: 'block',
        }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        {text}
      </motion.span>
      <motion.span
        className="relative"
        variants={{
          initial: { color: '#000000' },
          hover: { color: '#000000' },
        }}
        transition={{ duration: 0.3 }}
      >
        {text}
      </motion.span>
    </motion.p>
  );
}