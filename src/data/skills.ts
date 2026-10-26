import type { SkillCategory } from "../types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    items: ["React.js", "JavaScript", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS", "Material UI"],
  },
  {
    title: "Backend Development",
    items: ["Node.js", "Express.js", "REST APIs", "JWT Authentication", "bcrypt", "Backend Application Development"],
  },
  {
    title: "Databases",
    items: ["MongoDB", "MongoDB Atlas", "Mongoose", "MySQL", "PostgreSQL", "SQLite", "Sequelize"],
  },
  {
    title: "Tools & Workflow",
    items: ["Git", "GitHub", "Docker", "Postman", "npm", "pnpm", "AI-Assisted Development Tools"],
  },
  {
    title: "Additional Technologies",
    items: ["Python", "Prompt Engineering", "OCR & Document Processing", "React Native"],
  },
];
