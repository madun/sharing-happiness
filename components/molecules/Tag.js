import React from "react";
import { CheckIcon } from "../atoms/Icons";

export default function Tag({ active, data, onClick, image, ...props }) {
  const baseTag =
    "flex items-center relative rounded shadow px-4 py-2 text-sm cursor-pointer m-2 transform transition-all duration-300 hover:scale-95";
  const activeTag = "text-white bg-red-500 scale-95";
  const defaultTag = "text-gray-700 bg-gray-300 scale-100";

  return (
    <div
      className={
        active
          ? [baseTag, activeTag].join(" ")
          : [baseTag, defaultTag].join(" ")
      }
      onClick={() => onClick(data)}
      {...props}
    >
      {image && <img src={image} className="h-6 w-6 mr-2" />}
      <span>{data.title}</span>
      {active && (
        <div className="absolute" style={{ top: -5, right: -10 }}>
          <div className="rounded-full bg-teal-500 w-6 h-6 text-center">
            <CheckIcon style={{ width: 16, height: 16, color: "white" }} />
          </div>
        </div>
      )}
    </div>
  );
}
