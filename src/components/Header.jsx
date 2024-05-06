"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { IoMenuOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
});
const Header = () => {
  const [showmobilemenu, setshowmobilemenu] = useState(false);
  return (
    <div className="w-full px-5 sm:px-20 z-20 flex fixed top-0 bg-white text-[#203963] items-center justify-between h-16">
      <Link href="/">
        <div className="flex space-x-1 justify-center items-center">
          <Image
            src="/stateLogo.png"
            width={50}
            height={50}
            alt="Realtor logo"
          />
          <h1
            className={`${montserrat.className} hidden text-black sm:block font-bold text-lg  uppercase `}
          >
            Realtor
          </h1>
        </div>
      </Link>
      <div className="sm:flex hidden space-x-5 justify-center items-center">
        <Link className="hover:text-orange-700" href="/">
          home
        </Link>
        <Link className="hover:text-orange-700" href="/property">
          properties
        </Link>
        <Link className="hover:text-orange-700" href="/addProperty">
          add property{" "}
        </Link>
      </div>
      <div className="] space-x-2 hidden hover:text-orange-700 sm:flex items-center justify-center">
        <FaUser />
        <h1>login</h1>
      </div>
      <button
        onClick={() => {
          setshowmobilemenu((el) => !el);
        }}
        className="block sm:hidden text-2xl"
      >
        {!showmobilemenu ? <IoMenuOutline /> : <RxCross1 />}
      </button>
    </div>
  );
};

export default Header;
