import React from "react";
import { ThumbUpIcon } from "../atoms/Icons";

export default function Card(props) {
  if (props.size === "lg") {
    return (
      <div
        className="block rounded-lg relative transform transition-all duration-300 scale-100 hover:scale-95"
        style={{
          background: `url(${props.background})`,
          backgroundPosition: "left",
          backgroundSize: "cover",
        }}
      >
        {props.badge && (
          <div className="absolute top-0 right-0 -mt-3 mr-3">
            <div className="rounded-full bg-teal-400 text-white text-xs py-1 pl-2 pr-3 leading-none">
              {/* <Whatshot style={{ height: 16, width: 16, marginRight: 4 }} /> */}
              {props.badgeicon}
              <span className="ml-2 align-middle">{props.badge}</span>
            </div>
          </div>
        )}
        <div className="h-48"></div>
        <div className="p-5">
          <h2 className="text-white text-2xl font-bold leading-tight mb-3 pr-5">
            {props.title}
          </h2>
          <div className="flex w-full items-center text-sm text-gray-300 font-medium">
            <div className="flex-1 flex items-center">
              <div
                className="rounded-full w-8 h-8 mr-3"
                style={{
                  background: `url(${props.avatar})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div>{props.avatarname}</div>
            </div>
            {props.countliked && (
              <div>
                <ThumbUpIcon
                  style={{ height: 18, width: 18, marginRight: 4 }}
                />{" "}
                <span>{props.countliked}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
