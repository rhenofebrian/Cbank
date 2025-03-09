import { useState } from "react";
import { Plus, Minus, Shield, Users, Clock, CreditCard } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "What is Cbank and how does it work?",
    answer:
      "Cbank is a modern digital banking platform that combines traditional banking services with cutting-edge technology. We provide secure, easy-to-use financial services including instant transfers, savings accounts, investment options, and comprehensive money management tools. Our platform is designed to make banking accessible and efficient for everyone.",
  },
  {
    question: "What are the main features of Cbank?",
    answer:
      "Cbank offers a wide range of features including real-time money transfers, bill payments, budgeting tools, savings goals, investment opportunities, and detailed transaction analytics. We also provide virtual cards, mobile payments, and integration with major payment platforms. All these features are accessible through our user-friendly mobile app and web platform.",
  },
  {
    question: "How secure is Cbank?",
    answer:
      "Security is our top priority at Cbank. We implement bank-grade encryption, multi-factor authentication, and continuous security monitoring. Our platform is compliant with all relevant banking regulations and we regularly undergo security audits. We also provide instant notifications for all transactions and allow users to freeze their cards instantly if needed.",
  },
  {
    question: "What are the fees associated with Cbank?",
    answer:
      "Cbank believes in transparent pricing. Our basic account is free and includes essential banking features. Premium accounts have a small monthly fee and provide additional benefits such as travel insurance, premium support, and higher transaction limits. All fees are clearly displayed in our app, and we never charge hidden fees.",
  },
  {
    question: "How can I contact Cbank support?",
    answer:
      "Our support team is available 24/7 through multiple channels. You can reach us via in-app chat, email, or phone. Premium users get priority support with dedicated account managers. We also have an extensive help center with guides and FAQs to help you find quick answers to common questions.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="w-full bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 py-20 flex flex-col lg:flex-row gap-12 lg:gap-24">
        {/* Left Column - Cbank Highlights */}
        <div className="lg:w-1/3">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 sticky top-8 border border-gray-100 dark:border-gray-700 shadow-sm">
            <div className="flex flex-col">
              {/* Logo and Brand */}
              <div className="mb-8 flex items-center">
                <div className="w-12 h-12 bg-blue-600 dark:bg-blue-700 rounded-xl flex items-center justify-center mr-4">
                  <CreditCard className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-gray-900 dark:text-white text-2xl font-bold">
                  Cbank
                </h3>
              </div>

              <h2 className="text-gray-900 dark:text-white text-2xl font-bold mb-6">
                Why choose Cbank?
              </h2>

              {/* Stats/Highlights */}
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-white dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 dark:text-white text-lg font-semibold">
                      2M+ Users
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Join our growing community of satisfied customers
                      worldwide.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 dark:text-white text-lg font-semibold">
                      100% Secure
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Bank-grade encryption and advanced security protocols.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 dark:text-white text-lg font-semibold">
                      24/7 Support
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Our dedicated team is always ready to assist you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - FAQ Section */}
        <div className="lg:w-2/3">
          <h1 className="text-gray-900 dark:text-white text-6xl font-bold mb-12">
            FAQ
          </h1>
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700 shadow-sm"
              >
                <motion.button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex items-center justify-between p-6 text-left"
                  whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.05)" }}
                >
                  <h3 className="text-gray-900 dark:text-white text-xl pr-8">
                    {item.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <div className="w-12 h-12 rounded-full bg-blue-600 dark:bg-blue-500 flex items-center justify-center">
                        <Minus className="w-6 h-6 text-white" />
                      </div>
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                        <Plus className="w-6 h-6 text-gray-900 dark:text-white" />
                      </div>
                    )}
                  </div>
                </motion.button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6">
                        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
