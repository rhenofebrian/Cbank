import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: string; // Hanya menerima teks agar bisa dipecah per huruf
  baseOpacity?: number;
  blurStrength?: number;
  containerClassName?: string;
  textClassName?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  baseOpacity = 0.2,
  blurStrength = 6,
  containerClassName = "",
  textClassName = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const letters = el.querySelectorAll(".letter");

    gsap.fromTo(
      letters,
      { opacity: baseOpacity, filter: `blur(${blurStrength}px)`, y: 20 },
      {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        stagger: 0.05, // Efek animasi satu per satu
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          end: "bottom 50%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [baseOpacity, blurStrength]);

  // Pecah teks jadi <span> per huruf
  const splitText = children.split("").map((char, i) => (
    <span key={i} className="letter inline-block">
      {char === " " ? "\u00A0" : char}
    </span>
  ));

  return (
    <div ref={containerRef} className={`scroll-reveal ${containerClassName}`}>
      <p className={`scroll-reveal-text ${textClassName}`}>{splitText}</p>
    </div>
  );
};

export default ScrollReveal;
