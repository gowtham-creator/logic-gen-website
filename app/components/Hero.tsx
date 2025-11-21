'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { RotatingText } from './RotatingText';
import { ImageShowcase } from './ImageShowcase';
import RadialGlowBackground from './RadialGlowBackground';

const rotatingWords = [
  { text: 'Enterprise Ready', color: 'hsla(205, 100%, 50%, 1)' },
  { text: 'Automated', color: 'hsla(266, 92%, 72%, 1)' },
  { text: 'Auditable', color: 'hsla(28, 100%, 46%, 1)' },
];

export default function Hero() {
  return (
    <section className="flex py-[100px] flex-col items-center justify-center bg-white px-6 text-center">
      {/* Main Headline */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-medium tracking-tight md:text-7xl"
      >
        Policy to Rules
      </motion.h2>

      {/* Rotating Text */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.9 }}
        className="mt-8 flex items-center justify-center"
      >
        <RotatingText
          words={rotatingWords}
          animationDuration={3}
          className="text-5xl font-bold italic tracking-tight md:text-7xl lg:text-8xl"
        />
      </motion.div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 1 }}
        className="mt-12 max-w-4xl text-lg leading-relaxed text-gray-600 md:text-xl"
      >
        Convert complex policy documents and code into executable DMN and Drools
        <br className="hidden md:block" />
        with full traceability, ambiguity detection, and local-only LLM processing.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-16 flex flex-col gap-4 sm:flex-row"
      >
        <Link
          href="/get-started"
          className="rounded-full bg-black px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-gray-800 hover:shadow-xl"
        >
          Get Started
        </Link>
        <Link
          href="/demo"
          className="flex items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-8 py-4 text-lg font-semibold text-gray-900 transition-all hover:border-gray-400 hover:bg-gray-50"
        >
          Demo
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </motion.div>

      <RadialGlowBackground intensity='low'>
        {/* Image Showcase */}
        <ImageShowcase />
      </RadialGlowBackground>

    </section>
  );
}