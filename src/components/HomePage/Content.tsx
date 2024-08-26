"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Developer from "../AnimationIcon/Developer";

import { motion } from "framer-motion";
import LearnMoreIcon from "../AnimationIcon/LearnMoreIcon";
import Magnetic from "../common/Magnetic";

function Content() {
  const [hover, setHover] = useState(false);
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="container mx-auto px-4 md:px-24">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.9,
                type: "spring",
                bounce: 0.4,
                delay: 0.3,
              },
              y: 0,
            }}
            className="flex flex-col items-start justify-start"
          >
            <h2 className="text-[32px] md:text-[58px] tracking-[2px] font-bold">
              Hi, I&apos;m
              <motion.div
                style={{
                  display: "inline-block",
                  //   backgroundImage:
                  //     "linear-gradient(90deg, #ffffff, #4a3dd0, #BF40BF)",
                  backgroundSize: "200% 200%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  paddingLeft: "10px",
                }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  backgroundImage: [
                    "linear-gradient(90deg, #ffffff, #4a3dd0, #BF40BF)",
                    "linear-gradient(90deg, #4a3dd0, #BF40BF, #ffffff)",
                    "linear-gradient(90deg, #BF40BF, #ffffff, #4a3dd0)",
                    "linear-gradient(90deg, #ffffff, #4a3dd0, #BF40BF)",
                  ],
                }}
                transition={{
                  duration: 8, // Duration of the entire animation cycle
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                Phourac
              </motion.div>
            </h2>
            <div className="flex flex-col leading-10">
              <p className="text-[24px] md:text-[32px] tracking-[2px] font-semibold">
                I am a front-end <span>developer</span>
              </p>
              <p className="text-[24px] md:text-[32px] tracking-[2px] font-semibold">
                specializing in interfaces and web applications.
              </p>
            </div>
            <Magnetic>
              <motion.div
                onHoverStart={() => setHover(true)}
                onHoverEnd={() => setHover(false)}
                whileHover={{ scale: 1.1 }} // Add scaling effect on hover
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  href={"/about"}
                  className={`rounded-xl pl-8 ${
                    hover ? "pr-0" : "pr-8"
                  }  py-2 mt-12 text-[18px] flex items-center justify-center bg-secondary text-white`}
                >
                  Learn more
                  {hover && <LearnMoreIcon />}
                </Link>
              </motion.div>
            </Magnetic>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.9,
                type: "spring",
                bounce: 0.4,
                delay: 0.6,
              },
              x: 0,
            }}
            className="md:block hidden"
          >
            <Developer />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Content;
