// import FooterWorkDe from "@/components/Footer/FooterWorkDe";
// import WorkDetails from "@/components/WorkPage/WorkDetails";
import { projects } from "@/utils/data-util";
import dynamic from "next/dynamic";
import React from "react";
const WorkDetails = dynamic(() => import("@/components/WorkPage/WorkDetails"));
const FooterWorkDe = dynamic(() => import("@/components/Footer/FooterWorkDe"));

export async function generateMetadata({ params }: { params: { id: string } }) {
  const projectName = projects.find((item) => item.id === +params.id)?.title;
  return {
    openGraph: {
      title: `${projectName} - Than phourac`,
      description: "Your front-end developer",
    },
    title: `${projectName}`,
    description: "Your front-end developer",
  };
}

function page({ params }: { params: { id: number } }) {
  return (
    <>
      <WorkDetails />
      <FooterWorkDe />
    </>
  );
}

export default page;
