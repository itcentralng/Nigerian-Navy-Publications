import React, { useState, useEffect } from "react";

import navyguys from "../images/navy-guys1.jpg";
import scroll from "../images/Scroll.png";
import Background from "./Background";
import Logo from "./Logo";
import Publications from "./Publications";
import data from "../images/PublicationImages";

const Hero = () => {
  const [clicked, setClicked] = useState(false);
  const [count, setCount] = useState(0);
  const [publications, setPublications] = useState(data);
  useEffect(() => {
    const lastPublication = data.length - 1;
    if (count > lastPublication) {
      setCount(0);
    }
  }, [count, publications]);

  useEffect(() => {
    let interval = setInterval(() => {
      setCount(count + 1);
    }, 8000);
    return () => clearInterval(interval);
  }, [count]);

  return (
    <>
      <Background>
        <div className=" max-h-[1180px] absolute mt-[-70px]">
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
                From Successful Maritime Operations To Humanitarian Missions,
                Our Naval Forces Continue To Uphold The Highest Standards Of
                Professionalism And Excellence.
              </p>
            </div>
          </div>
          <img
            src={scroll}
            alt="scroll"
            className=" ml-[100px] mt-[-130px] size-[70px]  rounded-full hover:bg-[#fffdd059]"
            onClick={() => {
              console.log("clicked true");
              return setClicked(true);
            }}
          />{" "}
        </div>
      </Background>

      <Publications clicked={clicked} setclicked={setClicked} />
    </>
  );
};

export default Hero;
