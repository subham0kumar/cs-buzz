"use client";
import Closebutton from "@/components/util/Closebutton";
import { SIDEBAR_CATEGORIES } from "@/Constants/HeroConstants";
import { ChartNoAxesColumnDecreasing, LogOut, Search, X } from "lucide-react";
import { useState } from "react";

type Props = {};

const MobileNav = (props: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const [openSearch, setOpenSearch] = useState<boolean>(false);

  const sideBarToggle = () => {
    setOpen(!open);
  };

  // const handleSearchToggle = () => {
  //   setOpenSearch(!openSearch);
  // };

  return (
    <nav className="relative p-5 md:hidden block">
      <div className="flex justify-between gap-4 items-center">
        <span className={`${openSearch && "hidden"}`}>
          <img src="./images/Logo.svg" alt="logo" width={"78px"} />
        </span>

        {/* cursor-pointer bg-gradient-to-r from-[#e4b40d] to-[#e4b40d] bg-no-repeat  bg-[length:0%_3px] transition-all duration-200 tracking-wide ease-in hover:bg-[length:100%_3px] */}

        <button
          onClick={() => {
            setOpenSearch(true);
          }}
          className={`${
            openSearch ? "w-full px-2 py-1 drop-shadow" : "w-auto p-2"
          } rounded-full  bg-[#F1F1F1]`}
        >
          <span className="flex items-center justify-around">
            <Search size={18} strokeWidth={1} color="#072F53" />
            <input
              type="text"
              className={`${
                !openSearch && "hidden"
              } bg-transparent outline-none h-2/3 text-sm`}
              placeholder="Search here..."
            />
          </span>
        </button>
        <Closebutton
          className={`${!openSearch && "hidden"}`}
          byClick={() => setOpenSearch(false)}
        />
        <button className={`${openSearch && "hidden"}`} onClick={sideBarToggle}>
          <ChartNoAxesColumnDecreasing
            size={30}
            className={`-rotate-90 ${open && "hidden"}`}
            color="#072F53"
          />
        </button>
      </div>

      {/*<--------------- Sidebar ---------------->  */}
      <div
        className={`absolute top-0 left-0  bg-background w-72 h-[100vh] overflow-hidden ${
          open
            ? "translate-x-0 drop-shadow-2xl shadow-2xl"
            : "-translate-x-full"
        } transition duration-150 ease-in-out`}
      >
        <img
          src="./images/conCircleBg.svg"
          alt="conCircleBg"
          className="absolute -z-20 top-0 left-0 opacity-5"
        />
        <div className="h-full my-10 mx-5">
          <Closebutton byClick={sideBarToggle} />
          <div className="flex mt-6 gap-2 items-center justify-between">
            <span className="bg-[#072F53] w-12 h-12 rounded-full" />
            <span className="flex flex-col">
              <h2 className="text-sm font-bold">Olivia Rhye</h2>
              <h3 className="text-xs">example@gmail.com</h3>
            </span>
          </div>
          <div className="mt-10 flex flex-col gap-8">
            {SIDEBAR_CATEGORIES.map((category, i) => (
              <h1
                key={i}
                className="border-b px-3 text-base leading-6 font-normal"
              >
                {category}
              </h1>
            ))}
          </div>
          <button className="font-bold flex items-center gap-2 my-10 py-1 px-4 border rounded-full bg-[#FBC108]">
            <h6 className="text-sm">Logout</h6>{" "}
            <img src="./images/LogoutIcon.svg" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
