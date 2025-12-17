'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function DemoCTA() {
  return (
    <section className="py-12 sm:py-16 md:py-[100px] bg-[#FAFAFA] my-12 sm:my-16 md:my-[100px]">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900"
        >
          Unlock clean, executable
          <br />
          decision logic in minutes, not months.
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-4 sm:mt-6 md:mt-8 max-w-3xl text-sm sm:text-base md:text-lg leading-relaxed text-gray-600 px-2"
        >
          Stop wrestling with ambiguous policies. Let LogicGen turn your rules into
          validated DMN and Drools models you can trust instantly, securely, and at scale.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 sm:mt-10 md:mt-12"
        >
          <Link
            href="/demo"
            className="group inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold text-white transition-all hover:bg-gray-800 hover:shadow-xl"
          >
            Talk for the demo
            <svg
              className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}