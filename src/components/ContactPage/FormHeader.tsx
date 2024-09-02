import React from "react";

const FormHeader = () => {
  return (
    <div className="flex flex-col items-start justify-center px-4 md:px-16 lg:px-80">
      <p className="md:text-[40px] text-[20px] text-primary">
        Do you need help ?
      </p>
      <p className="md:text-[70px] text-[40px] ">Let me know 👋</p>
    </div>
  );
};

export default FormHeader;
