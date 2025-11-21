'use client';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';

const faqs = [
  {
    title: 'What is Logicgen?',
    description:
      'Logicgen is an AI-powered platform that converts complex policy documents and code into executable DMN and Drools rules with full traceability, ambiguity detection, and local-only LLM processing.',
  },
  {
    title: 'Why is DMN important?',
    description:
      'DMN (Decision Model and Notation) is a standard by the Object Management Group for modeling repeatable business decisions. It ensures interchangeability across organizations, bridges business and IT, and supports decision automation in processes like BPMN.',
  },
  {
    title: 'Key benefits of using DMN',
    description:
      'DMN improves collaboration between business and IT, provides readable decision models, enables automation of complex rules, enhances traceability and flexibility, and integrates seamlessly with BPMN for streamlined processes.',
  },
  {
    title: 'How to implement DMN effectively',
    description:
      'Start with a Decision Requirements Diagram (DRD) to map dependencies. Use decision tables for logic, FEEL expressions for calculations, and integrate with BPMN processes. Tools like Trisotech or Camunda help model and execute decisions.',
  },
  {
    title: 'Common pitfalls in DMN adoption',
    description:
      'Avoid over-complex models by modularizing decisions. Ensure business-IT alignment to prevent misinterpretation. Start small to build familiarity, and use tools that support seamless requirements-to-execution transitions.',
  },
  {
    title: 'Case studies showcasing DMN success',
    description:
      'In banking, DMN simplifies loan origination by automating credit decisions (OMG example). Retail uses it for dynamic pricing. Healthcare applies it for patient eligibility, reducing errors and improving compliance in real-world deployments.',
  },
];

function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={`container mx-auto py-[100px] flex flex-row gap-20`}>
      {/* Header with "Get your answers" pill */}
      <div className="flex flex-col items-start mb-8 min-w-[50vh]">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4 rounded-full bg-[#FFE3CB] px-6 py-3 text-sm font-medium"
        >
          Get your answers
        </motion.div>
        <h1 className="text-5xl font-medium tracking-wide text-gray-900">
          Frequently<br />Asked Questions
        </h1>
      </div>

      {/* FAQ Accordion */}
      <div className="h-fit w-full rounded-xl border border-gray-200 bg-white shadow-sm">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className={`overflow-hidden ${index !== faqs.length - 1 ? 'border-b border-gray-200' : ''}`}
            onClick={() => handleClick(index)}
          >
            <button
              className={`flex w-full cursor-pointer items-center justify-between gap-2 p-4 text-left transition-all ${activeIndex === index
                ? 'text-gray-900'
                : 'text-gray-700 hover:text-gray-900'
                }`}
            >
              <span className="text-2xl p-5">{faq.title}</span>
              <Plus
                className={`h-5 w-5 transition-transform ${activeIndex === index ? 'rotate-45 text-blue-600' : 'text-gray-400'
                  }`}
              />
            </button>
            <AnimatePresence mode="sync">
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    duration: 0.3,
                    ease: 'easeInOut',
                    delay: 0.14,
                  }}
                >
                  <p className="px-10 pb-4 text-sm text-gray-600 sm:text-base">
                    {faq.description}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default FAQSection;