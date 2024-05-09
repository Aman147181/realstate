import React from "react";
import { BsBuildings } from "react-icons/bs";
import { FaHouseCrack } from "react-icons/fa6";
import { MdOutlineHomeWork } from "react-icons/md";
import { Montserrat, Roboto_Condensed } from "next/font/google";
const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
});
const roboto = Roboto_Condensed({
  weight: "400",
  subsets: ["latin"],
});
const HomepageInfo = () => {
  return (
    <div className={montserrat.className}>
      <div className=" p-12 px-5 sm:p-16 lg:p-24 lg:pt-32  grid gap-16 gap-y-8 grid-cols-1 md:grid-cols-2">
        <div className="col-span-1 flex flex-col items-start justify-start">
          <h1 className="text-orange-700 uppercase text-xl"> best solution</h1>
          <h1 className="text-black uppercase text-4xl sm:text-5xl">
            {" "}
            modern house
          </h1>
        </div>
        <div
          className={`col-span-1 flex items-start justify-start text-justify text-xl text-slate-500 ${roboto.className}`}
        >
          Unlock your dream property with our comprehensive real estate
          solutions, tailored to match your needs, preferences, and aspirations.
          Experience seamless transactions and unparalleled expertise.
        </div>
      </div>

      <div className="grid p-12 px-5 text-center pt-0 sm:pt-6 lg:pt-6 uppercase  text-black sm:p-20 lg:px-24   grid-cols-1 lg:grid-cols-3 gap-10 xl:gap-16 gap-y-8">
        <div className="flex hover:text-orange-700  duration-300 text-slate-900 p-6 lg:p-10 py-16 lg:py-20 space-y-8 text-center col-span-1 flex-col items-center bg-[#fbf8f6] hover:bg-orange-50 justify-center  shadow-sm border-slate-50">
          <h1 className=" text-7xl">
            <MdOutlineHomeWork />
          </h1>
          <h1 className="text-2xl text-black hover:text-black  font-bold">
            interior design
          </h1>
          <h1 className="text-black hover:text-black pt-4">
            {" "}
            Unlock your dream property with our comprehensive real estate
            solutions
          </h1>
        </div>
        <div className="flex hover:text-orange-700  duration-300 text-slate-900 p-10 py-20 space-y-8 text-center col-span-1 flex-col items-center bg-[#fbf8f6] hover:bg-orange-50 justify-center  shadow-sm border-slate-50">
          <h1 className=" text-7xl">
            <BsBuildings />
          </h1>
          <h1 className="text-2xl text-black hover:text-black  font-bold">
            ultra concept
          </h1>
          <h1 className="text-black hover:text-black pt-4">
            {" "}
            Unlock your dream property with our comprehensive real estate
            solutions
          </h1>
        </div>
        <div className="flex hover:text-orange-700  duration-300 text-slate-900 p-10 py-20 space-y-8 text-center col-span-1 flex-col items-center bg-[#fbf8f6] hover:bg-orange-50 justify-center  shadow-sm border-slate-50">
          <h1 className=" text-7xl">
            <FaHouseCrack />
          </h1>
          <h1 className="text-2xl text-black hover:text-black  font-bold">
            urban exterior
          </h1>
          <h1 className="text-black hover:text-black pt-4">
            {" "}
            Unlock your dream property with our comprehensive real estate
            solution
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HomepageInfo;
