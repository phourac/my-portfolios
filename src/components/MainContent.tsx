"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./Header/nav/Header";
import MainHeader from "./Header";
import { usePathname } from "next/navigation";

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

      return () => clearTimeout(loaderTimeout);
    }, 1000); // 1 second delay

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && pathname === "/" && (
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
          <MainHeader />
          <div className="h-screen"> {children}</div>
        </>
      )}
    </>
  );
}

export default ChildComponent;
