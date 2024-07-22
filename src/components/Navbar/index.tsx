"use client";
import { navbar } from "@/utils/data-util";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { motion } from "framer-motion";

function Navbar() {
  const [acitve, setActive] = useState("");
  const pathname = usePathname();
  const currentPathname = pathname.split("/")[1];
  console.log("currentPathname", currentPathname);
  return (
    <nav className=" border-gray-200 w-full absolute z-10">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
        <div className="w-auto">
          <ul className="font-medium flex  p-4  mt-4   flex-row    dark:border-gray-700 ">
            {navbar.map((item, i) => {
              console.log("route", item.value);
              return (
                <div className="flex flex-col justify-center items-center ">
                  <Link
                    onClick={() => {
                      setActive(item.value);
                    }}
                    key={i}
                    href={item.route}
                    className={`block py-2 px-3 `}
                  >
                    <motion.p
                      className={`${
                        currentPathname === item.value
                          ? "text-purple-300"
                          : "text-white"
                      } `}
                    >
                      {" "}
                      {item.name}
                    </motion.p>
                  </Link>
                  {currentPathname === item.value && (
                    <motion.span
                      initial={{ width: 0 }}
                      animate={{
                        width: 50,
                        transition: { duration: 0.5 },
                      }}
                      className="h-[2px] bg-purple-300"
                    ></motion.span>
                  )}
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
