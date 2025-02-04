import React from "react";
import MobileNav from "../MobileNav/MobileNav";
import SlidingLanguages from "@/components/util/SlidingLanguages";
import { Search } from "lucide-react";
import { SIDEBAR_CATEGORIES } from "@/Constants/HeroConstants";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <div>
      <div className="flex justify-between gap-4 items-center p-5">
        <img src="./images/Logo.svg" alt="logo" width={"78px"} />
        <span className="rounded-full gap-2 bg-[#F1F1F1] px-2 py-1 drop-shadow flex items-center justify-around">
          <Search size={18} strokeWidth={1} color="#072F53" />
          <input
            type="text"
            className=" bg-transparent outline-none h-2/3 text-sm"
            placeholder="Search here..."
          />
        </span>
        <span className="rounded-full  bg-[#F1F1F1] px-2 py-1 drop-shadow flex items-center gap-2 justify-around">
          {SIDEBAR_CATEGORIES.map((category) => (
            <a
              key={category}
              href={`#${category}`}
              className="text-sm font-bold text-[#072F53] hover:text-[#FBC108] cursor-pointer"
            >
              {" "}
              {category}
            </a>
          ))}
        </span>
        <button className="font-bold flex items-center gap-2  py-1 px-4 border rounded-full bg-[#FBC108]">
          <h6 className="text-sm">Logout</h6>{" "}
          <img src="./images/LogoutIcon.svg" />
        </button>
      </div>
      <MobileNav />
      <SlidingLanguages />
    </div>
  );
};

export default NavBar;
