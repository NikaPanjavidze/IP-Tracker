import React from "react";
import BackgroundDesktop from "../images/pattern-bg-desktop.png";
import BackgroundMobile from "../images/pattern-bg-mobile.png";
import SearchBar from "./SearchBar";

function Header({ setData }) {
  return (
    <div className="relative w-full">
      {/* Desktop Background */}
      <img
        src={BackgroundDesktop}
        className="hidden sm:block w-full h-auto"
        alt="desktop background"
      />
      {/* Mobile Background */}
      <img
        src={BackgroundMobile}
        className="block sm:hidden w-full h-auto"
        alt="mobile background"
      />
      <h1 className="absolute top-1/8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl font-bold md:text-4xl md:top-1/8">
        IP Address Tracker
      </h1>
      <SearchBar setData={setData} />
    </div>
  );
}

export default Header;
