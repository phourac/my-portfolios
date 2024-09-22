"use client";
import React, { useRef } from "react";
import Rounded from "../common/RoundedButton";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import styles from "../../assets/style/sliderImg.module.scss";
import { socialsMedia } from "@/utils/data-util";
import Link from "next/link";
import emailjs from "@emailjs/browser";

const FormContact = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_zqocrra",
          "template_eh91zd8",
          form.current,
          "t81HpezQjVmrq1uE0"
        )
        .then(
          (data) => {
            if (data.text === "OK" || data.status === 200)
              alert("Your form has been sent!!!");
          },
          (error) => {
            console.log("FAILED...", error.text);
            if (error) alert("Somthing went wrong!!!");
          }
        );
    }
  };
  return (
    <>
      <form
        ref={form}
        // onSubmit={handleSubmit(onSubmit)}
        onSubmit={sendEmail}
        className="w-full flex flex-col items-start justify-center px-4 md:px-16 lg:px-80 pt-10"
      >
        <div className="relative z-0 w-full mb-7 group">
          <input
            type="text"
            name="to_name"
            className="block py-5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=""
          />
          <label
            //   for="floating_email"
            className="peer-focus:font-medium absolute text-3xl duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Name
          </label>
        </div>
        <div className="relative z-0 w-full mb-7 group">
          <input
            type="email"
            name="user_email"
            className="block py-5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            //   for="floating_email"
            className="peer-focus:font-medium absolute text-3xl duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email
          </label>
        </div>
        <div className="relative z-0 w-full mb-7 group">
          <input
            type="text"
            name="phone"
            className="block py-5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            //   for="floating_email"
            className="peer-focus:font-medium absolute text-3xl duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Phone Number
          </label>
        </div>
        <div className="relative z-0 w-full mb-20 group">
          <input
            type="text"
            name="message"
            className="block py-5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=""
          />
          <label
            //   for="floating_email"
            className="peer-focus:font-medium absolute text-3xl duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Message
          </label>
        </div>
        <button type="submit" value="Send">
          <Rounded>
            <p className="text-xl">Submit</p>
          </Rounded>
        </button>
      </form>
      <div ref={container} className={styles.slidingImages}>
        <div className="bg-primary-dark h-[350px] inline-block w-full mt-16 ">
          <motion.p
            className="text-[60px] px-4 md:px-16 lg:px-80 pb-10"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Follow me 👇💌
          </motion.p>
          <div
            className="px-4 md:px-16 lg:px-80 pb-20 flex gap-10"
            ref={containerRef}
          >
            {socialsMedia.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Link href={item.link} target="_blank">
                  <item.icon size={50} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div style={{ height }} className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </motion.div>
      </div>
    </>
  );
};

export default FormContact;
