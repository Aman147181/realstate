import React from "react";
import Link from "next/link";
const NotFound = () => {
  return (
    <div className="flex w-full min-h-screen  flex-col items-center justify-center">
      <div className="flex flex-col space-y-6 ">
        <h1 className="text-5xl customsm:text-[60px] sm:text-[90px] md:text-[120px] lg:text-[150px]  text-center font-volkhov text-[#345b92]">
          Oops!!
        </h1>
        <h1 className="uppercase text-center text-xl sm:text-2xl font-roboto font-bold">
          404 - Page Not Found
        </h1>
      </div>
      <h1 className=" text-center px-5 text-[#254D4D] text-base sm:text-xl mt-8  customsm:mt-10 sm:mt-16 font-roboto ">
        The page you have are looking for have been removed, had its name
        changed or is temporarily unavailable.
      </h1>
      <Link href="/">
        <button className="bg-orange-700 mt-5 text-white px-8 py-2 rounded-full hover:bg-orange-600">
          Go to Homepage
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
