import React from "react";

interface IHeart {
  size: number;
  filled: boolean;
}

const Heart = ({ size, filled }: IHeart) => {
  const fill = filled ? "#d32424" : "none";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.0938 5.01172C5.86581 5.01172 3.02734 8.43396 3.02734 12.6602C3.02734 17.4558 9.72721 23.1855 15.4688 27.0117C21.2103 23.1855 27.8327 17.3634 27.9102 12.6602C27.9798 8.43456 25.2436 5.01172 21.0156 5.01172C19.2119 5.01172 17.3826 5.96591 15.4688 7.87891C13.5549 5.96591 11.8975 5.01172 10.0938 5.01172Z"
        stroke={filled ? "none" : "white"}
      />
    </svg>
  );
};

Heart.defaultProps = {
  size: 32,
  filled: false,
};

export default Heart;
