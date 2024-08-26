import { cookies } from "next/headers";
import React from "react";

function page() {
  const now = new Date();

  const currentDateTime = now.toLocaleString();
  return <div className="pt-20">{currentDateTime}</div>;
}

export default page;
