"use client";
import React from "react";
// import RedoAnimText from "../AboutPage/RedoAnimText";
// import Rounded from "../common/RoundedButton";

const RedoAnimText = dynamic(() => import("../AboutPage/RedoAnimText"));
const Rounded = dynamic(() => import("../common/RoundedButton"));

import SvgCurve from "../../components/SvgCurve/index";
import Link from "next/link";
import dynamic from "next/dynamic";

function WorkDesrcipt() {
  const texts = [
    "Here you will find some of the personal and company projects that I created with each project containing its own case study",
  ];
  return (
    <>
      <div>
        <SvgCurve />
        <div className="max-w-[600px]">
          <RedoAnimText delay={0} texts={texts} />
        </div>

        <Link
          href={"/about"}
          className="absolute md:right-56  bottom-56 whitespace-nowrap"
        >
          <Rounded>
            <p>About me</p>
          </Rounded>{" "}
        </Link>
      </div>
    </>
  );
}

export default WorkDesrcipt;
