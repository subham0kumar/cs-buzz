"use client";
import React, { useRef } from "react";
import { SLIDING_LANGUAGES } from "@/Constants/HeroConstants";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {};

const SlidingLanguages = (props: Props) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const scrollSlider = (direction: "left" | "right") => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: direction === "left" ? -200 : 200,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="bg-[#F1F1F1] flex justify-center items-center px-2 md:px-16 md:py-1">
      <button onClick={() => scrollSlider("left")}>
        <ChevronLeft color="#FBC108" />
      </button>
      <div
        ref={sliderRef}
        className="flex gap-3 py-2 mx-2 overflow-x-scroll scrollbar-hidden whitespace-nowrap sm:text-sm text-xs w-full sm:justify-center"
      >
        {SLIDING_LANGUAGES.map((lang, i) => (
          <div key={i} className="leading-4">
            {lang}
          </div>
        ))}
      </div>
      <button onClick={() => scrollSlider("right")}>
        <ChevronRight color="#FBC108" />
      </button>
    </div>
  );
};

export default SlidingLanguages;
