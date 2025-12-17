import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="py-16 sm:py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Privacy Policy
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mb-12">
            Last updated: December 17, 2024
          </p>

          <div className="prose prose-sm sm:prose-base max-w-none">
            <section className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                1. Introduction
              </h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                LogicGen ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our policy automation platform and services.
              </p>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                By using our services, you agree to the collection and use of information in accordance with this policy.
              </p>
            </section>

            <section className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                2. Information We Collect
              </h2>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                2.1 Information You Provide
              </h3>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-sm sm:text-base text-gray-700">
                <li>Account information (name, email, company name)</li>
                <li>Policy documents and files you upload</li>
                <li>Payment information (processed securely by our payment providers)</li>
                <li>Communications with our support team</li>
              </ul>

              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                2.2 Automatically Collected Information
              </h3>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-sm sm:text-base text-gray-700">
                <li>Usage data and analytics</li>
                <li>Device information (IP address, browser type, operating system)</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                3. How We Use Your Information
              </h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                We use the collected information for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-gray-700">
                <li>Providing and maintaining our services</li>
                <li>Processing your policy documents and generating DMN/Drools rules</li>
                <li>Improving our platform and user experience</li>
                <li>Communicating with you about updates, security alerts, and support</li>
                <li>Detecting and preventing fraud or security issues</li>
                <li>Complying with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                4. Data Security
              </h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                We implement industry-standard security measures to protect your data:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-gray-700">
                <li>End-to-end encryption for data in transit and at rest</li>
                <li>SOC 2 Type II certified infrastructure</li>
                <li>Regular security audits and penetration testing</li>
                <li>Local-only LLM processing to keep sensitive data on your infrastructure</li>
                <li>Access controls and authentication mechanisms</li>
              </ul>
            </section>

            <section className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                5. Data Sharing and Disclosure
              </h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                We do not sell your personal information. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-gray-700">
                <li>With your explicit consent</li>
                <li>With service providers who assist in our operations (under strict confidentiality agreements)</li>
                <li>To comply with legal obligations or respond to lawful requests</li>
                <li>In connection with a merger, acquisition, or sale of assets</li>
              </ul>
            </section>

            <section className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                6. Your Rights
              </h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-gray-700">
                <li>Access your personal information</li>
                <li>Correct inaccurate or incomplete data</li>
                <li>Request deletion of your data</li>
                <li>Object to or restrict processing of your data</li>
                <li>Export your data in a portable format</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                7. International Data Transfers
              </h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your data in accordance with this Privacy Policy and applicable laws, including GDPR for EU residents.
              </p>
            </section>

            <section className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                8. Changes to This Policy
              </h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date. For significant changes, we will provide prominent notice or obtain your consent as required by law.
              </p>
            </section>

            <section className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                9. Contact Us
              </h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                If you have questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-sm sm:text-base text-gray-700">
                  <strong>Email:</strong> privacy@logicgen.com<br />
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
