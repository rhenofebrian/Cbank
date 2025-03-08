import { useCallback } from "react";
import { useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { Banknote, Shield, TrendingUp } from "lucide-react";
import Magnet from "./Magnet";

const Hero = () => {
  // Handle Typewriter
  const [text] = useTypewriter({
    words: [
      "Layanan perbankan modern dengan teknologi canggih.",
      "Keamanan dan kenyamanan dalam satu genggaman.",
      "Inovasi terbaru untuk pengalaman terbaik.",
    ],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 30,
    delaySpeed: 2000,
  });

  // Handle Particles
  const particlesInit = useCallback(async (engine) => {
    console.log("Engine loaded:", engine); // Debugging
    await loadFull(engine); // Pastikan ini berjalan
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center px-6 text-center bg-white dark:bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent dark:from-black/60" />

      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-16 left-10 w-36 h-36 bg-blue-300/30 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], y: [0, -10, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-10 right-20 w-28 h-28 bg-blue-400/30 rounded-full blur-xl"
        animate={{ scale: [1, 1.2, 1], y: [0, -10, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />

      {/* Particles Effect */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          particles: {
            number: { value: 30 },
            size: { value: 3 },
            move: { speed: 1 },
            opacity: { value: 0.5 },
            links: { enable: true, color: "#888888" },
          },
        }}
        className="absolute inset-0"
      />

      {/* Floating Icons */}
      <motion.div
        className="absolute top-20 right-20 w-12 h-12 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center shadow-md"
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Banknote className="w-8 h-8 text-blue-600 dark:text-blue-400" />
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-16 w-12 h-12 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center shadow-md"
        animate={{ rotate: [0, -10, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Shield className="w-8 h-8 text-blue-600 dark:text-blue-400" />
      </motion.div>

      <motion.div
        className="absolute bottom-32 right-32 w-12 h-12 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center shadow-md"
        animate={{ rotate: [0, -10, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <TrendingUp className="w-8 h-8 text-blue-600 dark:text-blue-400" />
      </motion.div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative z-10 max-w-2xl flex flex-col items-center justify-center"
      >
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text dark:from-blue-300 dark:to-blue-500 drop-shadow-md leading-normal pb-2 dark:drop-shadow-[0_0_20px_rgba(99,155,255,0.6)]">
          Selamat Datang di Bank Digital
        </h1>

        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">{text}</p>

        {/* CTA Button dengan Magnet Effect */}
        <div className="mt-8 flex justify-center gap-4">
          <Magnet padding={50} magnetStrength={15}>
            <motion.button
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 20px rgba(0, 0, 255, 0.6)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-lg shadow-md font-semibold transition-all"
            >
              Mulai Sekarang
            </motion.button>
          </Magnet>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
