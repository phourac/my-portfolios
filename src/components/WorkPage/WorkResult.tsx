"use client";
import { useModal } from "@/context/ModalContext";
import Magnetic from "../common/Magnetic";
import Modal from "./modal";
import Project from "./project";
import styles from "./styles.module.css";
import { useState } from "react";
import { experiences } from "@/utils/data-util";

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
  // const [modal, setModal] = useState({ active: false, index: 0 });
  // const { setModal, modal } = useModal();

  // console.log("modal", modal);

  return (
    <>
      <p className="flex justify-start pb-8 text-5xl text-purple-400">
        Education and Job
      </p>
      <main className={styles.main}>
        <div className={styles.body}>
          {experiences.map((item, index) => {
            return (
              <Project
                key={index}
                index={index}
                job={item.job}
                year={item.year}
                place={item.place}
              />
            );
          })}
        </div>

        {/* <Modal modal={modal} projects={projects} /> */}
      </main>
    </>
  );
}
