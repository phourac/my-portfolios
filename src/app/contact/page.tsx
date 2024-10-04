import Skills from "@/components/AboutPage/Skills";
// import FormContact from "@/components/ContactPage/FormContact";
// import FormHeader from "@/components/ContactPage/FormHeader";
// import Footer from "@/components/Footer";
import { cookies } from "next/headers";
import React from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";
const Footer = dynamic(() => import("@/components/Footer"));
const FormContact = dynamic(
  () => import("@/components/ContactPage/FormContact")
);
const FormHeader = dynamic(() => import("@/components/ContactPage/FormHeader"));

export const metadata: Metadata = {
  openGraph: {
    title: "Contact - Than phourac",
    description: "Your front-end developer",
  },
  title: "Contact",
  description: "Your front-end developer",
};

function page() {
  return (
    <>
      <div className="pt-20 overflow-x-hidden">
        <FormHeader />
        <FormContact />
        {/* <Skills /> */}
      </div>
      <Footer />
    </>
  );
}

export default page;
