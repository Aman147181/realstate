import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaUser } from "react-icons/fa";
const Header = () => {
  return (
    <div className="w-full px-5 sm:px-20 flex fixed top-0 bg-white text-[#203963] items-center justify-between h-16">
      <div className="flex space-x-1 justify-center items-center">
        <Image src="/stateLogo.png" width={50} height={50} />
        <h1 className=" hidden sm:block text-lg font-mono uppercase ">
          Realtor
        </h1>
      </div>
      <div className="sm:flex hidden space-x-5 justify-center items-center">
        <Link href="/">home</Link>
        <Link href="/property">Properties</Link>
      </div>
      <div className="] space-x-1 hidden sm:flex items-center justify-center">
        <FaUser />
        <h1>login</h1>
      </div>
    </div>
  );
};

export default Header;
