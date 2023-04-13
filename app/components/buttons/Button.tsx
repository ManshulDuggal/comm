"use client";
import React, { FC } from "react";
import { IconType } from "react-icons/lib";

interface ButtonProps {
  //this was passed from the model initially
  //   mouseevents such as click
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  label: string;
  small?: boolean;
  icon?: IconType;
}

const Button: FC<ButtonProps> = ({
  onClick,
  label,
  disabled,
  icon,
  outline,
  small,
}) => {
  return (
    <>
      <button
        onClick={onClick}
        disabled={disabled}
        className={`disabled:cursor-not-allowed disabled:opacity-25 text-white w-full p-1 md:p-2  hover:opacity-70 transition-all duration-100 ${
          outline ? "border-2 hover:opacity-40 transition-all duration-100 text-white border-black bg-secondrycolor " : ""
        }
        ${small ? "py-1 font-light" : "text-sm "}
        bg-primarycolor rounded-md`}
      >
        {label}
      </button>
    </>
  );
};

export default Button;
