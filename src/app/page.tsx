// import MyHome from "@/components/HomePage/MyHome";
import dynamic from "next/dynamic";
const MyHome = dynamic(() => import("@/components/HomePage/MyHome"));

export default function Home() {
  return (
    <>
      <MyHome />
    </>
  );
}
