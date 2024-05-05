import React from "react";

import Link from "next/link";
import HomepageHero from "@/components/HomepageHero";
import HomepageInfo from "@/components/HomepageInfo";
import { Roboto } from "next/font/google";
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});
const home = () => {
  return (
    <div div className={roboto.className}>
      <div className="">
        <HomepageHero />
        <HomepageInfo/>
      </div>
    </div>
  );
};

export default home;
