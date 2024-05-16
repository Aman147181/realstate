import Image from "next/image";
import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Montserrat, Roboto_Condensed } from "next/font/google";
import Link from "next/link";
import { connectDB } from "@/config/connectDB";
const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
});
const roboto = Roboto_Condensed({
  weight: "400",
  subsets: ["latin"],
});
const Footer = async () => {
    await connectDB();
  return (
    <div className={montserrat.className}>
      <div className="flex  sm:flex-row w-full bg-orange-50 justify-between items-end    px-6 sm:px-20 lg:px-24 py-8">
        <div className="flex flex-col items-start justify-start space-y-1">
          <div className="flex space-x-1 justify-center items-center">
            <Link href="/">
              {" "}
              <Image
                src="/stateLogo.png"
                width={50}
                height={50}
                alt="Realtor logo"
              />
            </Link>
            <Link href="/">
              <h1 className="  font-bold  text-lg uppercase ">Realtor</h1>
            </Link>
          </div>
          <div
            className={`${roboto.className} flex text-base sm:text-lg justify-center space-x-3 items-center`}
          >
            <Link href="/">
              <h1 className="hover:text-orange-700">home</h1>
            </Link>
            <Link href="/property">
              <h1 className="hover:text-orange-700">properties</h1>
            </Link>
           
          </div>
        </div>
        <div className="flex text-lg sm:text-xl items-center justify-center space-x-3">
          <a className="hover:text-orange-700" href="https://twitter.com/">
            {" "}
            <FaTwitter />
          </a>
          <a className="hover:text-orange-700" href="https://facebook.com/">
            {" "}
            <FaFacebook />
          </a>
          <a className="hover:text-orange-700" href="https://instagram.com/">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
