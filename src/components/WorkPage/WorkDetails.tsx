"use client";
import { projects } from "@/utils/data-util";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useRef } from "react";
import styles from "./style.module.scss";
import { useScroll, useTransform, motion } from "framer-motion";

const WorkDetails = () => {
  const { id } = useParams();
  const details = projects.find((item) => item.id === +id);
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  return (
    <>
      <div className="flex flex-col py-32 overflow-x-hidden">
        <div className="container mx-auto px-4 md:px-24  h-auto">
          <p className="text-6xl">{details?.title}</p>
          <div className="flex justify-between items-center pt-32">
            <div className="flex flex-col items-start justify-start gap-4">
              {" "}
              <p className="w-[250px] text-lg text-secondary-grey">Type</p>
              <hr className="h-1 w-full flex text-secondary-grey" />
              <p className="w-[250px] text-2xl">{details?.type}</p>
            </div>
            <div className="flex flex-col items-start justify-start gap-4">
              {" "}
              <p className="w-[250px] text-lg text-secondary-grey">
                Technology
              </p>
              <hr className="h-1 w-full flex text-secondary-grey" />
              <p className="w-[250px] text-2xl">{details?.tech}</p>
            </div>
            <div className="flex flex-col items-start justify-start gap-4">
              {" "}
              <p className="w-[250px] text-lg text-secondary-grey">Credit</p>
              <hr className="h-1 w-full flex text-secondary-grey" />
              <p className="w-[250px] text-2xl">{details?.credit}</p>
            </div>
          </div>
          <div className="relative pt-32">
            <Image
              src={details?.img || ""}
              alt=""
              width={0}
              height={0}
              className="w-full h-auto"
              sizes="(min-width: 1200px) 75vw, (min-width: 768px) 50vw, 100vw"
              priority
            />
          </div>
        </div>
        {details?.detatil?.img && (
          <div className="pt-32 flex justify-center ">
            <Image
              src={details?.detatil?.img || ""}
              alt=""
              width={900}
              height={900}
              sizes="(min-width: 1200px) 75vw, (min-width: 768px) 50vw, 100vw"
              priority
            />
          </div>
        )}
        {details?.detatil?.vdo && (
          <div
            className="py-32 flex justify-center"
            style={{ backgroundColor: `${details?.color}` }}
          >
            <video
              width={900}
              height={900}
              src={details?.detatil?.vdo}
              className="rounded-[16px]"
              autoPlay
              loop
              muted
            />
          </div>
        )}

        <div className="pt-32 flex justify-center ">
          <div className="flex md:flex-row flex-col justify-center gap-8">
            {details?.detatil?.mobile
              ? details?.detatil?.mobile.map((item, i) => {
                  return (
                    <Image
                      key={i}
                      src={item.img || ""}
                      alt=""
                      width={300}
                      height={300}
                      sizes="(min-width: 808px) 50vw, 100vw"
                      priority
                    />
                  );
                })
              : details?.detatil?.pc?.map((item, i) => {
                  return (
                    <Image
                      key={i}
                      src={item.img || ""}
                      alt=""
                      width={600}
                      height={600}
                      sizes="(min-width: 808px) 50vw, 100vw"
                      priority
                    />
                  );
                })}
          </div>
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

export default WorkDetails;
