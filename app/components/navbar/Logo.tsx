"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC } from "react";
import logo from "../../../public/logo.svg";

interface LogoProps {}

const Logo: FC<LogoProps> = ({}) => {
  const router = useRouter();

  return (
    <div>
      <Image
        alt="Logo"
        width={30}
        height={30}
        className="hidden md:block cursor-pointer"
        src={logo}
        loading="lazy"
      />
    </div>
  );
};

export default Logo;
