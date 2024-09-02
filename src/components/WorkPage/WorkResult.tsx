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
    img: "/img/Screenshot 2024-09-02 at 3.08.11 in the afternoon.png",
  },
  {
    title: "Office Studio",
    src: "officestudio.png",
    color: "#8C8C8C",
    img: "/img/Screenshot 2024-09-02 at 3.08.11 in the afternoon.png",
  },
  {
    title: "Locomotive",
    src: "locomotive.png",
    color: "#EFE8D3",
    img: "/img/Screenshot 2024-09-02 at 3.08.11 in the afternoon.png",
  },
  // {
  //   title: "Silencio",
  //   src: "silencio.png",
  //   color: "#706D63",
  //   img: "/img/Screenshot 2024-09-02 at 3.08.11 in the afternoon.png",
  // },
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
                img={project.img}
                key={index}
              />
            );
          })}
        </div>

        {/* <Modal modal={modal} projects={projects} /> */}
      </main>
    </>
  );
}
