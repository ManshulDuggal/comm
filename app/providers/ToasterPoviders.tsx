"use client";

import { FC } from "react";
import { Toaster } from "react-hot-toast";
interface ToasterPovidersProps {}

const ToasterPoviders: FC<ToasterPovidersProps> = ({}) => {
  //toaster is  a library and its not adjusted to app router. its a wrapper and need a client parent
  return <Toaster />;
};

export default ToasterPoviders;
