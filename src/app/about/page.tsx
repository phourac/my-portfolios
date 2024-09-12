import HeadContent from "@/components/AboutPage/HeadContent";
import React from "react";
import Footer from "../../components/Footer/index";
import { Metadata } from "next";

export const metadata: Metadata = {
  openGraph: {
    title: "About - Than phourac",
    description: "Your front-end developer",
  },
  title: "About",
  description: "Your front-end developer",
};

function page() {
  return (
    <>
      <HeadContent />
      <Footer />
    </>
  );
}

export default page;
