"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { PROJECTS_DATA } from "@/constants";
import { useSectionInView } from "@/lib/hooks";

import SectionHeading from "./section-heading";

type ProjectProps = (typeof PROJECTS_DATA)[number];

const Project = ({
  title,
  description,
  tags,
  imageUrl,
  projectUrl,
}: ProjectProps) => {
  const projectRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: projectRef,
    offset: ["0 1", "1.33 1"],
  });

  // smoother + more noticeable animation
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.article
      ref={projectRef}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-8"
    >
      <div className="relative max-w-[50rem] flex items-center justify-between gap-6 border border-black/5 rounded-xl p-6 overflow-hidden bg-gray-100 hover:bg-gray-200 transition duration-300 dark:bg-white/10 dark:hover:bg-white/20 shadow-lg hover:shadow-xl">

        {/* subtle gradient overlay */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />

        {/* TEXT SECTION */}
        <div className="flex flex-col max-w-[60%] z-10">
          <h3 className="text-2xl font-semibold tracking-tight">
            {title}
          </h3>

          <p className="mt-2 text-gray-700 dark:text-white/70 leading-relaxed">
            {description}
          </p>

          <ul className="flex flex-wrap mt-4 gap-2">
            {tags.map((tag, i) => (
              <li
                key={`${title}-tags-${i}`}
                className="bg-black/[0.75] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70 hover:scale-105 transition"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        {/* IMAGE SECTION */}
        <Link
          href={projectUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="relative hidden sm:block"
        >
          <motion.div
            whileHover={{
              scale: 1.05,
              rotate: 1,
            }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative"
          >
            <Image
              src={imageUrl}
              alt={title}
              width={500}
              height={300}
              quality={95}
              className="w-[22rem] h-[13rem] object-cover rounded-lg shadow-2xl transition"
            />

            {/* glow effect */}
            <div className="absolute inset-0 rounded-lg bg-white/10 opacity-0 group-hover:opacity-100 transition" />
          </motion.div>
        </Link>
      </div>
    </motion.article>
  );
};

const Projects = () => {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>

      <div className="flex flex-col items-center gap-8">
        {PROJECTS_DATA.map((project, i) => (
          <Project key={`project-${i}`} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;