import React from "react";
import HomepageHero from "@/components/HomepageHero";
import HomepageInfo from "@/components/HomepageInfo";
import { Roboto } from "next/font/google";
import Property from "@/components/Property";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});
const home = () => {
  return (
    <div div className={roboto.className}>
      <div className="">
        <HomepageHero />
        <HomepageInfo />
        <Property />
      </div>
    </div>
  );
};

export default home;
