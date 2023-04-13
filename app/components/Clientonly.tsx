"use client";

import  { FC, useState, useEffect } from "react";

interface ClientonlyProps {
  children: React.ReactNode;
}

const Clientonly: FC<ClientonlyProps> = ({ children }) => {
  const [mounted, SetMounted] = useState(false);

  useEffect(() => {
    SetMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return <>{children}</>;
};

export default Clientonly;
