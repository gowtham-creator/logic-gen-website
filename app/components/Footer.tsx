// app/components/Footer.tsx
import Link from 'next/link';
import { satoshi } from '@/app/fonts';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`${satoshi.className} bg-white`}>
      {/* Divider */}
      <div className="border-t border-gray-200" />

      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4 lg:gap-20">
          {/* Column 1 */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900">
              About
            </h3>
            <ul className="mt-6 space-y-4">
              <li>
                <Link href="/about" className="text-base text-gray-600 hover:text-gray-900 transition-colors">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-base text-gray-600 hover:text-gray-900 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-base text-gray-600 hover:text-gray-900 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900">
              Product
            </h3>
            <ul className="mt-6 space-y-4">
              <li>
                <Link href="/pricing" className="text-base text-gray-600 hover:text-gray-900 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/enterprise" className="text-base text-gray-600 hover:text-gray-900 transition-colors">
                  Enterprise
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-base text-gray-600 hover:text-gray-900 transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900">
              Resources
            </h3>
            <ul className="mt-6 space-y-4">
              <li>
                <Link href="/guide" className="text-base text-gray-600 hover:text-gray-900 transition-colors">
                  Guide
                </Link>
              </li>
              <li>
                <Link href="/docs" className="text-base text-gray-600 hover:text-gray-900 transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/roadmap" className="text-base text-gray-600 hover:text-gray-900 transition-colors">
                  Roadmap
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900">
              Legal & Security
            </h3>
            <ul className="mt-6 space-y-4">
              <li>
                <Link href="/privacy" className="text-base text-gray-600 hover:text-gray-900 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-base text-gray-600 hover:text-gray-900 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-16 flex flex-col items-center justify-between border-t border-gray-200 pt-10 md:flex-row md:items-center">
          <p className="text-center text-sm text-gray-600 md:text-left">
            An enterprise-grade Policy-to-Rules
            <br /> Automation Platform built for regulated environments.
          </p>

          <p className="mt-6 text-sm text-gray-600 md:mt-0">
            © {currentYear} Logicgen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}