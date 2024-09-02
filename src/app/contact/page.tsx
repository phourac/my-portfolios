import Skills from "@/components/AboutPage/Skills";
import FormContact from "@/components/ContactPage/FormContact";
import FormHeader from "@/components/ContactPage/FormHeader";
import Footer from "@/components/Footer";
import { cookies } from "next/headers";
import React from "react";

function page() {
  return (
    <>
      <div className="pt-20">
        <FormHeader />
        <FormContact />
        {/* <Skills /> */}
      </div>
      <Footer />
    </>
  );
}

export default page;
