import React from "react";

const Background = ({ children }) => {
  return (
    <div className="hero h-[1180px] w-[1920px] mx-auto ">
      <div className="bg-black bg-opacity-40 h-[1180px] w-[1920px] overflow-y-scroll">
        {children}
      </div>
    </div>
  );
};

export default Background;
