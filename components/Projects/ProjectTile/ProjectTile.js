import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import styles from "./ProjectTile.module.scss";

const tiltOptions = {
  max: 10,
  speed: 400,
  glare: true,
  "max-glare": 0.2,
  gyroscope: false,
};

const ProjectTile = ({ project, classes, isDesktop }) => {
  const projectCard = useRef(null);
  const scrollContainerRef = useRef(null);

  const { name, images, description, gradient, url, tech } = project;

  useEffect(() => {
    if (projectCard.current) {
      VanillaTilt.init(projectCard.current, tiltOptions);
    }
  }, []);

  // smooth horizontal scroll animation
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let scrollAmount = 0;
    const scrollSpeed = 0.6;
    let frame;

    const scroll = () => {
      scrollAmount += scrollSpeed;
      if (scrollAmount >= container.scrollWidth - container.clientWidth) {
        scrollAmount = 0;
      }
      container.scrollLeft = scrollAmount;
      frame = requestAnimationFrame(scroll);
    };
    scroll();

    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div
      className={`overflow-hidden rounded-3xl ${classes || ""}`}
      ref={projectCard}
      style={{
        maxWidth: isDesktop ? "calc(100vw - 2rem)" : "calc(100vw - 4rem)",
        flex: "1 0 auto",
        WebkitMaskImage: "-webkit-radial-gradient(white, black)",
      }}
    >
      <div
        className={`h-auto w-[40rem] bg-black ${styles.ProjectTile} rounded-3xl relative p-6 flex flex-col justify-between max-w-full`}
        style={{
          background: `linear-gradient(90deg, ${gradient[0]} 0%, ${gradient[1]} 100%)`,
        }}
      >
        {/* Project Info */}
        <div className="z-20 mb-8">
          <h1 className="font-medium text-3xl sm:text-4xl text-white">{name}</h1>
          <p className="text-lg font-medium text-gray-200 mt-2">{description}</p>

          {/* Tech badges */}
          <div className="flex flex-wrap gap-2 mt-3">
            {tech.map((t) => (
              <span
                key={t}
                className="bg-white/10 text-white text-sm px-3 py-1 rounded-full border border-white/20"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* 🚀 Horizontal auto-scroll image cards */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-hidden rounded-2xl pb-4"
          style={{
            scrollBehavior: "smooth",
          }}
        >
          {images?.map((img, i) => (
            <a
              key={i}
              href={url}
              target="_blank"
              rel="noreferrer"
              className="flex-shrink-0 relative rounded-2xl overflow-hidden w-[20rem] h-[14rem] group hover:scale-105 transition-transform duration-500"
            >
              <img
                src={img}
                alt={`${name} Screenshot ${i + 1}`}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-lg font-medium">
                View Project
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectTile;
