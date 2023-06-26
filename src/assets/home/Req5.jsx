import React from "react";

export default function Req1(props) {
  return (
  <svg
    height={props.height}
    viewBox="10 10 85 85"
    fill="#E32385"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M69.2065 27.5208L69.019 27.375C68.6585 24.6375 67.3481 21.7854 65.3023 19.3813C61.9794 15.475 56.5627 12.5 49.3127 12.5C42.1669 12.5 37.1314 15.7583 34.1606 19.7979C32.7749 21.6667 31.7846 23.7982 31.2502 26.0625C31.1529 26.4865 31.0751 26.9147 31.0169 27.3458L30.7919 27.5187C28.4502 29.3333 26.7314 31.5333 27.1398 34.0562C27.5314 36.4937 29.7356 37.9771 31.7856 38.8833C32.3064 39.1146 32.8689 39.3312 33.4669 39.5333C33.1656 41.8818 33.3683 44.2675 34.0613 46.5316C34.7543 48.7956 35.9217 50.8861 37.4858 52.6636C39.0499 54.4411 40.9748 55.865 43.1323 56.8404C45.2898 57.8158 47.6304 58.3203 49.9981 58.3203C52.3658 58.3203 54.7064 57.8158 56.8639 56.8404C59.0214 55.865 60.9463 54.4411 62.5104 52.6636C64.0745 50.8861 65.242 48.7956 65.935 46.5316C66.6279 44.2675 66.8306 41.8818 66.5294 39.5333C67.1273 39.3312 67.6898 39.1167 68.2106 38.8833C70.2606 37.9771 72.4627 36.4937 72.8564 34.0562C73.2648 31.5333 71.546 29.3333 69.2044 27.5187L69.2065 27.5208ZM35.3023 30.5667C35.0314 29.7875 34.9606 28.5354 35.3127 26.9875C35.6585 25.4771 36.3752 23.8208 37.5002 22.2875V28.125C37.5002 28.6775 37.7197 29.2074 38.1104 29.5981C38.5011 29.9888 39.031 30.2083 39.5835 30.2083C40.1361 30.2083 40.666 29.9888 41.0567 29.5981C41.4474 29.2074 41.6669 28.6775 41.6669 28.125V18.5625C43.3814 17.5875 45.4544 16.9062 47.9169 16.7187V23.9583C47.9169 24.5109 48.1364 25.0408 48.5271 25.4315C48.9178 25.8222 49.4477 26.0417 50.0002 26.0417C50.5527 26.0417 51.0826 25.8222 51.4733 25.4315C51.864 25.0408 52.0835 24.5109 52.0835 23.9583V16.8479C54.2835 17.1252 56.4072 17.8331 58.3335 18.9312V28.125C58.3335 28.6775 58.553 29.2074 58.9437 29.5981C59.3344 29.9888 59.8643 30.2083 60.4169 30.2083C60.9694 30.2083 61.4993 29.9888 61.89 29.5981C62.2807 29.2074 62.5002 28.6775 62.5002 28.125V22.5375C64.8023 25.4875 65.3419 28.6708 64.6939 30.5812C64.5334 31.0541 64.5481 31.5688 64.7353 32.0318C64.9224 32.4947 65.2696 32.875 65.7136 33.1034C66.1576 33.3319 66.6689 33.3933 67.1544 33.2764C67.6398 33.1595 68.0671 32.8722 68.3585 32.4667C68.7689 33.0396 68.7544 33.3437 68.746 33.3917C68.7189 33.5583 68.4002 34.2458 66.5273 35.075C65.7148 35.4333 64.7481 35.7562 63.6627 36.0417L63.6127 36.0542C62.4356 36.3583 61.1252 36.6167 59.7231 36.8292C57.1227 37.2041 54.5019 37.4198 51.8752 37.475C50.0695 37.5201 48.2628 37.5007 46.4585 37.4167C44.3832 37.3238 42.3139 37.1263 40.2585 36.825C38.9557 36.6358 37.6636 36.3785 36.3877 36.0542L36.3377 36.0417C35.3588 35.7955 34.401 35.4723 33.4731 35.075C31.6002 34.2458 31.2814 33.5583 31.2544 33.3917C31.246 33.3437 31.2314 33.0396 31.6419 32.4667C31.9337 32.874 32.3627 33.1625 32.85 33.2792C33.3373 33.396 33.8504 33.3331 34.2951 33.1023C34.7399 32.8714 35.0865 32.488 35.2715 32.0223C35.4565 31.5566 35.4674 31.0398 35.3023 30.5667ZM37.546 40.5854C38.2377 40.7208 38.9544 40.8438 39.6877 40.9542C41.9127 41.2875 44.3085 41.5 46.746 41.6C48.9187 41.6893 51.0942 41.6893 53.2669 41.6C55.6919 41.5 58.0794 41.2875 60.2939 40.9542C61.017 40.8489 61.7373 40.7259 62.4544 40.5854C62.6025 42.3107 62.3906 44.048 61.832 45.6871C61.2734 47.3262 60.3803 48.8314 59.2094 50.1071C58.0385 51.3829 56.6152 52.4015 55.0299 53.0983C53.4446 53.7951 51.7319 54.1549 50.0002 54.1549C48.2685 54.1549 46.5557 53.7951 44.9705 53.0983C43.3852 52.4015 41.9619 51.3829 40.791 50.1071C39.6201 48.8314 38.727 47.3262 38.1684 45.6871C37.6098 44.048 37.3979 42.3107 37.546 40.5854Z"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M60.4167 59.354C61.7875 59.5936 63.1833 59.8728 64.5833 60.1915C75.9229 62.7811 87.5 67.9582 87.5 74.9998V87.4998H12.5V74.9998C12.5 67.9582 24.0771 62.7811 35.4167 60.1915C36.7982 59.8767 38.1875 59.5974 39.5833 59.354V68.7498H60.4167V59.354ZM31.25 65.604C32.6125 65.1873 34.0104 64.8103 35.4167 64.4707V72.9165H64.5833V64.4728C66.6937 64.9777 68.7793 65.5812 70.8333 66.2811V83.3332H75V67.9103C75.6042 68.179 76.1875 68.4561 76.7458 68.7415C79.1146 69.9457 80.8708 71.1873 81.9833 72.3748C83.0771 73.5415 83.3333 74.4019 83.3333 74.9998V83.3332H16.6667V74.9998C16.6667 74.4019 16.9229 73.5415 18.0167 72.3748C19.1292 71.1873 20.8854 69.9457 23.2542 68.7415C24.4396 68.1373 25.725 67.5707 27.0833 67.0436V83.3332H31.25V65.6061V65.604Z"/>
</svg>
  )
};