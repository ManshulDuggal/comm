"use client";

import { FC } from "react";
import useRegisterModel from "@/app/hooks/useRegisterModel";
interface ToggleProps {
  Option?: String;
  isOpen?: () => void;
}

const ToggleMenu: FC<ToggleProps> = ({ isOpen, Option }) => {
  const ToggleMenu = useRegisterModel();
  return (
    <div>
      <div className="absolute z-25 p-2 bg-white w-40 overflow-y-scroll flex flex-col rounded-xl shadow-2xl  my-5 right-11">
        <button onClick={ToggleMenu.onOpen}>LogIn</button>
        <button>LogOut</button>
      </div>
    </div>
  );
};

export default ToggleMenu;
