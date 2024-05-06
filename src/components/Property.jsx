import React from "react";
import { Montserrat, Roboto_Condensed, Dancing_Script } from "next/font/google";
import FeaturedRoom from "./FeaturedRoom";
import Link from "next/link";
export const mont = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export const roboto = Roboto_Condensed({
  subsets: ["latin"],
  display: "swap",
});
export const dance = Dancing_Script({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
const Property = () => {
  const featuredArray = [
    {
      name: "Mountain View Condos",
      price: "150000",
      imgUrl: "/featuredImage2.jpg",
      location: "London",
      type: "Villa",
    },
    {
      name: "Parkside Townhouses",
      price: "1750000",
      imgUrl: "/featuredImage2.jpg",
      location: "Cambridge",
      type: "Apartment",
    },
    {
      name: "Seaside Retreats",
      price: "150000",
      imgUrl: "/featuredImage3.jpg",
      location: "Copenhegan",
      type: "Villa",
    },
  ];
  return (
    <div>
      <div className="grid px-12 sm:px-20 md:px-20 lg:px-24 gap-12 gap-y-6  lg:grid-cols-3 grid-cols-1">
        <div className="flex font-medium flex-col space-y-3 col-span-1 lg:col-span-2 item-start justify-start">
          <h1 className={`text-sm uppercase ${mont.className}`}>
            Let us help you find your dream home
          </h1>
          <h1 className={`text-5xl md:text-6xl xl:text-7xl  ${mont.className}`}>
            Our <span className="text-orange-700">Properties</span> List
          </h1>
        </div>
        <div className="flex col-span-1 text-xl item-start justify-start lg:justify-center">
          <h1 className={roboto.className}>
            From lavish estates with stunning views to modern penthouses <br />
            with state-of-the-art amenities.
            <br />
            We offer a diverse selection of luxury
            <br /> properties tailored to
            <br /> your lifestyle.
          </h1>
        </div>
      </div>
      <div className="grid pb-10 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 pt-10 sm:gap-16 md:gap-12 lg:gap-10 gap-y-12 px-12 sm:px-20 md:px-20 lg:px-24">
        {featuredArray.map((info, index) => (
          <FeaturedRoom key={index} info={info} />
        ))}
          </div>
          <Link href="/property"><h1 className={`uppercase pl-12 sm:pl-20 md:pl-20 mb-10 inline-block  hover:text-orange-700 lg:pl-24 text-black text-xl font-bold ${ mont.className }`}>see all properties</h1></Link>
    </div>
  );
};

export default Property;
