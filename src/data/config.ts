const config = {
  title: "Akash  | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Akash, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Coding Ducks, The Booking Desk, Ghostchat, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Akash, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Akash",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "Coding Ducks",
    "The Booking Desk",
    "Ghostchat",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Akash",
  email: "personalakash23@gmail.com",
  site: "https://xakash.netlify.app",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: " ",
    linkedin: "https://www.linkedin.com/in/akash233",
    instagram: "https://www.instagram.com/akasssshhuuu/",
    facebook: "https://www.facebook.com/HotChaddi/",
    github: "https://github.com/xakash23",
  },
};
export { config };
