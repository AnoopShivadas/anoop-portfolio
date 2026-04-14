import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { SiNextdotjs } from "react-icons/si";

import carhubImg from "@/public/carhub.png";
import realtorImg from "@/public/realtor.png";
import ecommerceImg from "@/public/ecommerce.png";

// Navigation links
export const LINKS = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

// External links
export const EXTRA_LINKS = {
  linkedin: "https://www.linkedin.com/in/anoop-k-shivadas-6490ba314",
  github: "https://github.com/AnoopShivadas",
  resume: "/resume.pdf",
  source_code: "https://github.com/sanidhyy/portfolio",
  email: "anoopshivadas25@gmail.com",
} as const;

// Data for work experience
export const EXPERIENCES_DATA = [
  {
    title: "BSc IT Student — Mulund College of Commerce",
    description:
      "Pursuing Bachelor of Science in Information Technology with strong academic performance (CGPA 7.8), including Subject Topper in Numerical Methods and consistent ranking among top students.",
    icon: React.createElement(LuGraduationCap),
    date: "Jun 2023 – Mar 2026",
  },
  {
    title: "Academic Achievements",
    description:
      "Secured Subject Topper in Numerical Methods and 2nd rank in 3rd semester, demonstrating strong analytical thinking and problem-solving skills.",
    icon: React.createElement(LuGraduationCap),
    date: "2023 – 2024",
  },
  {
    title: "Cybersecurity Intern — Digisuraksha Parhari Foundation",
    description:
      "Performed phishing simulations and email header analysis to detect threats, classify risks, and apply real-world cybersecurity investigation techniques.",
    icon: React.createElement(CgWorkAlt),
    date: "Jul 2025 – Sep 2025",
  },
  {
    title: "Web Development Intern — Unify Labs",
    description:
      "Built responsive web interfaces using HTML, CSS, and JavaScript, improved UI/UX performance, and collaborated on real-world development tasks.",
    icon: React.createElement(FaReact),
    date: "Jan 2026 – Feb 2026",
  },
] as const;

// Data for projects
export const PROJECTS_DATA = [
  {
    title: "Email Header Forensics & Threat Traceback Portal",
    description:
  "Analyze email headers, trace IP routes, and detect phishing risks using structured forensic insights.",
    tags: ["Python", "Flask", "Cyber Analysis", "Web App"],
    imageUrl: "/email.png",
    projectUrl: "https://email-forensics-app.onrender.com/",
  },
  {
    title: "MGNREGA Data Analytics Dashboard",
    description:
      "Interactive dashboard visualizing employment and expenditure data with dynamic charts.",
    tags: ["JavaScript", "Data Visualization", "Dashboard", "Tailwind"],
    imageUrl: "/mngera.png",
    projectUrl: "https://mgnrega-dashboard-zvdy.onrender.com/",
  },
  {
    title: "Responsive Restaurant Webpage",
    description:
      "Fully responsive restaurant website built using HTML and CSS with a clean modern UI.",
    tags: ["HTML", "CSS", "Responsive Design"],
    imageUrl: "/restaurant.png",
    projectUrl: "https://anoopshivadas.github.io/Restaurant_page/",
  },
  {
  title: "Weather App",
  description:
    "Real-time weather application displaying temperature, humidity, and conditions using API integration with a responsive UI.",
  tags: ["JavaScript", "API", "Responsive UI"],
  imageUrl: "/weather.png",
  projectUrl: "https://anoopshivadas.github.io/Weather/",
},
{
  title: "Hover Images UI",
  description:
    "Interactive image gallery with smooth hover effects and overlays built using pure HTML and CSS.",
  tags: ["HTML", "CSS", "UI Design"],
  imageUrl: "/hover.png",
  projectUrl: "https://anoopshivadas.github.io/Hover-Images/",
},
] as const;

// Data for skills
export const SKILLS_DATA = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Shadcn UI",
  "Three.js",
  "Framer Motion",
  "Prisma",
  "MySQL",
  "PostgreSQL",
  "Redux",
  "Express",
  "Python",
  "Django",
] as const;

// Owner name
export const OWNER_NAME = "Sanidhya Kumar Verma";
