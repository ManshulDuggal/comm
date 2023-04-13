"use client";
import { FC, useState } from "react";
import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import Usermenu from "./Usermenu";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  const [Selected, setSelected] = useState<Number>(2);

  const handleTab = (index: Number) => {
    setSelected(index);
    console.log(index);
  };

  return (
    <nav className="z-10 shadow-sm">
      <Container>
        <Logo />

        <Search />
        <Usermenu />
      </Container>
    </nav>
  );
};

export default Navbar;
