import React, { useState, useEffect } from "react";
import Background from "./Background";
import Logo from "./Logo";
import data from "../images/PublicationImages";
import ScrollPublications from "./ScrollPublications";
import logo from "../images/logo.png";
import scrollUp from "../images/Scroll (1).png";
import { Link } from "react-router-dom";

const Publications = ({ clicked, setClicked }) => {
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
    <Background>
      {/*<img
        src={scrollUp}
        alt="scrollup"
        className="ml-[100px] mt-[40px] mb-[-100px] size-[60px]"
        onClick={() => setClicked(false)}
  />*/}
      <div className={"flex flex-row justify-between "}>
        <div>
          <h1
            className=" pub-text my-auto text-[#D1C62A]
        "
          >
            Publications of the Nigerian Navy
          </h1>
          <img
            src={logo}
            alt="navy-logo"
            className="w-[65px] h-[80px]
        ml-[325px] mt-[260px]"
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
  );
};

export default Publications;
