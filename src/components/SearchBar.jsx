import React, { useState } from "react";
import Arrow from "../images/icon-arrow.svg";

const domainRegex = /^(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;
const apiKey = import.meta.env.VITE_API_KEY;

function SearchBar({ setData }) {
  const [inputValue, setInputValue] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const ip = inputValue.trim();

    if (!ip) {
      return;
    }

    const isDomain = domainRegex.test(ip);

    try {
      const response = await fetch(
        `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}${
          isDomain ? "&domain=" + ip : "&ipAddress=" + ip
        }`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form
      className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex md:top-1/2"
      onSubmit={handleSubmit}
      method="GET"
    >
      <input
        name="searchInput"
        id="searchInput"
        placeholder="Search for any IP address or domain"
        type="text"
        className="text-black font-medium text-sm bg-white p-4 w-xs rounded-xl rounded-tr-none rounded-br-none md:w-xl md:text-lg"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="p-4 bg-black text-white rounded-xl rounded-bl-none rounded-tl-none w-1/8 flex justify-center items-center hover:cursor-pointer hover:bg-neutral-800 active:bg-neutral-700 md:w-1/10">
        <img src={Arrow} alt="search icon" className="w-[16px] h-[16px]" />
      </button>
    </form>
  );
}

export default SearchBar;
