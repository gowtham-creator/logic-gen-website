'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export interface TextAnimateProps {
  children: ReactNode;
  animation?: 'blurInUp' | 'blurInDown' | 'fadeIn';
  by?: 'character' | 'word';
  once?: boolean;
  className?: string;
  staggerDuration?: number;
  duration?: number;
}

export function TextAnimate({
  children,
  animation = 'blurInUp',
  by = 'character',
  once = false,
  className = '',
  staggerDuration = 0.03,
  duration = 0.5,
}: TextAnimateProps) {
  const text = typeof children === 'string' ? children : '';

  const getVariants = (animationType: string) => {
    switch (animationType) {
      case 'blurInUp':
        return {
          hidden: { opacity: 0, filter: 'blur(10px)', y: 10 },
          visible: { opacity: 1, filter: 'blur(0px)', y: 0 },
        };
      case 'blurInDown':
        return {
          hidden: { opacity: 0, filter: 'blur(10px)', y: -10 },
          visible: { opacity: 1, filter: 'blur(0px)', y: 0 },
        };
      case 'fadeIn':
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        };
      default:
        return {
          hidden: { opacity: 0, filter: 'blur(10px)', y: 10 },
          visible: { opacity: 1, filter: 'blur(0px)', y: 0 },
        };
    }
  };

  const variants = getVariants(animation);

  if (by === 'character') {
    const characters = text.split('');
    return (
      <motion.span className={className}>
        {characters.map((char, index) => (
          <motion.span
            key={`${char}-${index}`}
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{
              duration,
              delay: once ? index * staggerDuration : index * staggerDuration,
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.span>
    );
  }

  // by word
  const words = text.split(' ');
  return (
    <motion.span className={className}>
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{
            duration,
            delay: once ? index * staggerDuration : index * staggerDuration,
          }}
        >
          {word}{' '}
        </motion.span>
      ))}
    </motion.span>
  );
}
