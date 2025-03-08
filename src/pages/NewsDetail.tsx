import { useParams, useNavigate } from "react-router-dom";
import { newsData } from "../data";
import { ArrowLeft } from "lucide-react";

export default function NewsDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate(); // Gunakan useNavigate untuk kembali ke halaman sebelumnya
  const newsItem = newsData.find((news) => news.id === Number(id));

  if (!newsItem) {
    return (
      <p className="text-center text-gray-600 dark:text-gray-300 mt-20">
        Berita tidak ditemukan.
      </p>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 px-4 py-8 pt-28">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
        {/* Tombol Back dengan Icon */}
        <div className="p-4 flex items-center">
          <button
            onClick={() => navigate(-1)} // Kembali ke halaman sebelumnya
            className="flex items-center gap-2 text-gray-900 dark:text-white hover:underline"
          >
            <ArrowLeft className="w-5 h-5" /> Kembali
          </button>
        </div>

        {/* Gambar */}
        <img
          src={newsItem.image}
          alt={newsItem.title}
          className="w-full h-60 object-cover"
        />

        {/* Konten Berita */}
        <div className="p-6">
          <p
            className={`text-xs font-semibold uppercase ${
              newsItem.category === "Promo"
                ? "text-purple-600"
                : "text-blue-600"
            }`}
          >
            {newsItem.category}
          </p>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mt-2">
            {newsItem.title}
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            {newsItem.date}
          </p>
          <p className="text-gray-700 dark:text-gray-300 mt-4">
            {newsItem.description}
          </p>

          {/* Detail tambahan */}
          <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Detail Promo / Berita
            </h2>
            <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
              {newsItem.details}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
