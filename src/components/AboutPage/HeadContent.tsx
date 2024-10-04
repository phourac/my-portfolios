"use client";
import React from "react";
import { motion } from "framer-motion";
import { ScrollTriggerProvider } from "../ScrollTriggerProvider";
import dynamic from "next/dynamic";
import Skills from "./Skills";

const Screen = dynamic(() => import("../Screen"));
const Introduction = dynamic(() => import("./Introduction"));
const ScrollIcon = dynamic(() => import("../AnimationIcon/ScrollIcon"));
const LineAnimate = dynamic(() => import("../AnimationIcon/LineAnimate"));
const BubbleAnimate = dynamic(() => import("../AnimationIcon/BubbleAnimate"));
// const Skills = dynamic(() => import("./Skills"));
const WorkResult = dynamic(() => import("../WorkPage/WorkResult"));
const SlidingImages = dynamic(() => import("../SlidingImages"));

function HeadContent() {
  const text = "About me";
  const letters = Array.from(text);
  const centerIndex = Math.floor(letters.length / 2);
  const staggerDelays = letters.map((_, i) => Math.abs(centerIndex - i) * 0.1);

  const fixedOffset = 75;

  const calculateXValue = (index: number) => {
    return (index - centerIndex) * fixedOffset;
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  };

  const child = (x: any) => ({
    hidden: {
      opacity: 0,
      x: x,
      y: 100,
      scale: 1.5,
      transition: {
        type: "easeOut",
      },
    },
    visible: (i: any) => ({
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.0,
        type: "easeOut",
        delay: staggerDelays[i],
      },
    }),
  });

  const SHOW_MARKERS = false;

  return (
    <>
      <div className="overflow-x-hidden">
        <ScrollTriggerProvider debug={SHOW_MARKERS}>
          <Screen
            title={
              <div className="h-screen mx-auto flex flex-col justify-center items-center">
                <motion.div
                  className="font-bold text-[calc(15vw)] md:text-[calc(13vw)] lg:text-[calc(11vw)] text-white flex overflow-visible"
                  variants={container}
                  initial="hidden"
                  animate="visible"
                >
                  {letters.map((letter, index) => (
                    <motion.span
                      custom={index}
                      variants={child(calculateXValue(index))}
                      key={index}
                    >
                      {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1,
                    delay: 1,
                    type: "spring",
                    bounce: 0.4,
                  }}
                  className="absolute -bottom-5"
                >
                  <ScrollIcon />
                </motion.div>

                <motion.div className="absolute bottom-0">
                  <BubbleAnimate />
                </motion.div>
                <motion.div
                  className="absolute left-[10%] -top-4"
                  initial={{ rotate: 90 }}
                >
                  <LineAnimate />
                  <LineAnimate />
                  <LineAnimate />
                </motion.div>
              </div>
            }
            colorStart="#121212"
            colorEnd="#121212"
            fadeIn={false}
          />
        </ScrollTriggerProvider>
        <ScrollTriggerProvider debug={SHOW_MARKERS} options={{ end: "+=300%" }}>
          <Screen
            title={
              <div className=" h-screen mx-auto flex flex-row  justify-between items-center">
                <div className="container mx-auto px-4 md:px-24">
                  <Introduction />
                </div>
              </div>
            }
            colorStart="#121212"
            colorEnd="#121212"
            showProgress
          />
        </ScrollTriggerProvider>
        <ScrollTriggerProvider debug={SHOW_MARKERS} options={{ end: "+=300%" }}>
          <Screen
            title={
              <div className=" h-screen mx-auto flex flex-row  justify-between items-center">
                <div className="container mx-auto px-4 md:px-24">
                  <WorkResult />
                </div>
              </div>
            }
            colorStart="#121212"
            colorEnd="#121212"
            showProgress
          />
        </ScrollTriggerProvider>
        <Skills />
        <div className="sm:flex hidden">
          <SlidingImages slide="about" />
        </div>
        {/* <ScrollTriggerProvider debug={SHOW_MARKERS}>
          <Screen
            title="Scroll based animations 🤯"
            colorStart="#333399"
            colorEnd="#663399"
            fadeOut={false}
          />
        </ScrollTriggerProvider> */}
      </div>
    </>
  );
}

export default HeadContent;
