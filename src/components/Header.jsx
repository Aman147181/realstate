"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { IoMenuOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
const Header = () => {
  const [showmobilemenu, setshowmobilemenu] = useState(false);
  return (
    <div className="w-full px-5 sm:px-20 flex fixed top-0 bg-white text-[#203963] items-center justify-between h-16">
      <Link href="/">
        <div className="flex space-x-1 justify-center items-center">
          <Image
            src="/stateLogo.png"
            width={50}
            height={50}
            alt="Realtor logo"
          />
          <h1 className=" hidden sm:block text-lg font-mono uppercase ">
            Realtor
          </h1>
        </div>
      </Link>
      <div className="sm:flex hidden space-x-5 justify-center items-center">
        <Link href="/">home</Link>
        <Link href="/property">Properties</Link>
      </div>
      <div className="] space-x-2 hidden sm:flex items-center justify-center">
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
