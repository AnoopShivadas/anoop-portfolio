import React from "react";

import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

// NAVIGATION LINKS
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

// EXTERNAL LINKS
export const EXTRA_LINKS = {
  linkedin: "https://www.linkedin.com/in/anoop-k-shivadas-6490ba314",
  github: "https://github.com/AnoopShivadas",
  resume: "/resume.pdf",
  source_code: "https://github.com/AnoopShivadas",
  email: "anoopshivadas25@gmail.com",
} as const;

// EXPERIENCE DATA
export const EXPERIENCES_DATA = [
  {
    title: "BSc IT Student — Mulund College of Commerce",
    description:
      "Pursuing a Bachelor of Science in Information Technology with a strong focus on data analytics, business intelligence, and practical problem-solving through real-world projects.",
    icon: React.createElement(LuGraduationCap),
    date: "Jun 2023 – Mar 2026",
  },

  {
    title: "Academic Achievements",
    description:
      "Secured Subject Topper in Numerical Methods and achieved 2nd rank in the 3rd semester, demonstrating analytical thinking and quantitative reasoning skills.",
    icon: React.createElement(LuGraduationCap),
    date: "2023 – 2024",
  },

  {
    title: "Cybersecurity Intern — Digisuraksha Parhari Foundation",
    description:
      "Worked on phishing simulations, email header analysis, threat investigation, and risk classification using real-world cybersecurity analysis techniques.",
    icon: React.createElement(CgWorkAlt),
    date: "Jul 2025 – Sep 2025",
  },

  {
    title: "Web Development Intern — Unify Labs",
    description:
      "Collaborated on responsive web interface development and improved practical UI implementation and technical problem-solving skills.",
    icon: React.createElement(FaReact),
    date: "Jan 2026 – Feb 2026",
  },
] as const;

// PROJECTS DATA
export const PROJECTS_DATA = [
  {
    title: "Uber Trip Analysis Dashboard",
    description:
      "Interactive Power BI dashboard analyzing ride bookings, cancellations, revenue trends, payment methods, and customer behavior using business intelligence techniques.",
    tags: [
      "Power BI",
      "Data Analytics",
      "Dashboard",
      "Business Intelligence",
    ],
    imageUrl: "/uber-dashboard.png",
    projectUrl:
      "https://app.powerbi.com/groups/me/reports/4e470abf-e2d3-4749-b5a2-06043f4b7242/fa60ae93d7003ba64db1?experience=power-bi",
  },

  {
    title: "Fitness Analytics Dashboard",
    description:
      "Comprehensive Power BI fitness dashboard tracking memberships, revenue, expenses, profit trends, and customer engagement using visual analytics.",
    tags: [
      "Power BI",
      "Visualization",
      "Analytics",
      "Reporting",
    ],
    imageUrl: "/gym-dashboard.png",
    projectUrl:
      "https://app.powerbi.com/groups/me/reports/60875090-8fc6-401d-b465-5a3b28b6fc34/ac7e98efe4bc30a70a5a?experience=power-bi",
  },

  {
    title: "Vrinda Sales Excel Dashboard",
    description:
      "Advanced Excel dashboard analyzing sales performance, customer demographics, order channels, and revenue insights using charts, slicers, and reporting tools.",
    tags: [
      "Excel",
      "Data Cleaning",
      "Sales Analysis",
      "Dashboard",
    ],
    imageUrl: "/excel-dashboard.png",
    projectUrl:
      "https://github.com/AnoopShivadas/vrinda-sales-analysis-excel",
  },

  {
    title: "Email Header Forensics & Threat Traceback Portal",
    description:
      "Final-year cybersecurity project focused on email header investigation, phishing detection, IP tracing, and risk analysis using forensic techniques.",
    tags: [
      "Python",
      "Flask",
      "Cybersecurity",
      "Threat Analysis",
    ],
    imageUrl: "/email.png",
    projectUrl: "https://email-forensics-app.onrender.com/",
  },

  {
    title: "MGNREGA Data Analytics Dashboard",
    description:
      "Interactive analytics dashboard visualizing employment trends, expenditure patterns, and public welfare insights using dynamic charts and reporting.",
    tags: [
      "Dashboard",
      "Analytics",
      "Visualization",
      "JavaScript",
    ],
    imageUrl: "/mngera.png",
    projectUrl: "https://mgnrega-dashboard-zvdy.onrender.com/",
  },

  {
    title: "Responsive Restaurant Website",
    description:
      "Modern responsive restaurant website developed using HTML and CSS with a clean user interface and mobile-friendly design.",
    tags: ["HTML", "CSS", "Responsive UI"],
    imageUrl: "/restaurant.png",
    projectUrl: "https://anoopshivadas.github.io/Restaurant_page/",
  },
] as const;

// SKILLS DATA
export const SKILLS_DATA = [
  "Excel",
  "SQL",
  "Python",
  "Power BI",
  "Tableau",
  "Pandas",
  "NumPy",
  "Matplotlib",
  "Seaborn",
  "MySQL",
  "PostgreSQL",
  "Data Cleaning",
  "Data Visualization",
  "Dashboard Development",
  "Business Intelligence",
  "Git",
  "GitHub",
  "HTML",
  "CSS",
  "JavaScript",
] as const;

// OWNER NAME
export const OWNER_NAME = "Anoop Shivadas";