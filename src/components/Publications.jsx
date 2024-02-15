import React, { useState, useEffect } from "react";
import Background from "./Background";
import Logo from "./Logo";
import data from "../images/PublicationImages";
import ScrollPublications from "./ScrollPublications";

const Publications = ({ clicked }) => {
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
    }, 3000);
    return () => clearInterval(interval);
  }, [count]);

  return (
    <Background>
      <div className={"flex flex-row justify-between "}>
        <div>
          <h1
            className=" pub-text my-auto text-[#D1C62A]
        "
          >
            Publications of the Nigerian Navy
          </h1>
          <Logo />
          <ScrollPublications count={count} setCount={setCount} />
        </div>
        <img
          src={publications[count]}
          alt="publication-image"
          className="pt-[140px] pb-[140px] right-[146px] h-[1000px] duration-300 fixed"
        />
      </div>
    </Background>
  );
};

export default Publications;
