"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./Header/nav/Header";
import MainHeader from "./Header";
import { usePathname } from "next/navigation";
import useMouse from "@react-hook/mouse-position";
import "../app/globals.css";

function ChildComponent({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      const loaderTimeout = setTimeout(() => {
        setIsLoading(false);
      }, 500); // Wait for the opacity transition to finish before removing the loading text

      return () => {
        clearTimeout(loaderTimeout);
        clearTimeout(timer);
      };
    }, 1000); // 1 second delay

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  const ref = React.useRef(null);
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  });

  let mouseXPosition: any = 0;
  let mouseYPosition: any = 0;

  if (mouse.x !== null) {
    mouseXPosition = mouse.clientX;
  }

  if (mouse.y !== null) {
    mouseYPosition = mouse.clientY;
  }

  const variants = {
    default: {
      opacity: 1,
      height: 20,
      width: 20,
      fontSize: "16px",
      x: mouseXPosition,
      y: mouseYPosition,
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
  };

  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 28,
  };

  return (
    <>
      <div className="" ref={ref}>
        <motion.div
          variants={variants}
          className="circle"
          animate={"default"}
          transition={spring}
        ></motion.div>
        <AnimatePresence>
          {isLoading && pathname === "/" && (
            <motion.div
              className="flex justify-center items-center h-screen"
              initial={{ opacity: 1 }}
              animate={{ opacity: fadeOut ? 0 : 1 }}
              transition={{ duration: 0.5 }}
            >
              <p
                className={`text-4xl ${
                  fadeOut ? "mask-fade-out" : "mask-none"
                }`}
              >
                <span className="text-purple-300">Phourac</span> Portfolios
              </p>
            </motion.div>
          )}
        </AnimatePresence>
        {!isLoading && (
          <>
            <MainHeader />
            <div className="h-screen">{children}</div>
          </>
        )}
      </div>
    </>
  );
}

export default ChildComponent;
