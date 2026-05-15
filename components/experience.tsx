"use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { EXPERIENCES_DATA } from "@/constants";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useThemeContext } from "@/context/theme-context";
import { useSectionInView } from "@/lib/hooks";

import SectionHeading from "./section-heading";

import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
  const { ref } = useSectionInView("Experience", 0.5);

  const { theme } = useThemeContext();
  const { activeSection } = useActiveSectionContext();

  const isExperienceSectionActive = activeSection === "Experience";

  return (
    <section
      ref={ref}
      id="experience"
      className="relative scroll-mt-28 mb-28 sm:mb-40 overflow-hidden"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="w-[550px] h-[550px] bg-blue-500/10 blur-[160px] rounded-full" />
      </div>

      {/* EXTRA DECORATIONS */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 right-10 w-52 h-52 bg-purple-500/5 rounded-full blur-3xl -z-10" />

      <SectionHeading>My Experience</SectionHeading>

      {/* INTRO TEXT */}
      <p className="text-center max-w-3xl mx-auto mt-6 mb-14 text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed px-4">
        My academic and internship journey focused on analytics,
        problem-solving, and developing practical technical skills through
        real-world projects and hands-on learning.
      </p>

      <VerticalTimeline lineColor="rgba(59,130,246,0.25)">
        {EXPERIENCES_DATA.map((experience, i) => (
          <React.Fragment key={`experience-${i}`}>
            <VerticalTimelineElement
              visible={isExperienceSectionActive}
              contentStyle={{
                background:
                  theme === "light"
                    ? "rgba(255,255,255,0.85)"
                    : "rgba(255, 255, 255, 0.05)",

                backdropFilter: "blur(10px)",

                boxShadow: "none",

                border:
                  theme === "light"
                    ? "1px solid rgba(0,0,0,0.05)"
                    : "1px solid rgba(255,255,255,0.08)",

                borderRadius: "1rem",

                textAlign: "left",

                padding: "1.5rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid rgba(156,163,175,0.7)"
                    : "0.4rem solid rgba(255,255,255,0.3)",
              }}
              date={experience.date}
              dateClassName="!text-gray-500 dark:!text-gray-400 !font-medium"
              icon={experience.icon}
              iconStyle={{
                background:
                  theme === "light"
                    ? "rgba(255,255,255,0.95)"
                    : "rgba(255,255,255,0.12)",

                color: "#3b82f6",

                fontSize: "1.4rem",

                boxShadow: "0 0 25px rgba(59,130,246,0.25)",
              }}
            >
              <h3 className="font-semibold text-lg text-black dark:text-white">
                {experience.title}
              </h3>

              <p className="!mt-3 !leading-relaxed !font-normal text-gray-700 dark:text-white/75">
                {experience.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;