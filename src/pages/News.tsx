import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { newsData } from "../data";

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState<
    "All" | "Promo" | "News"
  >("All");

  const filteredNews =
    selectedCategory === "All"
      ? newsData
      : newsData.filter((news) => news.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 px-6 py-10 pt-24">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
          className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12"
        >
          Promotions & News
        </motion.h1>

        {/* Category Filter */}
        <div className="flex justify-center space-x-4 mb-10">
          {["All", "Promo", "News"].map((category) => (
            <motion.button
              key={category}
              onClick={() =>
                setSelectedCategory(category as "All" | "Promo" | "News")
              }
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-lg transition text-lg font-medium shadow-md backdrop-blur-lg relative overflow-hidden ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-blue-700 to-blue-400 text-white"
                  : "bg-white dark:bg-gray-800 text-gray-900 dark:text-white border"
              }`}
            >
              <span className="relative z-10">{category}</span>

              {/* Border Animation on Hover */}
              <motion.span
                className="absolute inset-0 border-2 border-blue-500 opacity-0 rounded-lg"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          ))}
        </div>

        {/* News List */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {filteredNews.map((news, index) => (
            <motion.div
              key={news.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
                ease: "easeOut",
              }}
            >
              <Link to={`/news/${news.id}`} className="block h-full">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative bg-white dark:bg-gray-900 shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
                >
                  {/* Image with Hover Effect */}
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-60 object-cover transition duration-300 ease-in-out"
                      whileHover={{ scale: 1.08 }}
                    />
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <p
                      className={`text-sm font-semibold uppercase tracking-wide ${
                        news.category === "Promo"
                          ? "text-blue-600 dark:text-blue-400"
                          : "text-blue-700 dark:text-blue-500"
                      }`}
                    >
                      {news.category}
                    </p>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white line-clamp-2">
                      {news.title}
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                      {news.date}
                    </p>
                  </div>

                  {/* Hover Overlay Effect */}
                  <motion.div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
