import { useEffect, useRef } from "react";
import { MENULINKS } from "../../constants";

const PROJECT_CARDS = [
  {
    title: "Concert Booking Platform",
    image: "/projects/booking-concert-home.jpeg",
    description:
      "A full-stack MERN app for concert ticket booking with JWT authentication, QR code ticket generation, and secure payments.",
    gradient: "from-[#000428] to-[#004e92]",
    tech: ["react", "nodejs", "mongodb", "express"],
  },
  {
    title: "Concert Admin Dashboard",
    image: "/projects/booking-concert-admin.jpeg",
    description:
      "An admin dashboard to manage concerts, users, and bookings efficiently with complete CRUD functionality.",
    gradient: "from-[#000428] to-[#004e92]",
    tech: ["react", "express", "mongodb", "stripe"],
  },
  {
    title: "Blinkit Clone",
    image: "/projects/blinkit-home.jpeg",
    description:
      "A React + TypeScript Blinkit clone with cart animations, filters, and smooth product navigation.",
    gradient: "from-[#F14658] to-[#DC2537]",
    tech: ["react", "typescript", "tailwindcss", "context-api"],
  },
  {
    title: "Blinkit Cart Page",
    image: "/projects/blinkit-cart.jpeg",
    description:
      "Interactive cart page that dynamically updates totals and supports checkout integration.",
    gradient: "from-[#F14658] to-[#DC2537]",
    tech: ["react", "context-api", "vite"],
  },
];

const Projects = () => {
  const scrollRef = useRef(null);
  const animationRef = useRef(null);
  const isPausedRef = useRef(false);

  // 🔄 Auto-scroll effect
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollPos = 0;
    const scrollSpeed = 0.7;

    const scroll = () => {
      if (!isPausedRef.current) {
        scrollPos += scrollSpeed;
        if (scrollPos >= container.scrollWidth / 2) scrollPos = 0;
        container.scrollLeft = scrollPos;
      }
      animationRef.current = requestAnimationFrame(scroll);
    };

    animationRef.current = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  const handleMouseEnter = () => (isPausedRef.current = true);
  const handleMouseLeave = () => (isPausedRef.current = false);

  return (
    <section
      id={MENULINKS[2].ref}
      className="w-full bg-black py-20 relative select-none"
    >
      <div className="section-container text-white text-center md:text-left">
        <p className="uppercase tracking-widest text-gray-400">PROJECTS</p>
        <h1 className="text-5xl md:text-6xl mt-2 font-semibold text-gradient w-fit mx-auto md:mx-0">
          My Projects
        </h1>
        <h2 className="text-lg md:text-[1.65rem] font-medium mt-2 text-gray-300 max-w-xl mx-auto md:mx-0">
          Each project is crafted with creativity, precision, and love ❤️
        </h2>
      </div>

      {/* Auto-scroll wrapper */}
      <div
        ref={scrollRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="flex gap-8 mt-16 overflow-hidden whitespace-nowrap px-6 md:px-12"
      >
        {[...PROJECT_CARDS, ...PROJECT_CARDS].map((proj, index) => (
          <div
            key={index}
            className={`relative flex-shrink-0 w-[85vw] sm:w-[420px] md:w-[650px] lg:w-[700px] h-[340px] sm:h-[400px] md:h-[460px] rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-700 hover:scale-[1.03] bg-gradient-to-br ${proj.gradient}`}
          >
            {/* Floating Tech Logos */}
            <div className="absolute top-4 left-4 flex flex-wrap gap-3 opacity-80">
              {proj.tech.map((t) => (
                <img
                  key={t}
                  src={`/projects/tech/${t}.svg`}
                  alt={t}
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain drop-shadow-lg"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/projects/tech/react.svg";
                  }}
                />
              ))}
            </div>

            {/* Main project image */}
            <img
              src={proj.image}
              alt={proj.title}
              className="absolute inset-0 w-full h-full object-cover opacity-90"
            />

            {/* Text overlay */}
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-6 flex flex-col justify-end">
              <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-purple-400">
                {proj.title}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {proj.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
