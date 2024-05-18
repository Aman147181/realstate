import React from "react";
import { Montserrat, Roboto_Condensed } from "next/font/google";
export const mont = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export const roboto = Roboto_Condensed({
  subsets: ["latin"],
  display: "swap",
});
const NoProductsFound = () => {
  return (
    <div>
      <div className="flex flex-col space-y-6 ">
        <h1 className={`text-5xl customsm:text-[60px] sm:text-[90px]   text-center  text-[#345b92] ${roboto.className}`}>
          Oops!!
        </h1>
        <h1 className={`uppercase text-center text-xl sm:text-2xl font-roboto font-bold  ${mont.className}`}>
          No Property Found
        </h1>
      </div>
      <h1 className=" text-center px-5 text-[#254D4D] text-base sm:text-xl mt-8  mobile:mt-10 sm:mt-16  ">
        Your search did not match any Property. please try again.
      </h1>
     
    </div>
  );
};

export default NoProductsFound;
