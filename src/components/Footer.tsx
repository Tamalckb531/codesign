"use client";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className=" fixed bottom-0 text-end text-lg text-white w-full p-2">
      <p className=" mr-4">
        Made with ❤️ by{" "}
        <Link href={"https://x.com/TamalCDip"} target="_blank">
          Tamal
        </Link>{" "}
      </p>
    </div>
  );
};

export default Footer;
