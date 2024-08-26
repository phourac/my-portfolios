"use client";
import { useModal } from "@/context/ModalContext";
import Magnetic from "../common/Magnetic";
import Modal from "./modal";
import Project from "./project";
import styles from "./styles.module.css";
import { useState } from "react";

const projects = [
  {
    title: "C2 Montreal",
    src: "c2montreal.png",
    color: "#000000",
  },
  {
    title: "Office Studio",
    src: "officestudio.png",
    color: "#8C8C8C",
  },
  {
    title: "Locomotive",
    src: "locomotive.png",
    color: "#EFE8D3",
  },
  {
    title: "Silencio",
    src: "silencio.png",
    color: "#706D63",
  },
];

export default function WorkResult() {
  const [modal, setModal] = useState({ active: false, index: 0 });
  // const { setModal, modal } = useModal();

  // console.log("modal", modal);

  return (
    <>
      <main className={styles.main}>
        <div className={styles.body}>
          {projects.map((project, index) => {
            return (
              <Project
                index={index}
                title={project.title}
                setModal={setModal}
                key={index}
              />
            );
          })}
        </div>

        <Modal modal={modal} projects={projects} />
      </main>
    </>
  );
}
