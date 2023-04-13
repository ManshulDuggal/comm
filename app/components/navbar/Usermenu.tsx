"use client";
import { FC, useRef, useState } from "react";

interface UsermenuProps {}

import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";

import ToggleMenu from "./ToggleMenu";
import { cursorTo } from "readline";
import { Ref } from "react";
const Usermenu: FC<UsermenuProps> = ({}) => {
  const [Toggle, setToggle] = useState(false);

  
  const ref = useRef();
  const handler = () => {
    setToggle(!Toggle);

    console.log("you clicked me", Toggle);
  };

  return (
    <div className=" hidden md:flex justify-center md:w-auto cursor-pointer hover:shadow-lg rounded-full transition px-4 py-2  items-center text-center text-sm md:text-base font-bold ">
      <div className="">Welcome To Stay.</div>
      <div className="px-2 ">
        <AiOutlineMenu className="font-bold relative" onClick={handler} />

        <div className="aboslute">
          <ToggleMenu State={Toggle} />
        </div>

      </div>
      <div className="">
        <Avatar />
      </div>
    </div>
  );
};

export default Usermenu;
