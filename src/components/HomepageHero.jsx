import React from 'react'
import Link from 'next/link'
const HomepageHero = () => {
  return (
    <div
          className="bg-cover flex flex-col space-y-10 items-center text-white justify-center bg-center h-screen w-full"
          style={{ backgroundImage: "url(stateBanner.jpg)" }}
        >
          <h1 className="text-white px-5 text-center [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] uppercase text-4xl md:text-7xl xl:text-[96px]">
            find your dream house
          </h1>
          <h1 className="text-gray-200 px-5 text-center uppercase [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] text-sm md:text-lg lg:text-xl">
            Find comfort, luxury, and convenience in every property. Welcome
            home
          </h1>
          <Link href="/property">
          <button className="bg-orange-900 p-5 text-xs sm:text-sm  hover:bg-orange-800 text-white transition-colors duration-250 uppercase ">
            Explore properties
          </button>
          </Link>
        </div>
  )
}

export default HomepageHero
