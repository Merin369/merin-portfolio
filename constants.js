export const METADATA = {
  author: "Merin K",
  title: "Portfolio | Merin K",
  description:
    "Merin K is a passionate Full Stack Developer skilled in building scalable and modern web applications using the MERN stack.",
  siteUrl: "https://merin-portfolio.vercel.app/",
  twitterHandle: "@merin_dev",
  keywords: [
    "Merin K",
    "Full Stack Developer",
    "MERN Developer",
    "React Developer",
    "Portfolio",
    "Web Developer",
    "JavaScript",
  ].join(", "),
  image: "/projects/preview.png",
  language: "English",
  themeColor: "#000000",
};

export const MENULINKS = [
  { name: "Home", ref: "home" },
  { name: "Skills", ref: "skills" },
  { name: "Projects", ref: "projects" },
  { name: "Contact", ref: "contact" },
];

export const TYPED_STRINGS = [
  "A Full Stack Developer who loves building real-world apps",
  "I turn ideas into scalable digital experiences 🚀",
  "Crafting modern, responsive, and elegant web apps",
  "Passionate about MERN stack and UI animations ✨",
];

export const SOCIAL_LINKS = [
  { name: "mail", url: "mailto:merik305@gmail.com" },
  { name: "linkedin", url: "https://www.linkedin.com/in/merin-k-8982b9238" },
  { name: "github", url: "https://github.com/Merin369" },
];

export const SKILLS = {
  languagesAndTools: [
    "html",
    "css",
    "javascript",
    "nodejs",
    "express",
  ],
  librariesAndFrameworks: [
    "react",
    "tailwindcss",
  ],
  databases: ["mongodb"],
  other: ["git"],
};

export const PROJECTS = [
  {
    name: "Concert Booking Platform",
    images: [
      "/projects/booking-concert-home.jpeg",
      "/projects/booking-concert-login.jpeg",
      "/projects/booking-concert-sign.jpeg",
      "/projects/booking-concert-admin.jpeg",
    ],
    description:
      "A full-stack MERN app for concert ticket booking with JWT authentication, QR code ticket generation, and secure payments.",
    gradient: ["#000428", "#004e92"],
    url: "https://github.com/Merin369/concert-booking-app",
    tech: ["react", "nodejs", "express", "mongodb"],
  },
  {
    name: "Blinkit Clone",
    images: [
      "/projects/blinkit-home.jpeg",
      "/projects/blinkit-home-2.jpeg",
      "/projects/blinkit-cart.jpeg",
      "/projects/blinkit-register.jpeg",
    ],
    description:
      "A React + Tailwind Blinkit clone with cart animations, filters, and smooth product navigation.",
    gradient: ["#F14658", "#DC2537"],
    url: "https://github.com/Merin369/blinkit-clone",
    tech: ["react", "tailwindcss", "context-api"],
  },
];

export const GTAG = "";
