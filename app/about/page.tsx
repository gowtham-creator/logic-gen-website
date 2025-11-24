'use client';

import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollElement from '@/components/uilayouts/scroll-animation';
import { satoshi } from '../fonts';

export default function AboutPage() {
  const values = [
    {
      id: 1,
      title: "Accuracy First",
      description: "We prioritize precision in rule extraction and validation to ensure compliance and reliability.",
      color: "bg-purple-300",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
          <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Transparency",
      description: "Every rule is traceable to its source with full audit trails and decision history.",
      color: "bg-cyan-300",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
          <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Privacy by Design",
      description: "Local-only LLM processing ensures your sensitive policies never leave your infrastructure.",
      color: "bg-pink-300",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
          <path d="M12 2L2 7v6c0 5.5 3.8 10.7 10 12 6.2-1.3 10-6.5 10-12V7l-10-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Innovation",
      description: "Combining cutting-edge AI with proven decision management standards like DMN and Drools.",
      color: "bg-yellow-300",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
          <path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: 5,
      title: "Collaboration",
      description: "Empowering SMEs, developers, and compliance teams to work together seamlessly.",
      color: "bg-orange-300",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      id: 6,
      title: "Efficiency",
      description: "Automate the tedious work of manual rule extraction, reducing weeks of effort to hours.",
      color: "bg-green-300",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  return (
    <div className={satoshi.className}>
      <Navbar />
      <main>
        {/* Hero Section */}
        <ScrollElement viewport={{ amount: 0.5, margin: '0px 0px 60px 0px', once: true }}>
          <section className="py-[120px] bg-white px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-5xl mx-auto"
            >
              <div className="inline-block bg-[#E4D4F4] text-black font-medium px-5 py-2 rounded-full text-sm mb-6">
                About Us
              </div>
              <h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-6">
                Transforming Policy <br className="hidden md:block" />
                Into Executable Logic
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We're on a mission to bridge the gap between complex policy documents and
                clean, validated decision rules—making compliance faster, more accurate, and fully auditable.
              </p>
            </motion.div>
          </section>
        </ScrollElement>

        {/* Our Story Section */}
        <ScrollElement viewport={{ amount: 0.5, margin: '0px 0px 100px 0px', once: true }}>
          <section className="py-[100px] bg-[#fafafa]">
            <div className="max-w-[80%] mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="grid md:grid-cols-2 gap-16 items-center"
              >
                <div>
                  <div className="inline-block bg-[#FFF4D6] text-black font-medium px-5 py-2 rounded-full text-sm mb-6">
                    Our Story
                  </div>
                  <h2 className="text-4xl md:text-5xl font-medium mb-6">
                    Born from Real-World Challenges
                  </h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      Enterprise teams spend countless hours manually extracting business rules from policy
                      documents, regulatory texts, and legacy code. The process is error-prone, time-consuming,
                      and difficult to audit.
                    </p>
                    <p>
                      We built LogicGen to solve this problem. By combining advanced AI with proven decision
                      management standards, we automate the entire workflow—from document ingestion to validated
                      DMN tables and Drools rules.
                    </p>
                    <p>
                      What used to take weeks now takes hours. What was opaque is now transparent. What was
                      error-prone is now validated and tested.
                    </p>
                  </div>
                </div>
                <div className="relative h-[400px] rounded-3xl bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 flex items-center justify-center overflow-hidden">
                  {/* Decorative illustration */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg viewBox="0 0 400 400" className="w-full h-full opacity-30">
                      <circle cx="200" cy="200" r="150" fill="#9333ea" opacity="0.1" />
                      <circle cx="200" cy="200" r="100" fill="#ec4899" opacity="0.1" />
                      <circle cx="200" cy="200" r="50" fill="#3b82f6" opacity="0.1" />
                    </svg>
                  </div>
                  <div className="relative z-10 text-center">
                    <div className="text-8xl mb-4">📋</div>
                    <div className="text-6xl">→</div>
                    <div className="text-8xl mt-4">⚙️</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </ScrollElement>

        {/* Mission & Vision Section */}
        <ScrollElement viewport={{ amount: 0.5, margin: '0px 0px 100px 0px', once: true }}>
          <section className="py-[100px] bg-white">
            <div className="max-w-[80%] mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <div className="inline-block bg-[#D4F4E4] text-black font-medium px-5 py-2 rounded-full text-sm mb-6">
                  Mission & Vision
                </div>
                <h2 className="text-4xl md:text-5xl font-medium">
                  Guiding Our Direction
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-10 border border-purple-100"
                >
                  <div className="w-16 h-16 bg-purple-200 rounded-2xl flex items-center justify-center mb-6">
                    <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-purple-600">
                      <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-gray-700 leading-relaxed">
                    To empower enterprises with intelligent automation that transforms complex policy
                    documents into accurate, auditable, and executable business rules—eliminating manual
                    effort while ensuring compliance and traceability.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl p-10 border border-cyan-100"
                >
                  <div className="w-16 h-16 bg-cyan-200 rounded-2xl flex items-center justify-center mb-6">
                    <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-cyan-600">
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                  <p className="text-gray-700 leading-relaxed">
                    A world where every organization can trust their decision logic, where policy changes
                    are implemented instantly and accurately, and where compliance teams, developers, and
                    business experts collaborate seamlessly through automated intelligence.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>
        </ScrollElement>

        {/* Core Values Section */}
        <ScrollElement viewport={{ amount: 0.5, margin: '0px 0px 100px 0px', once: true }}>
          <section className="py-[100px] bg-[#fafafa]">
            <div className="max-w-[80%] mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <div className="inline-block bg-[#FFDCE5] text-black font-medium px-5 py-2 rounded-full text-sm mb-6">
                  Core Values
                </div>
                <h2 className="text-4xl md:text-5xl font-medium mb-4">
                  What We Stand For
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Our values drive every decision, feature, and interaction.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {values.map((value, index) => (
                  <motion.div
                    key={value.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`h-14 w-14 ${value.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                        <div className="text-gray-700">
                          {value.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </ScrollElement>

        {/* CTA Section */}
        <ScrollElement viewport={{ amount: 0.5, margin: '0px 0px 100px 0px', once: true }}>
          <section className="py-[100px] bg-white">
            <div className="max-w-4xl mx-auto px-6 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-medium mb-6">
                  Ready to Transform Your<br className="hidden md:block" /> Policy Management?
                </h2>
                <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                  Join forward-thinking enterprises using LogicGen to automate rule extraction and validation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="#demo"
                    className="inline-flex items-center justify-center rounded-full bg-black px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-gray-800 hover:shadow-xl"
                  >
                    Get Started
                  </a>
                  <a
                    href="#demo"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-8 py-4 text-lg font-semibold text-gray-900 transition-all hover:border-gray-400 hover:bg-gray-50"
                  >
                    Book a Demo
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            </div>
          </section>
        </ScrollElement>

        <ScrollElement viewport={{ amount: 0.8, margin: '0px 0px 230px 0px', once: true }}>
          <Footer />
        </ScrollElement>
      </main>
    </div>
  );
}
