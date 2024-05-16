import React from "react";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
});
const FeaturedRoom = ({ info }) => {
  return (
    <div
      className={`flex flex-col  item-center w-full justify-start space-y-5 ${montserrat.className}`}
    >
      <div className="overflow-hidden">
        <img
          radius="none"
          className="max-h-64 object-cover w-full scale-125 hover:scale-100 hover:rounded-[20px] transition duration-500 ease-in-out "
          alt="Featured Room"
          src={info.images[0]}
        />
      </div>

      <div className="grid grid-cols-2">
        <div className="flex flex-col justify-start items-start">
          <h1 className="font-bold text-xl">{info.name}</h1>
          <h1 className="text-slate-700 text-lg">{info.type}</h1>
        </div>
        <div className="flex flex-col justify-start items-center">
          <h1 className="font-bold text-xl">Nrs. {info.price}</h1>
          <h1 className="text-slate-700 text-lg">{info.location.city}</h1>
        </div>
      </div>
    </div>
  );
};

export default FeaturedRoom;
