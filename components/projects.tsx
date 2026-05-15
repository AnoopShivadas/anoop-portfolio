"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

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
    offset: ["0 1", "1.2 1"],
  });

  const scaleProgress = useTransform(
    scrollYProgress,
    [0, 1],
    [0.95, 1]
  );

  const opacityProgress = useTransform(
    scrollYProgress,
    [0, 1],
    [0.6, 1]
  );

  return (
    <motion.article
      ref={projectRef}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group w-full max-w-6xl"
    >
      <div
        className="
        relative overflow-hidden rounded-3xl
        border border-gray-200 dark:border-white/10
        bg-white dark:bg-white/5
        backdrop-blur-md
        shadow-xl
        hover:shadow-2xl
        transition-all duration-500
      "
      >
        {/* HOVER GLOW */}
        <div
          className="
          absolute inset-0 opacity-0
          group-hover:opacity-100
          transition duration-700
          bg-gradient-to-r
          from-blue-500/5
          via-transparent
          to-purple-500/5
          dark:from-blue-500/10
          dark:to-purple-500/10
        "
        />

        <div
          className="
          grid lg:grid-cols-[1fr_1.1fr]
          gap-10
          items-center
          p-6 lg:p-10
        "
        >
          {/* LEFT CONTENT */}
          <div className="relative z-10">
            {/* LABEL */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />

              <p
                className="
                text-xs uppercase tracking-[0.25em]
                text-blue-500 font-semibold
              "
              >
                Featured Project
              </p>
            </div>

            {/* TITLE */}
            <h3
              className="
              text-2xl lg:text-3xl
              font-bold
              leading-tight
              text-gray-900 dark:text-white
            "
            >
              {title}
            </h3>

            {/* DESCRIPTION */}
            <p
              className="
              mt-5
              leading-relaxed
              text-gray-600 dark:text-white/70
              text-[1rem]
            "
            >
              {description}
            </p>

            {/* TAGS */}
            <div className="flex flex-wrap gap-3 mt-6">
              {tags.map((tag, i) => (
                <span
                  key={`${title}-${i}`}
                  className="
                  px-4 py-2
                  rounded-full
                  border
                  border-gray-200 dark:border-white/10
                  bg-gray-100 dark:bg-white/10
                  text-gray-700 dark:text-white/80
                  text-sm
                  hover:bg-blue-100
                  dark:hover:bg-blue-500/20
                  transition
                "
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* BUTTON */}
            <div className="mt-8">
              <Link
                href={projectUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="
                inline-flex items-center gap-2
                px-6 py-3
                rounded-full
                bg-blue-600
                hover:bg-blue-700
                text-white
                font-medium
                transition-all duration-300
                hover:scale-105
              "
              >
                View Project →
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <Link
            href={projectUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="relative block"
          >
            <motion.div
              whileHover={{
                scale: 1.02,
                y: -4,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
              }}
              className="relative"
            >
              {/* IMAGE GLOW */}
              <div
                className="
                absolute -inset-3
                opacity-0
                group-hover:opacity-100
                transition duration-700
                blur-2xl
                bg-gradient-to-r
                from-blue-500/20
                to-purple-500/20
              "
              />

              <Image
                src={imageUrl}
                alt={title}
                width={1000}
                height={700}
                quality={100}
                className="
                relative
                w-full
                h-[240px] sm:h-[300px] lg:h-[340px]
                object-cover
                rounded-2xl
                border border-gray-200 dark:border-white/10
                shadow-2xl
              "
              />
            </motion.div>
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

const Projects = () => {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section
      ref={ref}
      id="projects"
      className="
      relative
      scroll-mt-28
      mb-28
      sm:mb-40
      px-4
      max-w-[90rem]
      mx-auto
    "
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div
          className="
          w-[600px]
          h-[600px]
          bg-blue-500/10
          blur-[140px]
          rounded-full
        "
        />
      </div>

      <SectionHeading>Featured Projects</SectionHeading>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="
        text-center
        text-gray-600 dark:text-white/60
        max-w-3xl
        mx-auto
        mt-4
        mb-14
      "
      >
        Real-world analytics, dashboarding, and technical
        projects focused on visualization, business insights,
        and data-driven decision-making.
      </motion.p>

      <div className="flex flex-col gap-10 items-center">
        {PROJECTS_DATA.map((project, i) => (
          <Project key={i} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;