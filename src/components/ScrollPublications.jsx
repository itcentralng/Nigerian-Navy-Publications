import React from "react";

const ScrollPublications = ({ count, setCount }) => {
  return (
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
        <div
          className="h-[150px] ml-[5px] border-l border-white: 
          border-dashed"
        ></div>
      )}

      <div
        onClick={() => setCount(3)}
        className="flex flex-row justify-between max-w-[800px] mt-0
              "
      >
        <div
          className={`${
            count == 3 ? "bullet" : "bg-white"
          }  w-2 h-2 rounded-full mt-5`}
        ></div>
        <p className="list-text cursor-pointer">
          Admiralty University Convocation Ceremony (November-2023)
        </p>
      </div>
      {count == 3 ? (
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
        onClick={() => setCount(4)}
        className="flex flex-row justify-between max-w-[500px] mt-0
              "
      >
        <div
          className={`${
            count == 4 ? "bullet" : "bg-white"
          }  w-2 h-2 rounded-full mt-5`}
        ></div>
        <p className="list-text cursor-pointer">
          Central Search Light (July 2022)
        </p>
      </div>
      {count == 4 ? (
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
        onClick={() => setCount(5)}
        className="flex flex-row justify-between max-w-[380px] mt-0
              "
      >
        <div
          className={`${
            count == 5 ? "bullet" : "bg-white"
          }  w-2 h-2 rounded-full mt-5`}
        ></div>
        <p className="list-text cursor-pointer">EasternTide (June 2017)</p>
      </div>
      {count == 5 ? (
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
        onClick={() => setCount(6)}
        className="flex flex-row justify-between max-w-[490px] mt-0
              "
      >
        <div
          className={`${
            count == 6 ? "bullet" : "bg-white"
          }  w-2 h-2 rounded-full mt-5`}
        ></div>
        <p className="list-text cursor-pointer">
          Echoes of Obula (October 2021)
        </p>
      </div>
      {count == 6 ? (
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
        onClick={() => setCount(7)}
        className="flex flex-row justify-between max-w-[640px] mt-0
              "
      >
        <div
          className={`${
            count == 7 ? "bullet" : "bg-white"
          }  w-2 h-2 rounded-full mt-5`}
        ></div>
        <p className="list-text cursor-pointer">
          Illegal Bunkering and pipeline Vandalism
        </p>
      </div>
      {count == 7 ? (
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
        onClick={() => setCount(8)}
        className="flex flex-row justify-between max-w-[540px] mt-0
              "
      >
        <div
          className={`${
            count == 8 ? "bullet" : "bg-white"
          }  w-2 h-2 rounded-full mt-5`}
        ></div>
        <p className="list-text cursor-pointer">
          Jubilee Periscope (December 2017)
        </p>
      </div>
      {count == 8 ? (
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
        onClick={() => setCount(9)}
        className="flex flex-row justify-between max-w-[600px] mt-0
              "
      >
        <div
          className={`${
            count == 9 ? "bullet" : "bg-white"
          }  w-2 h-2 rounded-full mt-5`}
        ></div>
        <p className="list-text cursor-pointer">
          Nava Engineering Digest (March 2023)
        </p>
      </div>
      {count == 9 ? (
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
        onClick={() => setCount(10)}
        className="flex flex-row justify-between max-w-[620px] mt-0
              "
      >
        <div
          className={`${
            count == 10 ? "bullet" : "bg-white"
          }  w-2 h-2 rounded-full mt-5`}
        ></div>
        <p className="list-text cursor-pointer">
          Nigerian Navy in Historical Perspective
        </p>
      </div>
      {count == 10 ? (
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
        onClick={() => setCount(11)}
        className="flex flex-row justify-between max-w-[680px] mt-0
              "
      >
        <div
          className={`${
            count == 11 ? "bullet" : "bg-white"
          }  w-2 h-2 rounded-full mt-5`}
        ></div>
        <p className="list-text cursor-pointer">
          NigerianNavy Financial Digest (august 2021)
        </p>
      </div>
      {count == 11 ? (
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
        onClick={() => setCount(12)}
        className="flex flex-row justify-between max-w-[380px] mt-0
              "
      >
        <div
          className={`${
            count == 12 ? "bullet" : "bg-white"
          }  w-2 h-2 rounded-full mt-5`}
        ></div>
        <p className="list-text cursor-pointer">NNS Delta Wakes (2018)</p>
      </div>
      {count == 12 ? (
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
        onClick={() => setCount(13)}
        className="flex flex-row justify-between max-w-[490px] mt-0
              "
      >
        <div
          className={`${
            count == 13 ? "bullet" : "bg-white"
          }  w-2 h-2 rounded-full mt-5`}
        ></div>
        <p className="list-text cursor-pointer">
          Presidential Fleet Review 2023
        </p>
      </div>
      {count == 13 ? (
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
        onClick={() => setCount(14)}
        className="flex flex-row justify-between max-w-[390px] mt-0
              "
      >
        <div
          className={`${
            count == 14 ? "bullet" : "bg-white"
          }  w-2 h-2 rounded-full mt-5`}
        ></div>
        <p className="list-text cursor-pointer">Prosperity Times (2021)</p>
      </div>
      {count == 14 ? (
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
        onClick={() => setCount(15)}
        className="flex flex-row justify-between max-w-[610px] mt-0
              "
      >
        <div
          className={`${
            count == 15 ? "bullet" : "bg-white"
          }  w-2 h-2 rounded-full mt-5`}
        ></div>
        <p className="list-text cursor-pointer">
          The Beacon magazine (February 2023)
        </p>
      </div>
      {count == 15 ? (
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
        onClick={() => setCount(16)}
        className="flex flex-row justify-between max-w-[440px] mt-0
              "
      >
        <div
          className={`${
            count == 16 ? "bullet" : "bg-white"
          }  w-2 h-2 rounded-full mt-5`}
        ></div>
        <p className="list-text cursor-pointer">The Flagship (March 2019)</p>
      </div>
      {count == 16 ? (
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
        onClick={() => setCount(17)}
        className="flex flex-row justify-between max-w-[420px] mt-0
              "
      >
        <div
          className={`${
            count == 17 ? "bullet" : "bg-white"
          }  w-2 h-2 rounded-full mt-5`}
        ></div>
        <p className="list-text cursor-pointer">The Gondola (June 2022)</p>
      </div>
      {count == 17 ? (
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
        onClick={() => setCount(18)}
        className="flex flex-row justify-between max-w-[470px] mt-0
              "
      >
        <div
          className={`${
            count == 18 ? "bullet" : "bg-white"
          }  w-2 h-2 rounded-full mt-5`}
        ></div>
        <p className="list-text cursor-pointer">The Holdings (January 2022)</p>
      </div>
      {count == 18 ? (
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
        onClick={() => setCount(19)}
        className="flex flex-row justify-between max-w-[595px] mt-0
              "
      >
        <div
          className={`${
            count == 19 ? "bullet" : "bg-white"
          }  w-2 h-2 rounded-full mt-5`}
        ></div>
        <p className="list-text cursor-pointer">
          The Logistics Voice (December 2019)
        </p>
      </div>
      {count == 19 ? (
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
        onClick={() => setCount(20)}
        className="flex flex-row justify-between max-w-[470px] mt-0
              "
      >
        <div
          className={`${
            count == 20 ? "bullet" : "bg-white"
          }  w-2 h-2 rounded-full mt-5`}
        ></div>
        <p className="list-text cursor-pointer">The Radar (september 2021)</p>
      </div>
      {count == 20 ? (
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
        onClick={() => setCount(21)}
        className="flex flex-row justify-between max-w-[390px] mt-0
              "
      >
        <div
          className={`${
            count == 21 ? "bullet" : "bg-white"
          }  w-2 h-2 rounded-full mt-5`}
        ></div>
        <p className="list-text cursor-pointer">The Sailor (June 2005)</p>
      </div>
      {count == 21 ? (
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
        onClick={() => setCount(22)}
        className="flex flex-row justify-between max-w-[300px] mt-0
              "
      >
        <div
          className={`${
            count == 22 ? "bullet" : "bg-white"
          }  w-2 h-2 rounded-full mt-5`}
        ></div>
        <p className="list-text cursor-pointer">The Sailor (1992)</p>
      </div>
      {count == 22 ? (
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
        onClick={() => setCount(23)}
        className="flex flex-row justify-between max-w-[390px] mt-0
              "
      >
        <div
          className={`${
            count == 23 ? "bullet" : "bg-white"
          }  w-2 h-2 rounded-full mt-5`}
        ></div>
        <p className="list-text cursor-pointer">The Trainer Magazine</p>
      </div>
      {count == 23 ? (
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
        onClick={() => setCount(24)}
        className="flex flex-row justify-between max-w-[310px] mt-0
              "
      >
        <div
          className={`${
            count == 24 ? "bullet" : "bg-white"
          }  w-2 h-2 rounded-full mt-5`}
        ></div>
        <p className="list-text cursor-pointer">The Transporter</p>
      </div>
      {count == 24 ? (
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
        onClick={() => setCount(25)}
        className="flex flex-row justify-between max-w-[330px] mt-0
              "
      >
        <div
          className={`${
            count == 25 ? "bullet" : "bg-white"
          }  w-2 h-2 rounded-full mt-5`}
        ></div>
        <p className="list-text cursor-pointer">The young Sailors</p>
      </div>
      {count == 25 ? (
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
        onClick={() => setCount(26)}
        className="flex flex-row justify-between max-w-[510px] mt-0
              "
      >
        <div
          className={`${
            count == 26 ? "bullet" : "bg-white"
          }  w-2 h-2 rounded-full mt-5`}
        ></div>
        <p className="list-text cursor-pointer">Western News (December 2021)</p>
      </div>
      {count == 26 ? (
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
        onClick={() => setCount(27)}
        className="flex flex-row justify-between max-w-[350px] mt-0
              "
      >
        <div
          className={`${
            count == 27 ? "bullet" : "bg-white"
          }  w-2 h-2 rounded-full mt-5`}
        ></div>
        <p className="list-text cursor-pointer">Western News (2018)</p>
      </div>
      {count == 27 ? (
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

      <div className="h-[75px] ml-[5px] border-l border-dashed"></div>
    </div>
  );
};

export default ScrollPublications;
