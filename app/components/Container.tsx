"use client";

import { FC } from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div className="flex justify-between w-full solid border-b-2 sm:px-2 md:px-16 lg:px-20 md:py-3 bg-slate-100/20  gap-5 items-center text-black">
      {children}
    </div>
  );
};

export default Container;
