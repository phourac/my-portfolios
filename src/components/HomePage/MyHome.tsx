"use client";
import Content from "./Content";
import { Canvas } from "@react-three/fiber";
import Stars from "./Stars";

const ThreeJs = () => {
  return (
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Stars />
    </Canvas>
  );
};

function MyHome() {
  return (
    <>
      <ThreeJs />
      <Content />
    </>
  );
}

export default MyHome;
