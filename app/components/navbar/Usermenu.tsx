"use client";
import { FC, useCallback, useRef, useState } from "react";

interface UsermenuProps {}

import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";

import ToggleMenu from "./ToggleMenu";
import { cursorTo } from "readline";
import { Ref } from "react";
const Usermenu: FC<UsermenuProps> = ({}) => {
  const [open, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);
  const ref = useRef();
  const handler = () => {
    setIsOpen(!open);

    console.log("you clicked me", open);
  };

  return (
    <div className=" hidden md:flex justify-center md:w-auto cursor-pointer hover:shadow-lg rounded-full transition px-4 py-2  items-center text-center text-sm md:text-base font-bold ">
      <div className="">Welcome To Stay.</div>
      <div className="px-2 ">
        <AiOutlineMenu className="font-bold relative" onClick={handler} />

        <div onClick={toggleOpen} className="aboslute">
          {open && <ToggleMenu  />}
        </div>
      </div>

      <div className="">
        <Avatar />
      </div>
    </div>
  );
};

export default Usermenu;
