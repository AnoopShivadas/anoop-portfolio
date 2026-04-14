"use client";

import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";

// 🔥 SKILL GROUPING (REAL STRUCTURE)
const SKILL_GROUPS = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "Python", "Django"],
  },
  {
    title: "Database",
    skills: ["MySQL", "PostgreSQL", "Prisma"],
  },
  {
    title: "Tools & Others",
    skills: ["Git", "Redux", "Framer Motion", "Three.js"],
  },
];

// 🔥 ANIMATION
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const Skills = () => {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      ref={ref}
      id="skills"
      className="relative mb-28 max-w-[75rem] mx-auto px-4 scroll-mt-28 sm:mb-40"
    >
      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="w-[500px] h-[500px] bg-blue-400/10 blur-[140px] rounded-full" />
      </div>

      <SectionHeading>My Skills</SectionHeading>

      {/* 🔥 GRID */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
      >
        {SKILL_GROUPS.map((group, i) => (
          <motion.div
            key={i}
            variants={item}
            className="p-6 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 backdrop-blur hover:scale-[1.03] transition duration-300"
          >
            {/* 🔥 TITLE */}
            <h3 className="text-lg font-semibold mb-4 text-black dark:text-white">
              {group.title}
            </h3>

            {/* 🔥 SKILLS */}
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm rounded-full 
                  bg-gray-100 text-gray-700 
                  dark:bg-white/10 dark:text-white/80
                  
                  hover:bg-blue-500 hover:text-white 
                  dark:hover:bg-blue-500 
                  
                  transition-all duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* 🔥 FOOT NOTE */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-10 text-center text-gray-600 dark:text-gray-400 italic"
      >
        Constantly learning, building, and improving through real-world projects.
      </motion.p>
    </section>
  );
};

export default Skills;