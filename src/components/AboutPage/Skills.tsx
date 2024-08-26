"use client";
import { SkillsData } from "@/utils/data-util";
import React, { useRef, useState } from "react";
import { Tooltip, TooltipGroup } from "./ToolTip";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./style.module.scss";
import SvgCurve from "../../components/SvgCurve/index";

import "../../app/globals.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Magnetic from "../common/Magnetic";

function Skills() {
  const constraintsRef = useRef(null);
  const [showMore, setShowMore] = useState(false);

  const dataToDisplay = !showMore ? SkillsData.slice(0, 3) : SkillsData;

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  return (
    <>
      <div className="h-full container mx-auto px-4 md:px-24 flex flex-col items-start gap-10 pt-32">
        <div className="flex flex-col">
          <motion.div className="relative z-10 ">
            <h2 className="text-[58px] font-bold relative z-20">Skills</h2>
            <motion.div className="bg-primary h-20 w-20 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1 -translate-y-1/2 z-0"></motion.div>
          </motion.div>

          {/* <span className="h-1 w-full bg-white inline-flex"></span> */}
        </div>
        <div className="pl-8 w-full">
          {dataToDisplay.map((item, i) => {
            return (
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, delay: 0.5 },
                }} // State when in view
                viewport={{ once: true, amount: 0.1 }} // Trigger once when at least 10% is in view
                key={i}
              >
                <h2 className="font-semibold text-[28px]">{item.title}</h2>
                <span className="h-1 w-full bg-white inline-flex"></span>
                {/* <SvgCurve /> */}

                <div className="flex gap-8 pt-8">
                  {item.skill.map((item, i) => {
                    return (
                      <>
                        <TooltipGroup>
                          <Tooltip content={item.value}>
                            <span
                              className="cursor-pointer pb-8 flex items-center"
                              key={i}
                            >
                              {item.icon ? (
                                <item.icon size={32} />
                              ) : (
                                <p className="text-[20px]">{item.lang}</p>
                              )}
                            </span>
                          </Tooltip>
                        </TooltipGroup>{" "}
                      </>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
          <div className="flex justify-end w-full">
            <motion.button
              onClick={() => setShowMore(!showMore)}
              initial={{ x: -100 }} // Initial position
              whileInView={{ x: 0 }} // Animation when in view
              viewport={{ once: false }} // Trigger animation every time element comes into view
              transition={{
                duration: 2, // Duration of the transition
                ease: "easeInOut", // Easing function for smooth animation
              }}
              className="flex items-center ml-auto"
            >
              {!showMore ? (
                <FaArrowRight size={28} />
              ) : (
                <FaArrowLeft size={28} />
              )}
            </motion.button>
          </div>
          {/* <button
          onClick={() => setShowMore(!showMore)}
          className="px-4 py-2 mt-8 rounded-lg border hover:border-purple-300 hover:text-purple-300"
        >
          {showMore ? "Show more" : "Show less"}
        </button> */}
        </div>
      </div>
      <div ref={container} className={styles.slidingImages}>
        <div className="bg-primary-dark h-[400px] inline-block w-full"></div>
        <motion.div style={{ height }} className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </motion.div>
      </div>
    </>
  );
}

export default Skills;
