"use client";

import Image from "next/image";
import { FC } from "react";
import avatar from "../../public/avatar.png";
interface AvatarProps {}

const Avatar: FC<AvatarProps> = ({}) => {
  return (
    <div className="">
      <Image
        alt="user avatar"
        height={50}
        width={40}
        src={avatar}
        className="rounded-full"
      />
    </div>
  );
};

export default Avatar;
