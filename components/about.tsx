"use client";

import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";

const About = () => {
  const { ref } = useSectionInView("About");

  return (
    <section
      ref={ref}
      id="about"
      className="relative mb-28 max-w-[70rem] mx-auto px-4 sm:mb-40 scroll-mt-28 text-center"
    >
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="w-[400px] h-[400px] bg-blue-400/10 blur-[120px] rounded-full" />
      </div>

      <SectionHeading>About Me</SectionHeading>

      {/* 🔥 INTRO */}
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-6 text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
      >
        A{" "}
        <span className="font-semibold text-black dark:text-white">
          BSc IT student
        </span>{" "}
        focused on building practical solutions through{" "}
        <span className="text-blue-500 font-semibold">
          web development
        </span>{" "}
        and{" "}
        <span className="text-blue-500 font-semibold">
          data analytics
        </span>.
      </motion.p>

      {/* 🔥 FEATURE CARDS */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid sm:grid-cols-3 gap-6 mt-12"
      >
        {/* CARD 1 */}
        <div className="p-6 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 backdrop-blur hover:scale-105 transition">
          <h3 className="font-semibold text-lg mb-2 text-black dark:text-white">
            Development
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Designing and building clean, responsive web interfaces with a focus on usability and performance.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="p-6 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 backdrop-blur hover:scale-105 transition">
          <h3 className="font-semibold text-lg mb-2 text-black dark:text-white">
            Data
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Exploring data to identify patterns, generate insights, and support informed decision-making.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="p-6 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 backdrop-blur hover:scale-105 transition">
          <h3 className="font-semibold text-lg mb-2 text-black dark:text-white">
            Problem Solving
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Approaching challenges with structured thinking and a focus on efficient, real-world solutions.
          </p>
        </div>
      </motion.div>

      {/* 🔥 CLEAN BADGES (NO FLEXING) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-12 flex flex-wrap justify-center gap-4"
      >
        <div className="px-5 py-2 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-medium">
          Academic Consistency
        </div>
        <div className="px-5 py-2 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-medium">
          Project-Based Learning
        </div>
        <div className="px-5 py-2 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-medium">
          Continuous Improvement
        </div>
      </motion.div>

      {/* 🔥 FINAL LINE */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 text-gray-600 dark:text-gray-400 italic"
      >
        Focused on building reliable systems and continuously improving through hands-on experience.
      </motion.p>
    </section>
  );
};

export default About;