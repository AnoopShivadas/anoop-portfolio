"use client";

import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

import SectionHeading from "./section-heading";

// SKILL GROUPS
const SKILL_GROUPS = [
  {
    title: "Data Analytics",
    icon: "📊",
    skills: [
      "Excel",
      "SQL",
      "Python",
      "Pandas",
      "NumPy",
      "Data Cleaning",
    ],
  },
  {
    title: "Visualization",
    icon: "📈",
    skills: [
      "Power BI",
      "Tableau",
      "Matplotlib",
      "Seaborn",
      "Dashboard Design",
      "Reporting",
    ],
  },
  {
    title: "Databases & Tools",
    icon: "🗄️",
    skills: [
      "MySQL",
      "PostgreSQL",
      "Git",
      "GitHub",
      "Jupyter",
      "VS Code",
    ],
  },
  {
    title: "Development & Others",
    icon: "💻",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
      "Problem Solving",
    ],
  },
];

// CONTAINER ANIMATION
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// ITEM ANIMATION
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const Skills = () => {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      ref={ref}
      id="skills"
      className="
      relative
      mb-28
      max-w-[80rem]
      mx-auto
      px-4
      scroll-mt-28
      sm:mb-40
      overflow-hidden
    "
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div
          className="
          w-[550px]
          h-[550px]
          bg-blue-500/10
          blur-[160px]
          rounded-full
        "
        />
      </div>

      {/* DECORATIVE BLOBS */}
      <div
        className="
        absolute top-10 left-10
        w-40 h-40
        bg-blue-500/5
        rounded-full
        blur-3xl
        -z-10
      "
      />

      <div
        className="
        absolute bottom-0 right-0
        w-52 h-52
        bg-purple-500/5
        rounded-full
        blur-3xl
        -z-10
      "
      />

      <SectionHeading>My Skills</SectionHeading>

      {/* INTRO */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        viewport={{ once: true }}
        className="
        text-center
        max-w-3xl
        mx-auto
        mt-6
        text-gray-600 dark:text-gray-400
        text-base sm:text-lg
        leading-relaxed
      "
      >
        A growing toolkit focused on analytics, visualization,
        and solving real-world problems through data-driven
        approaches.
      </motion.p>

      {/* SKILL GRID */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="
        grid
        sm:grid-cols-2
        lg:grid-cols-4
        gap-7
        mt-14
      "
      >
        {SKILL_GROUPS.map((group, i) => (
          <motion.div
            key={i}
            variants={item}
            className="
            group
            p-7
            rounded-2xl
            border border-gray-200 dark:border-white/10
            bg-white dark:bg-white/5
            backdrop-blur-md
            shadow-lg
            hover:shadow-2xl
            hover:-translate-y-2
            transition-all duration-300
          "
          >
            {/* ICON */}
            <div className="text-4xl mb-5">
              {group.icon}
            </div>

            {/* TITLE */}
            <h3
              className="
              text-xl
              font-semibold
              mb-5
              text-gray-900 dark:text-white
            "
            >
              {group.title}
            </h3>

            {/* TAGS */}
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill, index) => (
                <span
                  key={index}
                  className="
                  px-3 py-1.5
                  text-sm
                  rounded-full
                  border
                  border-gray-200 dark:border-white/10
                  bg-gray-100 dark:bg-white/10
                  text-gray-700 dark:text-white/80
                  hover:bg-blue-500
                  hover:text-white
                  dark:hover:bg-blue-500
                  transition-all duration-300
                  cursor-default
                "
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* STATS */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
        className="
        mt-16
        grid
        grid-cols-2
        sm:grid-cols-4
        gap-5
      "
      >
        {[
          { value: "4+", label: "Analytics Projects" },
          { value: "6+", label: "Visualization Tools" },
          { value: "3+", label: "Databases & Platforms" },
          { value: "100%", label: "Continuous Learning" },
        ].map((stat, index) => (
          <div
            key={index}
            className="
            rounded-2xl
            border border-gray-200 dark:border-white/10
            bg-white dark:bg-white/5
            shadow-lg
            p-5
            text-center
          "
          >
            <h4
              className="
              text-3xl
              font-bold
              text-blue-500
            "
            >
              {stat.value}
            </h4>

            <p
              className="
              mt-2
              text-sm
              text-gray-600 dark:text-gray-400
            "
            >
              {stat.label}
            </p>
          </div>
        ))}
      </motion.div>

      {/* FOOT NOTE */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
        className="
        mt-10
        text-center
        text-gray-500 dark:text-gray-400
        italic
        text-base sm:text-lg
      "
      >
        Continuously learning and improving through hands-on
        analytics projects and practical problem-solving.
      </motion.p>
    </section>
  );
};

export default Skills;