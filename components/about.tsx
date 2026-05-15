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
      className="relative mb-28 max-w-[75rem] mx-auto px-4 sm:mb-40 scroll-mt-28 text-center overflow-hidden"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="w-[500px] h-[500px] bg-blue-500/10 blur-[140px] rounded-full" />
      </div>

      {/* SMALL DECORATION */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl -z-10" />

      <SectionHeading>About Me</SectionHeading>

      {/* INTRO */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <p className="mt-6 text-lg sm:text-2xl leading-relaxed text-gray-700 dark:text-gray-300">
          A{" "}
          <span className="font-bold text-black dark:text-white">
            BSc IT student
          </span>{" "}
          passionate about transforming{" "}
          <span className="text-blue-500 font-semibold">
            raw data
          </span>{" "}
          into meaningful{" "}
          <span className="text-blue-500 font-semibold">
            insights
          </span>{" "}
          through analytics, dashboards, and business intelligence.
        </p>

        <p className="mt-5 text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed">
          I enjoy working on real-world projects involving data cleaning,
          visualization, reporting, and analytical problem-solving while
          continuously improving my technical and business understanding.
        </p>
      </motion.div>

      {/* FEATURE CARDS */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14"
      >
        {/* CARD 1 */}
        <div className="group p-7 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:-translate-y-2 hover:border-blue-500/30 transition duration-300">
          <div className="text-4xl mb-4">📊</div>

          <h3 className="font-semibold text-2xl mb-3 text-black dark:text-white">
            Data Analytics
          </h3>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Cleaning, analyzing, and interpreting datasets to uncover trends,
            patterns, and actionable insights for better decision-making.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="group p-7 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:-translate-y-2 hover:border-blue-500/30 transition duration-300">
          <div className="text-4xl mb-4">📈</div>

          <h3 className="font-semibold text-2xl mb-3 text-black dark:text-white">
            Visualization
          </h3>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Building interactive dashboards and visual reports that simplify
            complex information and communicate insights effectively.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="group p-7 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:-translate-y-2 hover:border-blue-500/30 transition duration-300">
          <div className="text-4xl mb-4">🧠</div>

          <h3 className="font-semibold text-2xl mb-3 text-black dark:text-white">
            Analytical Thinking
          </h3>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Applying structured problem-solving and logical thinking to solve
            business challenges through data-driven approaches.
          </p>
        </div>
      </motion.div>

      {/* BADGES */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="mt-14 flex flex-wrap justify-center gap-4"
      >
        {[
          "SQL & Data Querying",
          "Dashboard Development",
          "Project-Based Learning",
          "Continuous Improvement",
          "Business Insights",
        ].map((item, index) => (
          <div
            key={index}
            className="px-5 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-sm font-medium hover:scale-105 transition"
          >
            {item}
          </div>
        ))}
      </motion.div>

      {/* FINAL QUOTE */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-10 text-gray-500 dark:text-gray-400 italic text-base sm:text-lg"
      >
        Focused on continuous learning, real-world analytics projects, and
        solving problems through data.
      </motion.p>
    </section>
  );
};

export default About;