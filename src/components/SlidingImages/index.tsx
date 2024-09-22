import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import styles from "../../assets/style/sliderImg.module.scss";
import Image from "next/image";
import { picAbout, projects } from "@/utils/data-util";

interface ISlide {
  slide: "work" | "about";
}

export default function SlidingImages({ slide }: ISlide) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  // const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  const slide1Pro =
    slide === "work" ? projects.slice(0, 4) : picAbout.slice(0, 4);
  const slide2Pro =
    slide === "work" ? projects.slice(3, 7) : picAbout.slice(3, 7);

  return (
    <div ref={container} className={styles.slidingImages}>
      <motion.div className={styles.slider}>
        {slide1Pro.map((project, index) => {
          return (
            <div
              key={index}
              className={styles.project}
              style={{ backgroundColor: project.color }}
            >
              <div className={styles.imageContainer}>
                <Image
                  fill={true}
                  alt={"image"}
                  src={`${project.img}`}
                  priority
                />
              </div>
            </div>
          );
        })}
      </motion.div>
      <motion.div style={{ x: x2 }} className={styles.slider}>
        {slide2Pro.map((project, index) => {
          return (
            <div
              key={index}
              className={styles.project}
              style={{ backgroundColor: project.color }}
            >
              <div key={index} className={styles.imageContainer}>
                <Image
                  fill={true}
                  alt={"image"}
                  src={`${project.img}`}
                  priority
                />
              </div>
            </div>
          );
        })}
      </motion.div>
      <motion.div style={{ height }} className={styles.circleContainer}>
        <div className={styles.circle}></div>
      </motion.div>
    </div>
  );
}
