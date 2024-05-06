"use client";
import React, { useState } from "react";
const SearchComponent = () => {
  const [keyword, setKeyword] = useState("");
  const [selectedroomOption, setSelectedroomOption] = useState("option1");
  return (
    <div className="px-5 max-w-4xl w-full">
      <div className="  grid grid-cols-1 sm:grid-cols-2 place-content-center gap-3   bg-white/20 backdrop-blur-sm  w-full  p-4  rounded-lg shadow-xl">
        <div className="col-span-1">
          <input
            type="text"
            placeholder="Enter keyword or location"
            className=" p-2  md:hover:bg-white/20 bg-white/20  text-white w-full placeholder:text-white  md:bg-inherit rounded-md focus:outline-none "
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>

        <div className="col-span-1 flex items-center justify-center space-x-3">
          <select
            className="p-2 w-full  md:hover:bg-white/20 flex-grow bg-white/20 md:bg-inherit rounded-md focus:outline-none "
            value={selectedroomOption}
            onChange={(e) => setSelectedroomOption(e.target.value)}
          >
            <option className="bg-slate-400" value="all">
              All
            </option>
            <option className="bg-slate-400" value="apartment">
              Apartment
            </option>
            <option className="bg-slate-400" value="room">
              Room
            </option>
            <option className="bg-slate-400" value="Loft">
              Loft
            </option>
          </select>

          <button
            className="px-5 py-2 text-white bg-orange-700 rounded-md hover:bg-orang-600 focus:outline-none hover:bg-orange-600"
            onClick={() => {}}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
