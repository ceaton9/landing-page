import React from "react";

interface ButtonProps {
  primary?: boolean;
  children: string;
}

export default function Button(props: ButtonProps) {
  return (
    <button
      className={`text-white font-medium text-base py-5 px-7 ${
        props.primary
          ? "bg-gradient"
          : "border-white border-2 hover:bg-white hover:text-black transition duration-150 ease-out hover:ease-in"
      }`}
    >
      {props.children}
    </button>
  );
}
