import { X } from "lucide-react";
import React from "react";

type Props = {
  byClick: () => void;
  className?: string;
};

const Closebutton = ({ byClick, className }: Props) => {
  return (
    <button className={`${className} h-8 w-8 p-1 rounded-full bg-[#F1F1F1]`}>
      <X strokeWidth={1} onClick={byClick} />
    </button>
  );
};

export default Closebutton;
