"use client";
import styles from "./style.module.scss";
import Image from "next/image";
import Rounded from "../common/RoundedButton";
import Magnetic from "../common/Magnetic";

import { useRef, useState } from "react";
import { useScroll, motion, useTransform, useSpring } from "framer-motion";
import { contact, projects, socials } from "@/utils/data-util";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function FooterWorkDe() {
  const [hover, setHover] = useState(false);
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);

  const params = useParams();
  const id = params.id;
  const lastId = projects.length;
  console.log("lastId", lastId);
  const nextCaseID = +id === lastId ? 1 : +id + 1;
  console.log("nextCaseID", nextCaseID);

  const nextCaseProject = projects.find((item) => item.id === nextCaseID);
  console.log("color", nextCaseProject?.detatil?.color);

  return (
    <motion.div style={{ y }} ref={container} className={styles.contact}>
      <div className={styles.body}>
        <Link
          href={`/work/${nextCaseID}`}
          className="flex justify-center flex-col items-center gap-8 relative"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          {/* <span> */}
          {/* <div className={styles.imageContainer}>
              <Image fill={true} alt={"image"} src={`/images/background.jpg`} />
            </div> */}
          <div className="flex md:flex-row flex-col justify-between md:gap-32 gap-8">
            <div className="flex justify-center flex-col items-center gap-8">
              <h2 className="text-black">Next case</h2>
              <h2
                className={`md:text-8xl text-6xl ${
                  hover ? "text-black/65" : "text-black"
                } transition-colors duration-300 ease-in-out`}
              >
                {nextCaseProject?.title}
              </h2>

              {/* <hr className="w-[75%] h-1" /> */}
            </div>

            <motion.div
              animate={hover ? { y: 0 } : { y: 100 }}
              transition={{ duration: 0.2 }}
              className={`p-4 md:flex hidden`}
              style={{ backgroundColor: `${nextCaseProject?.detatil?.color}` }}
            >
              <Image
                src={nextCaseProject?.img || ""}
                alt=""
                width={500}
                height={500}
              />
            </motion.div>
            <motion.div
              className={`p-4 flex md:hidden`}
              style={{ backgroundColor: `${nextCaseProject?.detatil?.color}` }}
            >
              <Image
                src={nextCaseProject?.img || ""}
                alt=""
                width={500}
                height={500}
              />
            </motion.div>
          </div>

          <hr className="h-1 w-full z-20" />
          <div
            className="w-full h-24 z-10 bg-white absolute -bottom-8"
            onMouseEnter={() => setHover(false)}
            onMouseLeave={() => setHover(true)}
          ></div>

          {/* </span> */}
          {/* <motion.div style={{ x }} className={styles.buttonContainer}>
            <Rounded backgroundColor={"#334BD3"} className={styles.button}>
              <p>Get in touch</p>
            </Rounded>
          </motion.div> */}
          <motion.svg
            style={{ rotate, scale: 2 }}
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
              fill="white"
            />
          </motion.svg>
        </Link>
        <div className="flex gap-[20px] md:ml-[200px] ml-[10px] mr-[200px] relative z-50 md:w-[100%] w-[80%]">
          <Rounded>
            <Link href={contact.email.link} target="_blank">
              <p className="text-black">{contact.email.e}</p>
            </Link>
          </Rounded>

          <Rounded>
            <Link href={contact.phone.link} target="_blank">
              <p className="text-black">{contact.phone.number}</p>
            </Link>
          </Rounded>
        </div>
        <div className={styles.info}>
          {/* <div>
            <span>
              <h3>Version</h3>
              <p>2024 © Edition</p>
            </span>
            <span>
              <h3>Version</h3>
              <p>11:49 PM GMT+2</p>
            </span>
          </div> */}
          <div className="flex flex-col justify-start items-start">
            <h3 className="text-start w-full">socials</h3>
            <div className="flex justify-start items-start">
              {socials.map((item, i) => {
                return (
                  <Magnetic key={i}>
                    <Link href={item.link} target="_blank">
                      <p className="text-primary-typography">{item.name}</p>
                    </Link>
                  </Magnetic>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// export default function index() {
//   return <div>index</div>;
// }
