import React from "react";

function IconMenu(props) {
  const { stroke } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      fill="none"
      viewBox="0 0 52 43"
      {...props}
    >
      <path
        stroke={stroke?stroke:"#A71E69"}
        strokeLinecap="round"
        strokeWidth="8"
        d="M4 4h43.5M4 21h23M4 39h43.5"
      ></path>
    </svg>
  );
}

export default IconMenu;
