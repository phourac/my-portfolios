// import Footer from "@/components/Footer";
// import WorkHead from "@/components/WorkPage/WorkHead";
import React from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";
const Footer = dynamic(() => import("@/components/Footer"));
const WorkHead = dynamic(() => import("@/components/WorkPage/WorkHead"));

export const metadata: Metadata = {
  openGraph: {
    title: "Work - Than phourac",
    description: "Your front-end developer",
  },
  title: "Work",
  description: "Your front-end developer",
};
const Work = () => {
  return (
    <>
      <WorkHead />
      <Footer />
    </>
  );
};

export default Work;
