import { motion } from "framer-motion";
import Slider from "react-slick";
import { services } from "../data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Services() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  console.log("Services Data:", services);

  if (!services || services.length === 0) {
    return (
      <p className="text-center text-gray-500">Tidak ada layanan tersedia.</p>
    );
  }

  return (
    <section className="relative container mx-auto py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white tracking-tight">
        Layanan Kami
      </h2>

      <Slider {...settings} className="px-6">
        {services.map(({ name, icon: Icon }, index) => (
          <motion.div
            key={name || index}
            whileHover={{ scale: 1.08, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            className="p-4"
          >
            <motion.div
              className="relative group bg-white/20 dark:bg-gray-900/40 backdrop-blur-xl shadow-xl rounded-2xl p-10 text-center border border-gray-300/30 dark:border-gray-600/30 transition-all duration-500 hover:shadow-blue-500/70 hover:border-blue-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{
                y: -5,
                boxShadow: "0px 10px 30px rgba(59, 130, 246, 0.6)", // Warna biru
              }}
            >
              {/* Efek Parallax Layer */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.1),_transparent)] rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-blue-500/30 rounded-full blur-2xl opacity-30 group-hover:opacity-80 transition duration-700"></div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-cyan-500/30 rounded-full blur-2xl opacity-30 group-hover:opacity-80 transition duration-700"></div>

              {/* Ikon & Nama Layanan */}
              {Icon && (
                <Icon className="text-blue-600 dark:text-blue-300 text-7xl mx-auto transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3" />
              )}
              <h3 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight">
                {name}
              </h3>
            </motion.div>
          </motion.div>
        ))}
      </Slider>
    </section>
  );
}
