import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FAQSection from "../components/FAQs";

export default function PricingPage() {
  const pricingFaqs = [
    {
      title: "Can I change plans later?",
      description: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.",
    },
    {
      title: "What payment methods do you accept?",
      description: "We accept all major credit cards, PayPal, and bank transfers for Enterprise customers.",
    },
    {
      title: "Is there a free trial?",
      description: "Yes, all plans come with a 14-day free trial. No credit card required to start.",
    },
    {
      title: "What happens after my trial ends?",
      description: "After your trial ends, you'll be automatically subscribed to your chosen plan. You can cancel at any time before the trial ends without being charged.",
    },
    {
      title: "Do you offer discounts for annual billing?",
      description: "Yes, we offer a 20% discount when you choose annual billing instead of monthly billing.",
    },
    {
      title: "Can I cancel my subscription?",
      description: "Yes, you can cancel your subscription at any time. Your access will continue until the end of your current billing period.",
    },
  ];

  const plans = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for small teams getting started with policy automation",
      features: [
        "Up to 50 policy documents/month",
        "Basic DMN & Drools generation",
        "Email support",
        "Standard ambiguity detection",
        "Community access",
      ],
      cta: "Start Free Trial",
      popular: false,
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "For growing teams that need advanced features and priority support",
      features: [
        "Up to 200 policy documents/month",
        "Advanced DMN & Drools generation",
        "Priority email & chat support",
        "Advanced ambiguity detection",
        "Custom validation rules",
        "API access",
        "Team collaboration tools",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored solutions for large organizations with specific requirements",
      features: [
        "Unlimited policy documents",
        "Dedicated account manager",
        "24/7 priority support",
        "Custom integrations",
        "On-premise deployment option",
        "Advanced security features",
        "SLA guarantees",
        "Custom training & onboarding",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="py-16 sm:py-20 md:py-24">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-block bg-[#DCF2FD] text-black font-medium px-4 py-2 rounded-full text-xs sm:text-sm mb-6">
            Pricing Plans
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Choose the right plan for your team
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Start with a free trial. No credit card required. Cancel anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-12 sm:mt-16 md:mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl border ${
                  plan.popular
                    ? "border-blue-500 shadow-xl scale-105"
                    : "border-gray-200"
                } bg-white p-6 sm:p-8 flex flex-col`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-xs sm:text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline mb-2">
                    <span className="text-4xl sm:text-5xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-base sm:text-lg text-gray-600 ml-2">
                        {plan.period}
                      </span>
                    )}
                  </div>
                  <p className="text-sm sm:text-base text-gray-600">
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-3 sm:space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm sm:text-base text-gray-700">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base transition-all ${
                    plan.popular
                      ? "bg-blue-500 text-white hover:bg-blue-600"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <FAQSection
          faqs={pricingFaqs}
          title="Pricing FAQs"
          badgeText="Have questions?"
        />
      </main>

      <Footer />
    </div>
  );
}
