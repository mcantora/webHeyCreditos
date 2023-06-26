import React from "react";

function HouseIcon({color="#57277e",size="3rem"}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}

      x="0"
      y="0"
      enableBackground="new 0 0 330 330"
      version="1.1"
      viewBox="0 0 330 330"
      xmlSpace="preserve"
    >
    <path
      fill={color}
      d="M325.606 179.387L250 103.787V40c0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15v33.789l-44.4-44.397c-5.857-5.857-15.355-5.857-21.212.001L4.393 179.388c-5.858 5.857-5.858 15.355 0 21.213a14.952 14.952 0 0010.606 4.394 14.95 14.95 0 0010.606-4.394L50 176.207V290c0 8.284 6.716 15 15 15h200c8.284 0 15-6.716 15-15V176.209l24.394 24.393c5.857 5.857 15.355 5.856 21.213-.001 5.858-5.859 5.857-15.356-.001-21.214zM150 275v-60h30v60h-30zm100 0h-40v-75c0-8.284-6.716-15-15-15h-60c-8.284 0-15 6.716-15 15v75H80V146.207l84.995-84.994L250 146.212V275z"
    ></path>
    </svg>
  );
}

export default HouseIcon;