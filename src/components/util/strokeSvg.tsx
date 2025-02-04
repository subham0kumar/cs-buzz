import React from "react";

type Props = {
  className: string;
};

const StrokeSvg = ({ className }: Props) => {
  return (
    <svg
      width="133"
      height="6"
      viewBox="0 0 133 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M1 5C52.1587 -0.194758 80.8413 -0.470132 132 5"
        stroke="#FBC108"
        strokeWidth="2"
      />
    </svg>
  );
};

export default StrokeSvg;
