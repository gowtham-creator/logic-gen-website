'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TextAnimate } from '@/registry/magicui/text-animate';

interface WordItem {
  text: string;
  color?: string;
}

interface RotatingTextProps {
  words: (WordItem | string)[];
  className?: string;
  animationDuration?: number; // how long each word stays visible
}

export function RotatingText({
  words,
  className = '',
  animationDuration = 3, // 3 seconds per word
}: RotatingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, (animationDuration + 0.5) * 1000); // Add buffer time for animation

    return () => clearInterval(interval);
  }, [words.length, animationDuration]);

  const currentWord = words[currentIndex];
  const wordText = typeof currentWord === 'string' ? currentWord : currentWord.text;
  const wordColor = typeof currentWord === 'string' ? undefined : currentWord.color;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.5 }}
      >
        <div className={className} style={{ color: wordColor }}>
          <TextAnimate
            animation="blurInUp"
            by="character"
            duration={0.08}
            staggerDuration={0.04}
            className="block"
            once
          >
            {wordText}
          </TextAnimate>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
