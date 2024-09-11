"use client";
import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import styles from "./styles.module.css";
import Image from "next/image";

interface IProject {
  index: number;
  job: string;
  year: string;
  place: string;
}

export default function Project({ index, job, place, year }: IProject) {
  const [hover, setHover] = useState(false);
  const [position, setPosition] = useState({ x: 10, y: 20 });

  useEffect(() => {
    gsap.set(".ball", { xPercent: -50, yPercent: -50 });
    let targets = gsap.utils.toArray(".ball");
    window.addEventListener("mousemove", (e) => {
      gsap.to(targets, {
        duration: 0.5,
        x: e.clientX,
        y: e.clientY,
        ease: "power1.out",
        overwrite: "auto",
        stagger: 0.02,
      });
    });
  }, []);

  return (
    <div className={styles.project} style={{ position: "relative" }}>
      <p className="text-4xl">{job}</p>
      <div className="text-xl">
        <p>{year}</p>
        <p>{place}</p>
      </div>
    </div>
  );
}
