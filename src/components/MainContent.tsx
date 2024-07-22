"use client";
import React, { ReactNode, useEffect, useState } from "react";
import Navbar from "./Navbar";
import { motion, AnimatePresence } from "framer-motion";

function MainContent({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      const loaderTimeout = setTimeout(() => {
        setIsLoading(false);
      }, 500); // Wait for the opacity transition to finish before removing the loading text

      return () => clearTimeout(loaderTimeout);
    }, 1000); // 1 second delay

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="flex justify-center items-center h-screen"
            initial={{ opacity: 1 }}
            animate={{ opacity: fadeOut ? 0 : 1 }}
            transition={{ duration: 0.5 }}
          >
            <p
              className={`text-4xl ${fadeOut ? "mask-fade-out" : "mask-none"}`}
            >
              <span className="text-purple-300">Phourac</span> Portfolios
            </p>
          </motion.div>
        )}
      </AnimatePresence>
      {!isLoading && (
        <>
          <Navbar />
          {children}
        </>
      )}
    </>
  );
}

export default MainContent;
