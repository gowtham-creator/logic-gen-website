'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
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
    scrollToSection(sectionId);
  };

  return (
    <nav className={`w-full border-b-2 border-gray-100 bg-white`}>
      <div className="mx-auto flex max-w-10/12 items-center justify-between px-6 py-5 lg:px-8">
        <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/images/lg-logo.png"
              alt="LogicGen Logo"
              width={40}
              height={40}
              className="object-contain"
            />
          <span className="text-xl font-bold tracking-tight">LOGICGEN</span>
        </Link>
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
        <div>
          <a
            href="#demo"
            onClick={(e) => handleNavClick(e, 'demo')}
            className="inline-flex items-center rounded-full bg-black px-6 py-3 text-base font-medium text-white transition-all hover:bg-gray-800 hover:shadow-lg cursor-pointer"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}