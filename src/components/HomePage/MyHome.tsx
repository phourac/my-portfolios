"use client";
import React, { useEffect, useState } from "react";
import ThreeJs from "../ThreeJs";
import Content from "./Content";

function MyHome() {
  return (
    <>
      <ThreeJs />
      <Content />
    </>
  );
}

export default MyHome;
