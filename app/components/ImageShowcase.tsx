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
      className="mt-24 flex items-center justify-center"
    >
      <RadialGlowBackground intensity="medium" className="p-8">
        <div className="relative w-[70vw] max-w-7xl aspect-video rounded-2xl overflow-hidden">
          {/* Image placeholder */}
          <div className="w-full h-full flex items-center justify-center">
            <Image src="/images/product-showcase.png" alt="Image Showcase" fill className="object-cover" />
          </div>
        </div>
      </RadialGlowBackground>
    </motion.div>
  );
}
