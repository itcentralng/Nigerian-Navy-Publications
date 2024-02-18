import React, { useState } from "react";
import navyguys from "../images/navy-guys1.jpg";
import scroll from "../images/Scroll.png";
import Background from "./Background";
import Logo from "./Logo";
import Publications from "./Publications";
const Hero = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <Background>
      <div className=" max-h-[1180px] ">
        <div className="flex flex-row">
          <div>
            <h1
              className=" hero-text my-auto text-[#D1C62A]
        "
            >
              PUBLICATIONS OF THE NIGERIAN NAVY
            </h1>
            <Logo />
          </div>
          <div className=" flex flex-col text-start ml-[-110px]">
            <img
              src={navyguys}
              className=" rounded-[12px] w-[450px]
        border-[#D1C62A] border-4 mt-[370px]"
            />
            <p className="hero-small-text mt-[35px] font-semibold">
              From Successful Maritime Operations To Humanitarian Missions, Our
              Naval Forces Continue To Uphold The Highest Standards Of
              Professionalism And Excellence.
            </p>
          </div>
        </div>
        <img
          src={scroll}
          alt="scroll"
          className="ml-[100px] mt-[-130px] size-[70px] hover:size-[75px]"
          onClick={() => setClicked(true)}
        />
        <div
          className={
            clicked
              ? "absolute top-0 z-10 duration-500"
              : "fixed top-[100%] z-10 duration-500"
          }
        >
          <Publications setClicked={setClicked} />
          {/*clicked && */}
        </div>
      </div>
    </Background>
  );
};

export default Hero;
