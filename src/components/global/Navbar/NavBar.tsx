import SlidingLanguages from "@/components/util/SlidingLanguages";
import { SIDEBAR_CATEGORIES2 } from "@/Constants/HeroConstants";
import { Search } from "lucide-react";
import MobileNav from "../MobileNav/MobileNav";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <>
      <nav className="hidden lg:flex justify-around gap-4 items-center py-5 px-10">
        <img src="./images/Logo.svg" alt="logo" width={"100px"} />
        <span className="w-1/4 rounded-full gap-2 bg-[#F1F1F1] px-5 py-3 drop-shadow flex items-center justify-start">
          <Search size={18} strokeWidth={1} color="#072F53" />
          <input
            type="text"
            className=" bg-transparent outline-none h-2/3 text-sm"
            placeholder="Search here..."
          />
        </span>
        <span className="rounded-full w-1/4 bg-[#F1F1F1] px-5 py-3 drop-shadow flex items-center gap-2 justify-around">
          {SIDEBAR_CATEGORIES2.map((category) => (
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
        <button className="font-bold flex items-center gap-2  py-1 px-4 border rounded-full bg-[#FBC108] hover:bg-[#072F53] hover:text-[#FBC108]">
          <h6 className="text-sm">Logout</h6>{" "}
          <img
            src="./images/LogoutIcon.svg"
            className="text-[#72B2FF] hover:text-[#FBC108]"
          />
        </button>
      </nav>
      <MobileNav />
      <SlidingLanguages />
    </>
  );
};

export default NavBar;
