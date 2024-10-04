"use client";
import styles from "./style.module.scss";
// import Rounded from "../common/RoundedButton";
// import Magnetic from "../common/Magnetic";
const Rounded = dynamic(() => import("../common/RoundedButton"));
const Magnetic = dynamic(() => import("../common/Magnetic"));

import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import { contact, socials } from "@/utils/data-util";
import Link from "next/link";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

export default function Footer() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);

  const router = useRouter();
  return (
    <motion.div style={{ y }} ref={container} className={styles.contact}>
      <div className={styles.body}>
        <div className={styles.title}>
          {/* <span> */}
          {/* <div className={styles.imageContainer}>
              <Image fill={true} alt={"image"} src={`/images/background.jpg`} />
            </div> */}
          <h2>Let&apos;s work</h2>
          {/* </span> */}
          <h2>together</h2>
          <motion.div
            style={{ x }}
            className={styles.buttonContainer}
            onClick={() => router.push("/contact")}
          >
            <Rounded backgroundColor={"#334BD3"} className={styles.button}>
              <p>Get in touch</p>
            </Rounded>
          </motion.div>
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
        </div>
        <div className={styles.nav}>
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
