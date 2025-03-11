import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { axiosInstance } from "../utils/axiosInstance";
import { promoData } from "../data"; // Data promo statis

interface NewsItem {
  id: string;
  url: string;
  title: string;
  image?: string;
  date: string;
  urlToImage?: string;
  publishedAt?: string;
}

export default function NewsPage() {
  const [newsData, setNewsData] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedCategory, setSelectedCategory] = useState<"news" | "promo">(
    "news"
  );

  // State pagination terpisah untuk News dan Promo
  const [currentPageNews, setCurrentPageNews] = useState(1);
  const [currentPagePromo, setCurrentPagePromo] = useState(1);
  const itemsPerPageNews = 6;
  const itemsPerPagePromos = 6;

  useEffect(() => {
    const fetchNews = async (query: string = import.meta.env.VITE_QUERY) => {
      setLoading(true);
      try {
        if (selectedCategory === "news") {
          const response = await axiosInstance.get("/", {
            params: {
              q: query,
              apiKey: import.meta.env.VITE_API_KEY,
            },
          });
          const articles = response.data.articles.map(
            (article: NewsItem, index: number) => ({
              id: index.toString(),
              title: article.title,
              image:
                article.urlToImage || "https://via.placeholder.com/600x400",
              date: article.publishedAt?.split("T")[0] || "Unknown date",
              url: article.url,
            })
          );
          setNewsData(articles);
        } else {
          setNewsData(
            promoData.map((item) => ({
              ...item,
              id: item.id.toString(),
            }))
          );
        }
      } catch (err) {
        console.error("Failed to fetch news.", err);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, [selectedCategory]);

  // Menghitung total halaman untuk news dan promo
  const totalPagesNews = Math.ceil(newsData.length / itemsPerPageNews);
  const totalPagesPromo = Math.ceil(promoData.length / itemsPerPagePromos);

  // Menentukan data yang akan ditampilkan berdasarkan halaman saat ini
  const currentNews = newsData.slice(
    (currentPageNews - 1) * itemsPerPageNews,
    currentPageNews * itemsPerPageNews
  );

  const currentPromo = promoData.slice(
    (currentPagePromo - 1) * itemsPerPagePromos,
    currentPagePromo * itemsPerPagePromos
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 px-6 py-10 pt-24">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8"
        >
          {selectedCategory === "news" ? "Latest News" : "Promo Deals"}
        </motion.h1>

        {/* Tombol Kategori */}
        <div className="flex justify-center mb-6 space-x-4">
          <button
            onClick={() => setSelectedCategory("news")}
            className={`px-4 py-2 text-lg font-medium rounded-lg transition-all ${
              selectedCategory === "news"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 dark:bg-gray-800 dark:text-white"
            }`}
          >
            News
          </button>
          <button
            onClick={() => setSelectedCategory("promo")}
            className={`px-4 py-2 text-lg font-medium rounded-lg transition-all ${
              selectedCategory === "promo"
                ? "bg-green-600 text-white"
                : "bg-gray-200 dark:bg-gray-800 dark:text-white"
            }`}
          >
            Promo
          </button>
        </div>

        {loading && <p className="text-center text-gray-500">Loading...</p>}

        {!loading && (
          <>
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {(selectedCategory === "news" ? currentNews : currentPromo).map(
                (item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: index * 0.1,
                      duration: 0.5,
                      ease: "easeOut",
                    }}
                  >
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block h-full"
                    >
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="relative bg-white dark:bg-gray-900 shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
                      >
                        <div className="relative overflow-hidden">
                          <motion.img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-60 object-cover transition duration-300 ease-in-out"
                            whileHover={{ scale: 1.08 }}
                          />
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                          <h2 className="text-xl font-bold text-gray-900 dark:text-white line-clamp-2">
                            {item.title}
                          </h2>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                            {item.date}
                          </p>
                        </div>
                      </motion.div>
                    </a>
                  </motion.div>
                )
              )}
            </motion.div>

            {/* Pagination untuk News */}
            {selectedCategory === "news" && totalPagesNews > 1 && (
              <div className="flex justify-center mt-10 space-x-4 items-center">
                <button
                  onClick={() =>
                    setCurrentPageNews((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPageNews === 1}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50"
                >
                  Previous
                </button>
                <span className="text-lg font-medium text-gray-900 dark:text-white">
                  Page {currentPageNews} of {totalPagesNews}
                </span>
                <button
                  onClick={() =>
                    setCurrentPageNews((prev) =>
                      Math.min(prev + 1, totalPagesNews)
                    )
                  }
                  disabled={currentPageNews === totalPagesNews}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            )}

            {/* Pagination untuk Promo */}
            {selectedCategory === "promo" && totalPagesPromo > 1 && (
              <div className="flex justify-center mt-10 space-x-4 items-center">
                <button
                  onClick={() =>
                    setCurrentPagePromo((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPagePromo === 1}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg disabled:opacity-50"
                >
                  Previous
                </button>
                <span className="text-lg font-medium text-gray-900 dark:text-white">
                  Page {currentPagePromo} of {totalPagesPromo}
                </span>
                <button
                  onClick={() =>
                    setCurrentPagePromo((prev) =>
                      Math.min(prev + 1, totalPagesPromo)
                    )
                  }
                  disabled={currentPagePromo === totalPagesPromo}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
