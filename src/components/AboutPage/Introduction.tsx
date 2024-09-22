import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import React, { useState } from "react";
import RedoAnimText from "./RedoAnimText";
import ArrowHand from "../AnimationIcon/ArrowHand";
import { FaArrowRight } from "react-icons/fa";

function Introduction() {
  const [done, setDone] = useState(false);
  const baseText = "Hey, My name is Than Phourac,";
  const texts = [
    "a passionate front-end developer with over a year of experience in creating dynamic and responsive web applications.",
  ];
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.slice(0, latest)
  );

  return (
    <div className="">
      {/* <AboutMe /> */}
      <motion.div
        className="max-w-[600px] leading-[45px] relative"
        initial={{ opacity: 0 }} // Initial state
        whileInView={{ opacity: 1 }} // State when in view
        viewport={{ once: true, amount: 0.1 }} // Trigger once when at least 10% is in view
        onViewportEnter={() => {
          // Animate the count value when in view
          const controls = animate(count, baseText.length, {
            type: "tween",
            delay: 1,
            duration: 1,
            ease: "easeInOut",
            onComplete: () => {
              setDone(true);
            },
          });
          return controls.stop;
        }}
      >
        <motion.span className="md:text-[58px] sm:text-[32px] text-[32px] font-bold">
          {displayText}
        </motion.span>
        {/* <CursorBlinker /> */}
        {done && (
          <>
            <br /> <br />
          </>
        )}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="absolute right-72 top-44 md:flex hidden"
      >
        <ArrowHand />
      </motion.div>
      <motion.div
        initial={{ x: -100, y: 100, rotate: 0 }} // Initial position and rotation
        whileInView={{ x: 0, y: 0, rotate: -45 }} // Animation when in view
        viewport={{ once: false }} // Set to `false` to trigger the animation every time the element comes into view
        transition={{
          duration: 2, // Duration of the transition
          ease: "easeInOut", // Easing function for smooth animation
        }}
        className="absolute bottom-28 md:left-28"
      >
        <FaArrowRight size={28} />
      </motion.div>
      <div className="md:pl-[50%]">
        <RedoAnimText delay={1 + 1} texts={texts} />
      </div>
    </div>
  );
}

export default Introduction;
