"use client";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

export interface IRedoAnimTextProps {
  delay: number;
  texts: string[];
}

export default function RedoAnimText({ delay, texts }: IRedoAnimTextProps) {
  const [startAnimation, setStartAnimation] = useState(false);
  const textIndex = useMotionValue(0);

  const baseText = useTransform(textIndex, (latest) => texts[latest] || "");
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.get().slice(0, latest)
  );
  const updatedThisRound = useMotionValue(true);

  useEffect(() => {
    if (startAnimation) {
      const controls = animate(count, 400, {
        type: "tween",
        delay: delay,
        duration: 5,
        ease: "easeIn",
        repeatDelay: 1,
        onUpdate(latest) {
          if (updatedThisRound.get() === true && latest > 0) {
            updatedThisRound.set(false);
          } else if (updatedThisRound.get() === false && latest === 0) {
            if (textIndex.get() === texts.length - 1) {
              textIndex.set(0);
            } else {
              textIndex.set(textIndex.get() + 1);
            }
            updatedThisRound.set(true);
          }
        },
      });
      return controls.stop;
    }
  }, [startAnimation, count, textIndex, delay]);

  return (
    <motion.span
      className="inline md:text-[32px] text-[24px]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      onViewportEnter={() => setStartAnimation(true)}
    >
      {displayText}
    </motion.span>
  );
}
