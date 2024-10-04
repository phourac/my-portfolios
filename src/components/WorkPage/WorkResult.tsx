"use client";
import dynamic from "next/dynamic";
// import Project from "./project";
const Project = dynamic(() => import("./project"));

import { experiences } from "@/utils/data-util";

export default function WorkResult() {
  return (
    <>
      <p className="flex justify-start pb-8 md:text-5xl text-xl text-purple-400">
        Education and Job
      </p>
      <main>
        <div>
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
