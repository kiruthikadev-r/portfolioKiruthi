// Centralized personal info. Edit here - nothing below should need touching elsewhere.
export const profile = {
  name: "Kiruthika R",
  title: "Software Engineer | Full-Stack Developer",
  location: "Tamil Nadu, India",
  email: "priyakiruthi21@gmail.com",
  linkedin: "https://www.linkedin.com/in/kiruthika-r-903525246/",
  github: "https://github.com/kiruthikadev-r",
  githubUsername: "kiruthikadev-r",
  resumePath: "/resume/Kiruthika-R-Resume.pdf",
  resumeAvailable: true,
  heroStatus: "SOFTWARE ENGINEER · FULL-STACK DEVELOPER",
  heroHeadline: "BUILDING DIGITAL PRODUCTS. SOLVING REAL PROBLEMS.",
  heroSupport:
    "I'm a Software Engineer focused on building modern web applications, intuitive user experiences, reliable backend systems, and database-driven solutions. I enjoy turning complex requirements into practical, maintainable software.",
  aboutBio:
    "I'm a Software Engineer with a background in Computer Science and hands-on experience building web applications and backend systems. My work involves frontend development, API integration, database-driven workflows, and solving practical engineering problems. I value clean code, maintainable architecture, continuous learning, and building software that serves real user needs.",
  aboutHighlights: [
    "Currently a Software Engineer at Altius Technology, working remotely with a UK-based company",
    "University Rank Holder - M.Sc. Computer Science, Bharathidasan University",
    "Full-stack web development across frontend and backend",
    "API development and integration",
    "Database management and schema-related work",
    "Practical, problem-first engineering approach",
    "Active interest in AI-assisted development and prompt engineering",
  ],
  contactHeadline: "LET'S BUILD SOMETHING MEANINGFUL.",
  contactSupport:
    "I'm interested in solving challenging engineering problems, building useful digital products, and exploring opportunities where I can contribute, learn, and grow as a software engineer.",
  // Set once a Formspree (or similar) endpoint exists - e.g. https://formspree.io/f/xxxxxxx
  // Until then the contact form stays visible but submits via mailto instead of pretending to send.
  contactFormEndpoint: import.meta.env.VITE_CONTACT_FORM_ENDPOINT as string | undefined,
};
