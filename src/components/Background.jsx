import React from "react";

const Background = ({ children }) => {
  return (
    <div className="hero h-[807px] w-[1310px] mx-auto ">
      <div className="bg-black bg-opacity-40 h-[807px] w-[1310px] overflow-y-scroll">
        {children}
      </div>
    </div>
  );
};

export default Background;
