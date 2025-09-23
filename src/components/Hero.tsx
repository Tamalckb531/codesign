import React from "react";

const Hero = () => {
  return (
    <div className=" text-white w-full flex  flex-col gap-2 mt-32 items-center justify-center">
      <div className="flex items-center">
        <p className=" font-bold text-7xl bg-gradient-to-r from-[#d9a7c7]  to-[#fffcdc] bg-clip-text text-transparent">
          Codesign
        </p>
      </div>
      <p className="flex items-center text-xl space-x-2">
        Share your code with{" "}
        <span className=" ml-2 font-bold italic bg-gradient-to-r from-[#ff00cc] to-[#89fffd] bg-clip-text text-transparent">
          {" "}
          --style--
        </span>
      </p>
    </div>
  );
};

export default Hero;
