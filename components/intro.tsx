"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

import { EXTRA_LINKS } from "@/constants";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useSectionInView } from "@/lib/hooks";

const Intro = () => {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="relative mb-28 max-w-[70rem] mx-auto px-4 text-center sm:mb-0 scroll-mt-[100rem]"
    >
      {/* 🔥 BACKGROUND GLOW EFFECT */}
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full" />
      </div>

      {/* 👋 SMALL INTRO ANIMATION */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="text-3xl mb-4"
      >
        👋
      </motion.div>

      {/* 🔥 MAIN HEADING */}
      <motion.h1
        className="text-4xl sm:text-6xl font-bold leading-tight"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Hi, I'm{" "}
        <span className="text-blue-500">Anoop Shivadas</span>
      </motion.h1>

      {/* 🔥 SUB HEADING */}
      <motion.p
        className="mt-4 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        I build{" "}
        <span className="text-white font-semibold">
          modern web applications
        </span>{" "}
        and work with{" "}
        <span className="text-white font-semibold">
          data-driven solutions
        </span>{" "}
        to solve real-world problems.
      </motion.p>

      {/* 🔥 FOCUS LINE */}
      <motion.p
        className="mt-3 text-md text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Web Development • Data Analytics • Problem Solving
      </motion.p>

      {/* 🔥 BUTTONS */}
      <motion.div
        className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        {/* CONTACT BUTTON */}
        <Link
          href="#contact"
          className="group bg-blue-600 text-white px-8 py-3 flex items-center gap-2 rounded-full hover:scale-105 hover:bg-blue-700 active:scale-95 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact Me
          <BsArrowRight className="group-hover:translate-x-1 transition" />
        </Link>

        {/* RESUME */}
        <Link
          href={EXTRA_LINKS.resume}
          target="_blank"
          className="group bg-white/10 backdrop-blur px-8 py-3 flex items-center gap-2 rounded-full border border-white/20 hover:scale-105 active:scale-95 transition"
        >
          Resume
          <HiDownload className="group-hover:translate-y-1 transition" />
        </Link>
      </motion.div>

      {/* 🔥 SOCIAL ICONS */}
      <motion.div
        className="flex justify-center gap-4 mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Link
          href={EXTRA_LINKS.linkedin}
          target="_blank"
          className="p-4 bg-white/10 backdrop-blur rounded-full hover:scale-110 transition"
        >
          <BsLinkedin className="text-xl" />
        </Link>

        <Link
          href={EXTRA_LINKS.github}
          target="_blank"
          className="p-4 bg-white/10 backdrop-blur rounded-full hover:scale-110 transition"
        >
          <FaGithubSquare className="text-xl" />
        </Link>
      </motion.div>
    </section>
  );
};

export default Intro;