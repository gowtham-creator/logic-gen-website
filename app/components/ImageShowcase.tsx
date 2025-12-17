'use client';

import { motion } from 'framer-motion';
import RadialGlowBackground from './RadialGlowBackground';
import Image from 'next/image';

export function ImageShowcase() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className="mt-12 sm:mt-16 md:mt-24 flex items-center justify-center px-2 sm:px-4"
    >
      <RadialGlowBackground intensity="medium" className="p-2 sm:p-4 md:p-8">
        <div className="relative w-[90vw] sm:w-[85vw] md:w-[70vw] max-w-7xl aspect-video rounded-xl sm:rounded-2xl overflow-hidden">
          {/* Image placeholder */}
          <div className="w-full h-full flex items-center justify-center">
            <Image src="/images/product-showcase.png" alt="Image Showcase" fill className="object-cover" />
          </div>
        </div>
      </RadialGlowBackground>
    </motion.div>
  );
}
