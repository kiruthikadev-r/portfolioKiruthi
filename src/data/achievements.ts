import type { Achievement } from "../types";

export const achievements: Achievement[] = [
  {
    title: "First Prize - Prompt Engineering Competition",
    date: "February 2024",
    description:
      "Recognized with First Prize in a Prompt Engineering Competition conducted by the Government, receiving the award from the District Collector, Karur.",
    issuer: "District Collector, Karur",
  },
  {
    title: "Industry-Ready Certification in Full-Stack Development",
    date: "NxtWave",
    description: "Specialization in the MERN stack (MongoDB, Express.js, React.js, Node.js).",
    issuer: "NxtWave",
  },
  {
    title: "Open-Source Contributor - freeCodeCamp",
    date: "Dec 2025 - Oct 2026",
    description:
      "Three merged pull requests to freeCodeCamp's curriculum, including a new interactive JavaScript string-method workshop (reviewed and merged by the freeCodeCamp core team) and two curriculum accuracy fixes.",
    issuer: "freeCodeCamp",
    url: "https://github.com/freeCodeCamp/freeCodeCamp/commit/88fa28f5d5dee4998549fc4a3defae9f8cd174fa",
  },
];
