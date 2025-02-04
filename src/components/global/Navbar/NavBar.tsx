import React from "react";
import MobileNav from "../MobileNav/MobileNav";
import SlidingLanguages from "@/components/util/SlidingLanguages";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <div>
      <MobileNav />
      <SlidingLanguages />
    </div>
  );
};

export default NavBar;
