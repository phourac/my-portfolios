"use client";
import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import Stars from "./Stars";

function ThreeJs() {
  return (
    <>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars />
      </Canvas>
    </>
  );
}

export default ThreeJs;
