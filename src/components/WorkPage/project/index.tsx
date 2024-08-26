"use client";
import React, { Dispatch, SetStateAction } from "react";
import styles from "./styles.module.css";
import Magnetic from "@/components/common/Magnetic";

interface Iproject {
  index: number;
  title: string;
  setModal: (modal: { active: boolean; index: number }) => void;
}

export default function Project({ index, title, setModal }: Iproject) {
  return (
    <>
      <div
        onMouseEnter={() => {
          setModal({ active: true, index });
        }}
        onMouseLeave={() => {
          setModal({ active: false, index });
        }}
        className={styles.project}
      >
        <h2>{title}</h2>
        <p>Design & Development</p>
      </div>
    </>
  );
}
