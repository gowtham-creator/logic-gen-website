// app/components/Footer.tsx
import Link from 'next/link';
import { satoshi } from '@/app/fonts';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`${satoshi.className} bg-white`}>
      {/* Divider */}
      <div className="border-t border-gray-200" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-16 lg:py-20 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:gap-12 md:grid-cols-3 lg:gap-20">
          {/* Column 1 */}
          <div>
            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-900">
              About
            </h3>
            <ul className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
              <li>
                <Link href="/about" className="text-sm sm:text-base text-gray-600 hover:text-gray-900 transition-colors">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm sm:text-base text-gray-600 hover:text-gray-900 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm sm:text-base text-gray-600 hover:text-gray-900 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-900">
              Product
            </h3>
            <ul className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
              <li>
                <Link href="/pricing" className="text-sm sm:text-base text-gray-600 hover:text-gray-900 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/enterprise" className="text-sm sm:text-base text-gray-600 hover:text-gray-900 transition-colors">
                  Enterprise
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm sm:text-base text-gray-600 hover:text-gray-900 transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-900">
              Legal & Security
            </h3>
            <ul className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
              <li>
                <Link href="/privacy" className="text-sm sm:text-base text-gray-600 hover:text-gray-900 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm sm:text-base text-gray-600 hover:text-gray-900 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-10 sm:mt-16 flex flex-col items-center justify-between border-t border-gray-200 pt-6 sm:pt-10 md:flex-row md:items-center">
          <p className="text-center text-xs sm:text-sm text-gray-600 md:text-left">
            An enterprise-grade Policy-to-Rules
            <br /> Automation Platform built for regulated environments.
          </p>

          <p className="mt-4 sm:mt-6 text-xs sm:text-sm text-gray-600 md:mt-0">
            © {currentYear} Logicgen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}