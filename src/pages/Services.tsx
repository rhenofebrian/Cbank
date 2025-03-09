import {
  ChevronDown,
  CreditCard,
  Building2,
  ArrowUpRight,
  BanknoteIcon,
  Calculator,
  ShieldCheck,
  X,
} from "lucide-react";
import { motion, useInView, useAnimationControls } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Magnetic } from "../components/effect/Magnet";

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const expertiseRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  const [scrollLocked, setScrollLocked] = useState(false);
  const [cardAnimationComplete, setCardAnimationComplete] = useState(false);
  const [cardAnimationStarted, setCardAnimationStarted] = useState(false);

  // Animation controls for cards
  const firstCardControls = useAnimationControls();
  const fourthCardControls = useAnimationControls();
  const secondCardControls = useAnimationControls();
  const thirdCardControls = useAnimationControls();

  // Track if expertise section is in view
  const isExpertiseInView = useInView(expertiseRef, {
    once: false,
    amount: 0.5,
  });

  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      if (scrollLocked && e.deltaY > 0) {
        e.preventDefault();
      }
    };

    if (scrollLocked) {
      window.addEventListener("wheel", handleScroll, { passive: false });
    } else {
      window.removeEventListener("wheel", handleScroll);
    }

    return () => window.removeEventListener("wheel", handleScroll);
  }, [scrollLocked]);

  useEffect(() => {
    // When expertise section comes into view, lock scrolling
    if (isExpertiseInView && !cardAnimationComplete) {
      setScrollLocked(true);
    }
  }, [isExpertiseInView, cardAnimationComplete]);

  // Use a more refined approach for scroll detection
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(
    null
  );

  useEffect(() => {
    if (cardAnimationComplete) {
      setScrollLocked(false);
    }
  }, [cardAnimationComplete]);

  useEffect(() => {
    // Use a more refined approach for scroll detection
    let lastScrollY = window.scrollY;
    let scrollTimeout: NodeJS.Timeout;
    let animationInProgress = false;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY;
      const expertiseRect = expertiseRef.current?.getBoundingClientRect();

      clearTimeout(scrollTimeout);

      if (
        expertiseRect &&
        expertiseRect.top <= window.innerHeight * 0.3 &&
        expertiseRect.bottom >= 0 &&
        !cardAnimationComplete &&
        !animationInProgress
      ) {
        if (scrollingDown && !cardAnimationStarted) {
          animationInProgress = true;
          setCardAnimationStarted(true);

          // Animate cards with staggered timing for smoother effect
          firstCardControls.start({
            x: "-80%",
            opacity: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
          });

          secondCardControls.start({
            x: "-80%",
            opacity: 1,
            transition: { duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] },
          });

          thirdCardControls.start({
            x: "-80%",
            opacity: 1,
            transition: { duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] },
          });

          fourthCardControls
            .start({
              x: "-80%",
              opacity: 1,
              transition: {
                duration: 0.8,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              },
            })
            .then(() => {
              scrollTimeout = setTimeout(() => {
                setCardAnimationComplete(true);
                animationInProgress = false;
              }, 300);
            });
        }
      }

      if (
        expertiseRect &&
        expertiseRect.top > window.innerHeight * 0.5 &&
        (cardAnimationStarted || cardAnimationComplete)
      ) {
        setCardAnimationStarted(false);
        setCardAnimationComplete(false);

        firstCardControls.start({
          x: "0%",
          opacity: 1,
          transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
        });

        secondCardControls.start({
          x: "0%",
          opacity: 1,
          transition: { duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] },
        });

        thirdCardControls.start({
          x: "0%",
          opacity: 1,
          transition: { duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] },
        });

        fourthCardControls.start({
          x: "0%",
          opacity: 1,
          transition: { duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] },
        });
      }

      lastScrollY = currentScrollY;
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(scrollTimeout);
    };
  }, [
    cardAnimationStarted,
    cardAnimationComplete,
    firstCardControls,
    secondCardControls,
    thirdCardControls,
    fourthCardControls,
  ]);

  useEffect(() => {
    let touchStartY = 0;
    let touchEndY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      // Store current touch position
      touchEndY = e.touches[0].clientY;
    };

    const handleTouchEnd = () => {
      const expertiseRect = expertiseRef.current?.getBoundingClientRect();
      const swipeDistance = touchStartY - touchEndY;

      if (
        expertiseRect &&
        expertiseRect.top <= window.innerHeight * 0.3 &&
        expertiseRect.bottom >= 0 &&
        !cardAnimationComplete &&
        !cardAnimationStarted &&
        swipeDistance > 50
      ) {
        setCardAnimationStarted(true);

        firstCardControls.start({
          x: "-80%",
          opacity: 0,
          transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
        });

        secondCardControls.start({
          x: "-80%",
          opacity: 1,
          transition: { duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] },
        });

        thirdCardControls.start({
          x: "-80%",
          opacity: 1,
          transition: { duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] },
        });

        fourthCardControls
          .start({
            x: "-80%",
            opacity: 1,
            transition: { duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] },
          })
          .then(() => {
            setTimeout(() => {
              setCardAnimationComplete(true);
            }, 300);
          });
      }

      // If user swiped up and we need to reset
      if (
        swipeDistance < -50 &&
        (cardAnimationStarted || cardAnimationComplete)
      ) {
        setCardAnimationStarted(false);
        setCardAnimationComplete(false);

        // Reset card positions with smooth animations
        firstCardControls.start({
          x: "0%",
          opacity: 1,
          transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
        });

        secondCardControls.start({
          x: "0%",
          opacity: 1,
          transition: { duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] },
        });

        thirdCardControls.start({
          x: "0%",
          opacity: 1,
          transition: { duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] },
        });

        fourthCardControls.start({
          x: "0%",
          opacity: 1,
          transition: { duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] },
        });
      }
    };

    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [
    cardAnimationStarted,
    cardAnimationComplete,
    firstCardControls,
    secondCardControls,
    thirdCardControls,
    fourthCardControls,
  ]);

  const scrollToExpertise = () => {
    if (expertiseRef.current) {
      // Reset animation states
      setCardAnimationStarted(false);
      setCardAnimationComplete(false);

      // Reset card positions
      firstCardControls.start({
        x: "0%",
        opacity: 1,
        transition: { duration: 0.3, ease: "easeOut" },
      });

      // Reset second and third card positions
      secondCardControls.start({
        x: "0%",
        opacity: 1,
        transition: { duration: 0.3, ease: "easeOut" },
      });

      thirdCardControls.start({
        x: "0%",
        opacity: 1,
        transition: { duration: 0.3, ease: "easeOut" },
      });

      fourthCardControls.start({
        x: "0",
        opacity: 1,
        transition: { duration: 0.3, ease: "easeOut" },
      });

      expertiseRef.current.scrollIntoView({ behavior: "smooth" });

      // Lock scrolling
      setScrollLocked(true);
    }
  };

  const expertiseCards = [
    {
      title: "20+",
      description: "Team of talented banking experts",
      delay: 0,
      type: "team",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      title: "5+ Years",
      description: "Experience in transforming banking",
      delay: 0.2,
      type: "experience",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1470&auto=format&fit=crop",
    },
    {
      title: "60+",
      description: "Successfully completed projects",
      delay: 0.4,
      type: "projects",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop",
    },
    {
      title: "24/7",
      description: "Customer support availability",
      delay: 0.6,
      type: "support",
      image:
        "https://images.unsplash.com/photo-1556742212-5b321f3c261b?q=80&w=1470&auto=format&fit=crop",
    },
  ];

  const serviceCards = [
    {
      title: "Personal Loans",
      description:
        "Flexible personal loans with competitive rates for all your needs, from home renovations to education expenses.",
      icon: BanknoteIcon,
      tags: ["Quick Approval", "Flexible Terms"],
      image:
        "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?q=80&w=1470&auto=format&fit=crop",
    },
    {
      title: "Business Credit",
      description:
        "Empower your business growth with our comprehensive credit solutions designed for businesses of all sizes.",
      icon: CreditCard,
      tags: ["Business", "Credit"],
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1470&auto=format&fit=crop",
    },
    {
      title: "Mortgage",
      description:
        "Make your dream home a reality with our competitive mortgage options and personalized guidance.",
      icon: Building2,
      tags: ["Real Estate", "Financing"],
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1473&auto=format&fit=crop",
    },
    {
      title: "Investment",
      description:
        "Grow your wealth with our diverse investment products managed by experienced financial advisors.",
      icon: Calculator,
      tags: ["Wealth", "Planning"],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1415&auto=format&fit=crop",
    },
  ];

  return (
    <div
      className="min-h-screen bg-gray-100 dark:bg-gray-950 transition-colors duration-500 overflow-x-hidden"
      ref={containerRef}
    >
      {/* Hero Section */}
      <section className="min-h-screen relative flex flex-col items-center justify-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-600 text-center text-gray-900 dark:text-white max-w-4xl tracking-tight"
          style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
        >
          We are security-first banking solution
        </motion.h1>

        <div className="absolute bottom-12">
          <Magnetic strength={30}>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              onClick={scrollToExpertise}
              className="p-4 rounded-full bg-black dark:bg-white text-white dark:text-black hover:scale-105 transition-transform duration-300 hover:bg-blue-600 dark:hover:bg-blue-600"
            >
              <ChevronDown className="w-6 h-6 animate-bounce" />
            </motion.button>
          </Magnetic>
        </div>
      </section>
      {/* Expertise Section */}
      <section
        id="expertise-content"
        className="py-20 px-4 md:px-8 min-h-screen flex items-center"
        ref={expertiseRef}
      >
        <div className="max-w-[90rem] mx-auto w-full">
          <motion.h2 className="text-xl font-light mb-12 text-gray-900 dark:text-white">
            Our Expertise
          </motion.h2>

          <div
            ref={cardsContainerRef}
            style={{
              display: "flex",
              overflowX: "auto", // Scroll horizontal
              scrollSnapType: "x mandatory", // Biar smooth snap saat scroll
              scrollbarWidth: "none", // Sembunyikan scrollbar
            }}
          >
            <div className="flex space-x-6">
              {expertiseCards?.length > 0 &&
                expertiseCards.map((card, index) => (
                  <motion.div
                    key={index}
                    animate={
                      index === 0
                        ? firstCardControls
                        : index === 1
                        ? secondCardControls
                        : index === 2
                        ? thirdCardControls
                        : fourthCardControls
                    }
                    initial={{ opacity: index === 3 ? 0 : 1, x: "0%" }}
                    transition={{
                      duration: 0.8,
                      delay: card.delay ?? 0,
                      ease: [0.16, 1, 0.3, 1], // Use a custom bezier curve for smoother motion
                    }}
                    className="min-w-[400px] h-[500px] bg-white dark:bg-gray-800 rounded-3xl p-8 flex flex-col justify-between group cursor-pointer relative overflow-hidden"
                    whileHover={{
                      scale: 0.98,
                      transition: { duration: 0.4, ease: "easeOut" },
                    }}
                  >
                    <div className="relative z-10">
                      <h3 className="text-6xl font-light text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                        {card.title ?? "Default Title"}
                      </h3>
                      <p className="text-xl font-light text-gray-600 dark:text-gray-400">
                        {card.description ?? "Default description"}
                      </p>
                    </div>

                    {/* Background image with improved overlay transition */}
                    <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700">
                      <img
                        src={card.image || "/placeholder.svg"}
                        alt={card.type || "Expertise Image"}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        onError={(e) =>
                          (e.currentTarget.src = "/fallback-image.svg")
                        }
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
                    </div>

                    <div className="relative z-10 h-48">
                      {card.type === "experience" && (
                        <motion.img
                          src={card.image}
                          alt="Banking App"
                          className="absolute bottom-0 right-0 w-40 h-auto rounded-lg shadow-lg"
                          initial={{ rotate: 12 }}
                          whileHover={{ rotate: 0, scale: 1.1 }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                        />
                      )}
                      {card.type === "projects" && (
                        <motion.img
                          src={card.image}
                          alt="Project Portfolio"
                          className="absolute bottom-0 right-0 w-56 h-auto rounded-lg shadow-lg"
                          initial={{ rotate: -12 }}
                          whileHover={{ rotate: 0, scale: 1.1 }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                        />
                      )}
                      {index === 3 && (
                        <motion.div
                          className="absolute bottom-0 right-0 w-40 h-40 flex items-center justify-center"
                          initial={{ opacity: 0.2 }}
                          whileHover={{ opacity: 0.8, scale: 1.1 }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                          <ShieldCheck className="w-full h-full text-blue-500" />
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            className="mt-12 flex justify-center items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{
              opacity: !cardAnimationComplete ? 1 : 0,
            }}
            transition={{ duration: 0.5 }}
          >
            {!cardAnimationStarted && (
              <motion.div
                className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2"
                initial={{ y: 0 }}
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <ChevronDown className="w-4 h-4" />
                <span>Scroll down to see more</span>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section
        className="py-20 px-4 md:px-8 bg-gray-100 dark:bg-gray-950"
        ref={servicesRef}
      >
        <div className="max-w-[90rem] mx-auto">
          <motion.h2
            className="text-xl font-light mb-12 text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            Our Services
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceCards.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                  ease: [0.16, 1, 0.3, 1], // Use a custom bezier curve for smoother motion
                }}
                viewport={{ once: false, amount: 0.2, margin: "-100px" }}
                className="group relative overflow-hidden rounded-3xl bg-[#f5f5f5] dark:bg-gray-800 p-0 cursor-pointer h-[400px]"
                whileHover={{
                  y: -10,
                  transition: { duration: 0.4, ease: "easeOut" },
                }}
              >
                {/* Background Image with improved transitions */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-700"></div>
                </div>

                {/* Content with staggered animations */}
                <div className="relative z-10 flex flex-col justify-end h-full p-8">
                  <motion.div
                    className="bg-white/10 backdrop-blur-sm p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-blue-600/20 transition-colors duration-500"
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                    viewport={{ once: false, amount: 0.6 }}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <motion.h3
                    className="text-3xl font-light text-white mb-4"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                    viewport={{ once: false, amount: 0.6 }}
                  >
                    {service.title}
                  </motion.h3>

                  <motion.p
                    className="text-white/80 mb-6 max-w-md transform translate-y-0 opacity-100 group-hover:translate-y-0 transition-all duration-500"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                    viewport={{ once: false, amount: 0.6 }}
                  >
                    {service.description}
                  </motion.p>

                  <motion.div
                    className="flex gap-2 mb-4"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                    viewport={{ once: false, amount: 0.6 }}
                  >
                    {service.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-sm bg-white/10 backdrop-blur-sm rounded-full text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </motion.div>

                  <motion.div
                    className="flex items-center gap-2 text-white font-light"
                    initial={{ x: -10, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                    viewport={{ once: false, amount: 0.6 }}
                  >
                    <span>Learn more</span>
                    <ArrowUpRight className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
