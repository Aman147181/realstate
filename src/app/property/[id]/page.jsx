"use client";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Inter, Roboto_Condensed } from "next/font/google";
import Image from "next/image";
import ImageGalleryComponent from "@/components/ImageGalleryComponent";
import Link from "next/link";
import { Spinner } from "@nextui-org/react";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const roboto = Roboto_Condensed({
  subsets: ["latin"],
  display: "swap",
});
const Page = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  async function fetchProperty(id) {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/properties/${id}`);

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      return res.json();
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  useEffect(() => {
    const fetchPropertyData = async () => {
      if (!id) return;
      try {
        const property = await fetchProperty(id);
        setProperty(property);
      } catch (error) {
        console.error("Error fetching property:", error);
      } finally {
        setLoading(false);
      }
    };

    if (property === null) {
      fetchPropertyData();
    }
  }, [id, property]);

  if (!property && !loading) {
    return (
      <h1 className="text-center min-h-screen text-2xl font-bold mt-32">
        Property Not Found
      </h1>
    );
  }
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen w-full">
        <Spinner size="lg" />
      </div>
    );
  }
  return (
    <div className="min-h-screen pt-20 sm:pt-36 px-6 sm:px-20">
      <h1 className={`${inter.className} text-4xl font-semibold `}>
        {property?.name}
      </h1>
      <div
        className={`grid mt-10 grid-cols-2 md:grid-cols-4 text-xl max-w-4xl place-items-start gap-5 gap-x-3 ${roboto.className}`}
      >
        <div className="flex flex-col">
          <h1>Price</h1>
          <h1 className="font-medium">Npr. {property?.price}</h1>
        </div>
        <div className="flex flex-col">
          <h1>Area</h1>
          <h1 className="font-medium">{property?.area} sq. ft.</h1>
        </div>
        {console.log(process.env.NEXT_PUBLIC_BASE_URL)}
        <div className="flex flex-col">
          <h1>Bedrooms</h1>
          <h1 className="font-medium">{property?.beds}</h1>
        </div>
        <div className="flex flex-col">
          <h1>Bathrooms</h1>
          <h1 className="font-medium">{property?.baths}</h1>
        </div>
      </div>
      <div className="relative w-full mt-8  aspect-[3/2] px-24">
        <Image
          className="rounded-md sm:rounded-lg"
          fill
          alt="property image"
          src={property?.images[0]}
        />
      </div>
      <div className="grid grid-cols-1 gap-12 gap-y-5 lg:grid-cols-2 mt-10 md:mt-32 py-5">
        <h1 className="col-span-1 text-3xl sm:text-5xl font-medium">
          More details about the property
        </h1>
        <div className="col-span-1 flex flex-col space-y-0 items-start justify-start">
          <h1>{property?.description}</h1>
          <div className="w-full">
            <div className="justify-between mt-12  flex w-full items-center">
              <h1 className="text-2xl  mobile:text-4xl">Address</h1>
              {console.log(property)}
              <Link
                href={
                  property?.google ||
                  "https://maps.app.goo.gl/EeNG8NASzrWcRis16"
                }
              >
                <button className="p-5 text-xs mobile:text-sm lg:text-lg xl:text-xl  py-2 border-1 border-black rounded-full hover:bg-black hover:text-white">
                  Open On Google Maps
                </button>
              </Link>
            </div>
            <div className="border-y-2 border-[#e0e0e0] mt-8 py-5 flex justify-between items-center w-full">
              <h1>street</h1>
              <h1>{property?.location?.street}</h1>
            </div>
            <div className="border-b-2 border-[#e0e0e0] flex justify-between items-center  py-5 w-full">
              <h1>city</h1>
              <h1>{property?.location?.city}</h1>
            </div>
            <div className="border-b-2 border-[#e0e0e0] flex justify-between items-center py-5 w-full">
              <h1>state</h1>
              <h1>{property?.location?.state}</h1>
            </div>
            <div className="border-b-2 border-[#e0e0e0] flex justify-between items-center  py-5 w-full">
              <h1>zipcode</h1>
              <h1>{property?.location?.zipcode}</h1>
            </div>
          </div>
          <div className="flex flex-col space-y-0 w-full items-start justify-start">
            <h1 className="text-4xl mt-12">Amenities</h1>
            {property?.amenities?.map((el, index) => (
              <div
                key={index}
                className="border-b-2 border-[#e0e0e0] mt-10 py-4 flex justify-between items-center w-full"
              >
                <h1>{el}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full mt-5 ">
        <ImageGalleryComponent images={property?.images} />
      </div>
    </div>
  );
};

export default Page;
