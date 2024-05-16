"use client";
import React, { useState, useEffect } from "react";
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
  const [property, setProperty] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await fetch(`/api/properties`);

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await res.json();
        console.log(data.properties);
        setProperty(data.properties);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);
  return (
    <div>
      <div className="grid px-5 sm:px-20 md:px-20 lg:px-24 gap-12 gap-y-6  lg:grid-cols-3 grid-cols-1">
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
      <div className="grid pb-10 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 pt-10 sm:gap-16 md:gap-12 lg:gap-10 gap-y-12 px-5 sm:px-20 md:px-20 lg:px-24">
        {property?.map((info, index) => (
          <Link key={index} href={`/property/${info._id}`}>
            <FeaturedRoom  info={info} />
          </Link>
        ))}
      </div>
      <Link href="/property">
        <h1
          className={`uppercase pl-5 sm:pl-20 md:pl-20 mb-10 inline-block  hover:text-orange-700 lg:pl-24 text-black text-xl font-bold ${mont.className}`}
        >
          see all properties
        </h1>
      </Link>
    </div>
  );
};

export default Property;
