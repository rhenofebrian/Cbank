import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left bg-gradient-to-br from-gray-50 to-gray-200 dark:from-black dark:to-gray-900 text-black dark:text-white px-6 md:px-12 overflow-hidden">
      {/* Efek Cahaya di Belakang */}
      <div className="absolute -top-32 left-0 w-72 h-72 bg-blue-500/30 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-300/30 blur-[140px] rounded-full"></div>

      {/* Konten */}
      <div className="max-w-6xl flex flex-col md:flex-row items-center gap-12">
        {/* Kiri: Gambar */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 flex justify-center relative"
        >
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1550565118-3a14e8d0386f?q=80&w=1000&auto=format&fit=crop"
              alt="Banking"
              className="max-w-[250px] md:max-w-sm lg:max-w-md rounded-xl shadow-2xl transition-transform duration-500 hover:scale-105 border-4 border-blue-500/30"
            />
            {/* Efek Glow di Belakang Gambar */}
            <div className="absolute w-40 h-40 bg-blue-500/40 blur-3xl rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50 animate-pulse"></div>
          </div>
        </motion.div>

        {/* Kanan: Teks */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 space-y-6"
        >
          {/* Judul dengan Efek Glowing */}
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text dark:from-blue-300 dark:to-blue-500 drop-shadow-md leading-normal pb-2 dark:drop-shadow-[0_0_20px_rgba(99,155,255,0.6)]">
            <h2>Digital Banking</h2>
          </h2>

          {/* Deskripsi dengan ScrollReveal */}
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base md:text-lg">
            <ScrollReveal>
              {
                "Solusi perbankan modern yang menawarkan keamanan, kecepatan, dan kemudahan di ujung jari Anda. Rasakan pengalaman finansial yang lebih inovatif dan efisien."
              }
            </ScrollReveal>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
