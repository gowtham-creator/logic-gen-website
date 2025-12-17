'use client';
import { useState } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqCategories = [
    {
      category: "General",
      questions: [
        {
          question: "What is LogicGen?",
          answer: "LogicGen is an AI-powered platform that converts complex policy documents and code into executable DMN and Drools rules with full traceability, ambiguity detection, and local-only LLM processing."
        },
        {
          question: "How does LogicGen work?",
          answer: "LogicGen ingests policy documents, extracts rules and entities, detects ambiguities, and generates validated DMN tables and Drools rules that you can deploy directly to your decision engine."
        },
        {
          question: "What file formats does LogicGen support?",
          answer: "LogicGen supports PDF, DOCX, HTML, and scanned documents. It preserves the original structure, headings, tables, and references."
        },
      ]
    },
    {
      category: "Pricing & Plans",
      questions: [
        {
          question: "What plans do you offer?",
          answer: "We offer Starter ($99/mo), Professional ($299/mo), and Enterprise (custom pricing) plans. All plans include a 14-day free trial."
        },
        {
          question: "Can I change my plan later?",
          answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
        },
        {
          question: "Do you offer refunds?",
          answer: "We offer a 30-day money-back guarantee if you're not satisfied with our service."
        },
      ]
    },
    {
      category: "Security & Compliance",
      questions: [
        {
          question: "Is my data secure?",
          answer: "Yes, we use enterprise-grade encryption, SOC 2 Type II certification, and comply with GDPR, ISO 27001, and HIPAA standards."
        },
        {
          question: "Where is my data stored?",
          answer: "Data is stored in secure, geographically distributed data centers. Enterprise customers can choose their preferred region or opt for on-premise deployment."
        },
        {
          question: "Do you process data locally?",
          answer: "Yes, our local-only LLM processing ensures your sensitive policy data never leaves your infrastructure."
        },
      ]
    },
    {
      category: "Technical",
      questions: [
        {
          question: "What is DMN?",
          answer: "DMN (Decision Model and Notation) is a standard by the Object Management Group for modeling repeatable business decisions. It ensures interoperability and bridges business and IT teams."
        },
        {
          question: "Can I integrate LogicGen with my existing systems?",
          answer: "Yes, LogicGen provides comprehensive APIs and webhooks for integration with your existing tools and workflows."
        },
        {
          question: "What level of support do you provide?",
          answer: "All plans include email support. Professional plans include priority chat support, and Enterprise customers get 24/7 support with a dedicated account manager."
        },
      ]
    },
  ];

  const handleClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="py-16 sm:py-20 md:py-24">
        {/* Header */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center mb-12 sm:mb-16">
          <div className="inline-block bg-[#FFE3CB] text-black font-medium px-4 py-2 rounded-full text-xs sm:text-sm mb-6">
            Help Center
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">
            Find answers to common questions about LogicGen
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
          {faqCategories.map((category, catIndex) => (
            <div key={catIndex}>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((faq, qIndex) => {
                  const globalIndex = catIndex * 100 + qIndex;
                  return (
                    <div
                      key={qIndex}
                      className="border border-gray-200 rounded-xl overflow-hidden bg-white"
                    >
                      <button
                        onClick={() => handleClick(globalIndex)}
                        className="flex w-full items-center justify-between p-4 sm:p-6 text-left hover:bg-gray-50 transition-colors"
                      >
                        <span className="text-base sm:text-lg font-semibold text-gray-900 pr-4">
                          {faq.question}
                        </span>
                        <Plus
                          className={`w-5 h-5 flex-shrink-0 transition-transform ${
                            activeIndex === globalIndex
                              ? 'rotate-45 text-blue-600'
                              : 'text-gray-400'
                          }`}
                        />
                      </button>
                      <AnimatePresence mode="sync">
                        {activeIndex === globalIndex && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{
                              duration: 0.3,
                              ease: 'easeInOut',
                            }}
                          >
                            <p className="px-4 sm:px-6 pb-4 sm:pb-6 text-sm sm:text-base text-gray-600 leading-relaxed">
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-16 sm:mt-20 text-center">
          <div className="bg-gray-50 rounded-2xl p-8 sm:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Still have questions?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6">
              Our team is here to help. Get in touch and we'll respond as soon as possible.
            </p>
            <button className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all">
              Contact Support
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
