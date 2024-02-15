import React, { useState, useEffect } from "react";
import Background from "./Background";
import Logo from "./Logo";
import data from "../images/PublicationImages";

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
      <div className={"flex flex-row justify-between"}>
        <div>
          <h1
            className=" pub-text my-auto text-[#D1C62A]
        "
          >
            Publications of the Nigerian Navy
          </h1>
          <Logo />
          <div className="ml-[146px] mt-[150px]">
            <div
              onClick={() => setCount(0)}
              className="flex flex-row justify-between max-w-[640px] mb-[0px]"
            >
              <div
                className={`${
                  count == 0 ? "bullet" : "bg-white"
                }  w-2 h-2 rounded-full mt-5 box-shadow`}
              />

              <p className="list-text cursor-pointer">
                International Maritime Conference (2022)
              </p>
            </div>
            {count == 0 ? (
              <>
                <div className="h-[75px] ml-[5px] border-l  border-yellow-300 border-solid" />
                <div
                  className="h-[75px] ml-[5px] border-l border-white: 
            border-dashed"
                />
              </>
            ) : (
              <div
                className="h-[150px] ml-[5px] border-l border-white: 
          border-dashed"
              ></div>
            )}

            <div
              onClick={() => setCount(1)}
              className="flex flex-row justify-between max-w-[510px] mt-0
              "
            >
              <div
                className={`${
                  count == 1 ? "bullet" : "bg-white"
                }  w-2 h-2 rounded-full mt-5`}
              ></div>
              <p className="list-text cursor-pointer">
                Making the Nigerian Navy (2002)
              </p>
            </div>
            {count == 1 ? (
              <>
                <div className="h-[75px] ml-[5px] border-l border-yellow-300 border-solid" />
                <div className="h-[75px] ml-[5px] border-l border-dashed" />
              </>
            ) : (
              <div
                className="h-[150px] ml-[5px] border-l border-white: 
          border-dashed"
              ></div>
            )}

            <div
              onClick={() => setCount(2)}
              className="flex flex-row justify-between max-w-[510px]"
            >
              <div
                className={`${
                  count == 2 ? "bullet" : "bg-white"
                } w-2 h-2 rounded-full mt-5 hover:w-3 hover:h-3`}
              ></div>
              <p className="list-text cursor-pointer">
                The Sailor - NN at 46 (June 2002)
              </p>
            </div>
            {count == 2 ? (
              <>
                <div className="h-[75px] ml-[5px] border-l border-solid  border-yellow-300" />
                <div className="h-[75px] ml-[5px] border-l border-dashed" />
              </>
            ) : (
              <div className="h-[75px] ml-[5px] border-l border-dashed"></div>
            )}
          </div>
        </div>
        <img
          src={publications[count]}
          alt="publication-image"
          className="pt-[140px] mr-[146px] h-[1000px] duration-300"
        />
      </div>
    </Background>
  );
};

export default Publications;
