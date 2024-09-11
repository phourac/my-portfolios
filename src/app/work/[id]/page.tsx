import Footer from "@/components/Footer";
import FooterWorkDe from "@/components/Footer/FooterWorkDe";
import WorkDetails from "@/components/WorkPage/WorkDetails";
import React from "react";

function page({ params }: { params: { id: number } }) {
  return (
    <>
      <WorkDetails />
      <FooterWorkDe />
    </>
  );
}

export default page;
