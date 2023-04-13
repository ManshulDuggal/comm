"use client";

import { FC } from "react";
import { BiSearchAlt} from "react-icons/bi";
interface SearchProps {}

const Search: FC<SearchProps> = ({}) => {
  return (
    <div className="hidden md:flex justify-around gap-4 transition-all duration-75 w-auto  text-sm  text-center shadow-sm cursor-pointer hover:shadow-lg shadow-neutral-800 items-center md:w-auto px-2 py-2 md:py-2 lg:p-3 rounded-full     font-bold border md:gap-4  ">
      <div className="border-r-2 px-2 ">Anywhere</div>
      <div className="border-r-2 px-2">Anyweek</div>

      <input
        type={"text"}
        className="border-none focus:border-none border-b-2 border-r-2  "
        placeholder="Search"
      ></input>

      <div className="flex items-center gap-4">
        Add Guests 
        <span className="font-bold flex items-center md:text-lg bg-red-500/30 rounded-full p-2 border hover:shadow-lg hover:scale-100 duration-100 ">
        <BiSearchAlt className="" />{" "}
        </span>
      </div>
    </div>
  );
};

export default Search;
