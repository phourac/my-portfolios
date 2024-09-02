"use client";
import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import styles from "./styles.module.css";
import Image from "next/image";

interface IProject {
  index: number;
  title: string;
  setModal: (modal: { active: boolean; index: number }) => void;
  img: string;
}

export default function Project({ index, title, setModal, img }: IProject) {
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
    <div
      onMouseEnter={() => {
        setModal({ active: true, index });
        setHover(true);
      }}
      onMouseOut={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
        setHover(false);
      }}
      className={styles.project}
      style={{ position: "relative" }}
    >
      <Image
        src={img}
        alt={title}
        width={300}
        height={300}
        className={`${!hover ? "opacity-1" : "opacity-[0.5]"}`}
      />
      <p className={`${!hover ? "opacity-1" : "opacity-[0.5]"}`}>
        Design & Development
      </p>

      {hover && (
        <button
          className="absolute rounded-full border border-white ball"
          style={{
            top: `${position.y}px`,
            left: `${position.x}px`,
            width: "80px",
            height: "80px",
          }}
        >
          View
        </button>
      )}
    </div>
  );
}
