import { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import { Percent, Gift, Banknote } from "lucide-react";

const MarqueePromo = () => {
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setReverse(currentScrollY < lastScrollY); // Jika scroll up → reverse = true
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Marquee
      className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-3 text-lg font-extrabold tracking-wide shadow-lg dark:shadow-blue-400/50 overflow-hidden"
      gradient={false}
      speed={50}
      pauseOnHover
      loop={0}
    >
      <div
        className={`flex items-center gap-6 transition-transform duration-500 ${
          reverse ? "animate-reverse" : ""
        }`}
      >
        <span className="flex items-center gap-2 hover:scale-105 transition">
          <Percent className="w-6 h-6 text-blue-300" />
          Cashback hingga 10% untuk Transaksi Digital
        </span>

        <span className="mx-6">|</span>

        <span className="flex items-center gap-2 hover:scale-105 transition">
          <Gift className="w-6 h-6 text-blue-300" />
          Gratis Biaya Admin!
        </span>

        <span className="mx-6">|</span>

        <span className="flex items-center gap-2 hover:scale-105 transition">
          <Banknote className="w-6 h-6 text-blue-300" />
          Keamanan Dana Terjamin
        </span>
      </div>
    </Marquee>
  );
};

export default MarqueePromo;
