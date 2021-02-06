import React from "react";
import "../styles/custom.css";
import head from "../canes.png";

export default function Header() {
  return (
    <div
      className="w-full bg-cover bg-center"
      style={{ backgroundImage: "url(" + head + ")", height: 32 + "rem" }}
    >
      <div className="flex items-center justify-center h-full w-full">
        <div className="text-center">
          <h1 className="text-white text-7xl header-text md:text-9xl">
            SubTheSlaw
          </h1>
        </div>
      </div>
    </div>
  );
}
