'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { satoshi } from '../fonts';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    // Create an element reference based on component order in page.tsx
    const sectionMap: { [key: string]: number } = {
      hero: 0,
      features: 1,
      howItWorks: 2,
      faqs: 3,
      demo: 4,
      spotlight: 5,
      footer: 6,
    };

    const index = sectionMap[sectionId];
    if (index === undefined) return;

    // Get all main sections (children of main element)
    const main = document.querySelector('main');
    if (!main) return;

    const sections = Array.from(main.children);
    if (sections[index]) {
      const element = sections[index] as HTMLElement;
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    // Delay scroll to allow menu to close first
    setTimeout(() => {
      scrollToSection(sectionId);
    }, 300);
  };

  return (
    <nav className={`w-full border-b-2 border-gray-100 bg-white ${satoshi.variable}`}>
      <div className="mx-auto flex max-w-10/12 items-center justify-between px-4 py-4 sm:px-6 sm:py-5 lg:px-8">
        <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
          <Image
            src="/images/lg-logo.png"
            alt="LogicGen Logo"
            width={40}
            height={40}
            className="h-8 w-8 sm:h-10 sm:w-10 object-contain"
          />
          <span className="text-lg sm:text-xl font-bold tracking-tight">LOGICGEN</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center space-x-10 md:flex">
          <a
            href="#features"
            onClick={(e) => handleNavClick(e, 'features')}
            className="text-base font-medium text-gray-900 hover:text-black cursor-pointer"
          >
            Features
          </a>
          <a
            href="#howItWorks"
            onClick={(e) => handleNavClick(e, 'howItWorks')}
            className="text-base font-medium text-gray-900 hover:text-black cursor-pointer"
          >
            How It Works
          </a>
          <a
            href="#faqs"
            onClick={(e) => handleNavClick(e, 'faqs')}
            className="text-base font-medium text-gray-900 hover:text-black cursor-pointer"
          >
            FAQs
          </a>
          <Link href="/about" className="text-base font-medium text-gray-900 hover:text-black">
            About us
          </Link>
        </div>

        {/* Desktop CTA + Mobile Menu Button */}
        <div className="flex items-center gap-3">
          <a
            href="#demo"
            onClick={(e) => handleNavClick(e, 'demo')}
            className="hidden sm:inline-flex items-center rounded-full bg-black px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-medium text-white transition-all hover:bg-gray-800 hover:shadow-lg cursor-pointer"
          >
            Get Started
          </a>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-gray-900"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden border-t border-gray-100 bg-white"
          >
            <div className="px-4 py-4 space-y-3">
              <a
                href="#features"
                onClick={(e) => handleNavClick(e, 'features')}
                className="block py-2 text-base font-medium text-gray-900 hover:text-black cursor-pointer"
              >
                Features
              </a>
              <a
                href="#howItWorks"
                onClick={(e) => handleNavClick(e, 'howItWorks')}
                className="block py-2 text-base font-medium text-gray-900 hover:text-black cursor-pointer"
              >
                How It Works
              </a>
              <a
                href="#faqs"
                onClick={(e) => handleNavClick(e, 'faqs')}
                className="block py-2 text-base font-medium text-gray-900 hover:text-black cursor-pointer"
              >
                FAQs
              </a>
              <Link
                href="/about"
                className="block py-2 text-base font-medium text-gray-900 hover:text-black"
                onClick={() => setIsMenuOpen(false)}
              >
                About us
              </Link>
              <a
                href="#demo"
                onClick={(e) => handleNavClick(e, 'demo')}
                className="block w-full text-center rounded-full bg-black px-6 py-3 text-base font-medium text-white transition-all hover:bg-gray-800 cursor-pointer mt-4"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}