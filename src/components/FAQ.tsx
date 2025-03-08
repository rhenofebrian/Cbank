import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, ChevronDown } from "lucide-react"; // 🔹 Pastikan diimpor dengan benar
import { faqs } from "../data";

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="container mx-auto py-16 px-6">
      {/* Judul FAQ */}
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white tracking-tight">
        FAQ
      </h2>

      <div className="max-w-3xl mx-auto flex flex-col gap-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg transition-all duration-300"
          >
            {/* Header FAQ */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between cursor-pointer p-4 rounded-lg transition-all focus:outline-none hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {faq.question}
              </h3>
              <motion.div
                animate={{ rotate: openFAQ === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {openFAQ === index ? (
                  <ChevronUp className="text-blue-600 dark:text-blue-400" />
                ) : (
                  <ChevronDown className="text-blue-600 dark:text-blue-400" />
                )}
              </motion.div>
            </button>

            {/* Jawaban FAQ */}
            <AnimatePresence>
              {openFAQ === index && (
                <motion.div
                  initial={{ opacity: 0, maxHeight: 0 }}
                  animate={{ opacity: 1, maxHeight: 500 }}
                  exit={{ opacity: 0, maxHeight: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="mt-4 text-gray-600 dark:text-gray-400">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
