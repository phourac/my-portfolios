"use client";
import { projects } from "@/utils/data-util";
import Image from "next/image";
import Link from "next/link";
import styles from "./circle.module.scss";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const WorkList = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);
  const [hoverId, setHoverId] = useState(-1);
  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 4;
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const projectData = projects.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <>
      <div className=" h-screen mx-auto flex flex-row  justify-between items-center">
        <div className="container mx-auto px-4 md:px-24">
          {/* <WorkResult /> */}
          <motion.div
            key={currentPage} // Key to ensure the animation runs on page change
            initial={{ opacity: 0, x: 50 }} // Animation for entering
            animate={{ opacity: 1, x: 0 }} // Animation for visible state
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 grid-cols-1 gap-4"
          >
            {projectData.map((item, i) => (
              <Link
                key={i} // Assuming each item has a unique id
                href={`/work/${item.id}`}
                onMouseEnter={() => setHoverId(i)}
                onMouseLeave={() => setHoverId(-1)}
              >
                <motion.div
                  initial={{ scale: 1 }}
                  animate={hoverId === i ? { scale: 1.01 } : { scale: 1 }} // Conditional animation for scaling
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <Image
                    src={item.img}
                    alt=""
                    priority
                    height={600}
                    width={600}
                    className={`${
                      hoverId === i && "opacity-25"
                    } transition-opacity bg-primary`} // Optional: Adding opacity change for effect
                  />
                  {hoverId === i && (
                    <motion.div
                      initial={{ y: 40 }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="absolute flex items-center justify-center bottom-10 left-10 z-[99]"
                    >
                      <div className="flex flex-col">
                        <p className="text-yellow text-4xl">{item.title}</p>
                        <p className="text-xl">{item.type}</p>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              </Link>
            ))}
          </motion.div>
          <div className="flex justify-end items-center pt-10 gap-4">
            <button
              onClick={handlePrev}
              disabled={currentPage === 0}
              className="p-2 bg-primary text-white rounded-full disabled:opacity-50"
            >
              <FaArrowLeft size={28} />
            </button>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages - 1}
              className="p-2 bg-primary text-white rounded-full disabled:opacity-50"
            >
              <FaArrowRight size={28} />
            </button>
          </div>{" "}
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
};

export default WorkList;
