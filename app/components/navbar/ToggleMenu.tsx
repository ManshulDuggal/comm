"use client";

import { FC } from "react";

interface ToggleProps {
  Option?: String;
  State: React.ComponentState;
}

const ToggleMenu: FC<ToggleProps> = ({ State , Option }) => {
  return (
    <div>
      {State ? (
        <div className="absolute z-25 p-2 bg-white w-40 overflow-y-scroll  rounded-xl shadow-2xl  my-5 right-11">
          <h1>LogIn</h1>
          <h1>SignOut</h1>
        </div>
      ) : null}
    </div>
  );
};

export default ToggleMenu;
