import React, { useState, useEffect } from "react";
import Background from "./Background";
import Logo from "./Logo";
import data from "../images/PublicationImages";
import ScrollPublications from "./ScrollPublications";
import logo from "../images/logo.png";
import scrollUp from "../images/Scroll (1).png";
import { Link } from "react-router-dom";

const Publications = ({ clicked, setclicked }) => {
  const [count, setCount] = useState(0);
  const [publications, setPublications] = useState(data);
  /*const [currentImage, setCurrentImage] = useState(publications[count]);*/

  /* useEffect(() => {
    const intervalId = setInterval(() => {
      if (count === publications.length - 1) {
        setCount(0);
      } else {
        setCount(count + 1);
      }
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);*/

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
    <div
      className={
        clicked
          ? "absolute top-[0px] z-10 duration-500"
          : "fixed top-[100%] z-10 duration-500"
      }
    >
      <Background>
        <div className={"flex flex-row justify-between"}>
          <div>
            <img
              src={scrollUp}
              alt="scrollup"
              className=" scrollup ml-[100px] mt-[40px] mb-[-100px] hover:bg-[#fffdd059] hover:shadow-2xl rounded-full"
              onClick={() => {
                return setclicked(false);
              }}
            />

            <h1
              className=" pub-text
                  
                  "
            >
              Publications of the Nigerian Navy
            </h1>
            <img
              src={logo}
              alt="navy-logo"
              className="w-[65px] h-[80px]
                  ml-[325px] mt-[-230px]"
            />
            <ScrollPublications count={count} setCount={setCount} />
          </div>
          <img
            src={publications[count]}
            alt="publication-image"
            className="pt-[150px] right-[100px] h-[590px] duration-300 fixed"
          />
        </div>
      </Background>
    </div>
  );
};

export default Publications;
