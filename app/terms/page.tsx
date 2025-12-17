import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="py-16 sm:py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Terms of Service
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mb-12">
            Last updated: December 17, 2024
          </p>

          <div className="prose prose-sm sm:prose-base max-w-none">
            <section className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                By accessing or using LogicGen's platform and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. These terms constitute a legally binding agreement between you and LogicGen Inc.
              </p>
            </section>

            <section className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                2. Description of Service
              </h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                LogicGen provides an AI-powered platform for converting policy documents and code into executable DMN (Decision Model and Notation) and Drools rules. Our services include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-gray-700">
                <li>Policy document ingestion and analysis</li>
                <li>Rule extraction and entity identification</li>
                <li>Ambiguity detection and conflict resolution</li>
                <li>DMN table and Drools rule generation</li>
                <li>Validation and testing capabilities</li>
              </ul>
            </section>

            <section className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                3. User Accounts
              </h2>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                3.1 Account Registration
              </h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                You must provide accurate, complete, and current information during registration. You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.
              </p>

              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                3.2 Account Security
              </h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                You must notify us immediately of any unauthorized use of your account or security breaches. We reserve the right to suspend or terminate accounts that violate these terms or pose security risks.
              </p>
            </section>

            <section className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                4. Acceptable Use Policy
              </h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                You agree not to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-gray-700">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon intellectual property rights</li>
                <li>Upload malicious code, viruses, or harmful content</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Use the service for any unlawful or fraudulent purpose</li>
                <li>Reverse engineer or attempt to extract source code</li>
                <li>Resell or redistribute our services without authorization</li>
              </ul>
            </section>

            <section className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                5. Intellectual Property
              </h2>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                5.1 Our Rights
              </h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                All rights, title, and interest in LogicGen's platform, including software, technology, and documentation, remain our exclusive property. These terms do not grant you any license except as explicitly stated.
              </p>

              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                5.2 Your Content
              </h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                You retain ownership of your policy documents and data. By using our service, you grant us a limited license to process your content solely to provide our services. We do not claim ownership of your generated DMN/Drools outputs.
              </p>
            </section>

            <section className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                6. Payment and Billing
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-gray-700">
                <li>Fees are billed in advance on a monthly or annual basis</li>
                <li>All fees are non-refundable except as required by law or stated in our refund policy</li>
                <li>We reserve the right to change pricing with 30 days' notice</li>
                <li>Failure to pay may result in service suspension or termination</li>
                <li>You are responsible for all taxes associated with your subscription</li>
              </ul>
            </section>

            <section className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                7. Service Availability and Support
              </h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                We strive to maintain 99.9% uptime but do not guarantee uninterrupted service. We may perform maintenance, updates, or modifications that temporarily affect availability. Support is provided according to your subscription plan level.
              </p>
            </section>

            <section className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                8. Limitation of Liability
              </h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, LOGICGEN SHALL NOT BE LIABLE FOR:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-gray-700">
                <li>Indirect, incidental, special, or consequential damages</li>
                <li>Loss of profits, data, or business opportunities</li>
                <li>Damages exceeding the fees paid by you in the 12 months preceding the claim</li>
              </ul>
            </section>

            <section className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                9. Indemnification
              </h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                You agree to indemnify and hold LogicGen harmless from any claims, damages, losses, or expenses (including legal fees) arising from your use of our services, violation of these terms, or infringement of third-party rights.
              </p>
            </section>

            <section className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                10. Termination
              </h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                Either party may terminate this agreement at any time. Upon termination:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-gray-700">
                <li>Your access to the service will be immediately revoked</li>
                <li>You may export your data within 30 days</li>
                <li>We may delete your data after the retention period</li>
                <li>Fees paid are non-refundable except as stated in our refund policy</li>
              </ul>
            </section>

            <section className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                11. Changes to Terms
              </h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                We reserve the right to modify these terms at any time. We will notify you of material changes via email or platform notification. Continued use of our services after changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                12. Governing Law
              </h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                These terms are governed by the laws of the State of California, USA, without regard to conflict of law principles. Any disputes shall be resolved in the courts of San Francisco County, California.
              </p>
            </section>

            <section className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                13. Contact Information
              </h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                For questions about these Terms of Service, please contact:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-sm sm:text-base text-gray-700">
                  <strong>Email:</strong> legal@logicgen.com<br />
                  <strong>Address:</strong> LogicGen Inc., 123 Tech Street, San Francisco, CA 94105
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
