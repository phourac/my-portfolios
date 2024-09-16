"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import Developer from "../AnimationIcon/Developer";
import { motion } from "framer-motion";
import LearnMoreIcon from "../AnimationIcon/LearnMoreIcon";
import Magnetic from "../common/Magnetic";
import love from "../../../public/img/social-media-like-emoji.png";
import Image from "next/image";
import { gsap } from "gsap";

function Content() {
  const [hover, setHover] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);
  const initialPosition = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        gsap.to(imageRef.current, {
          x: (clientX - centerX) * 0.03, // Adjust multiplier for subtle movement
          y: (clientY - centerY) * 0.03, // Adjust multiplier for subtle movement
          duration: 0.3,
          ease: "power3.out",
        });
      }
    };

    // Set initial position
    if (imageRef.current) {
      const rect = imageRef.current.getBoundingClientRect();
      initialPosition.current = {
        x: rect.left,
        y: rect.top,
      };
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

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
                  duration: 8,
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
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  href={"/about"}
                  className={`rounded-xl pl-8 ${
                    hover ? "pr-0" : "pr-8"
                  } py-2 mt-12 text-[18px] flex items-center justify-center bg-secondary text-white`}
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
            className="md:block hidden relative"
          >
            <Developer />
            {/* Floating image effect */}
            <div className="absolute right-0 bottom-28">
              <Image
                src={love}
                alt="Floating Love"
                width={150}
                height={150}
                ref={imageRef}
                className="floating-image"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Content;
