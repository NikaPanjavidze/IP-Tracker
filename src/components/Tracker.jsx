import React, { useEffect } from "react";

const apiKey = import.meta.env.VITE_API_KEY;

function Tracker({ setData, ipData }) {
  
  useEffect(() => {
    async function setIp() {
      const response = await fetch(
        `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=`
      );
      const data = await response.json();
      setData(data);
    }

    setIp();
  }, [setData]);

  console.log(ipData);

  return (
    <div className="absolute top-2/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-1000">
      <div className="bg-white text-neutral-800  flex py-4 md:py-12 rounded-2xl flex-col px-18 items-center text-center md:flex-row md:px-0">
        <div className="md:border-r-1 border-neutral-300 md:pr-15 md:pl-5">
          <h2 className="text-neutral-500 font-bold text-sm">IP ADDRESS</h2>
          <p className=" font-bold text-md md:text-2xl">{ipData?.ip}</p>
        </div>
        <div className=" md:border-r-1 border-neutral-300 md:pr-15 md:pl-5">
          <h2 className=" text-neutral-500 font-bold text-sm">LOCATION</h2>
          <p className="font-bold text-md md:text-2xl">
            {ipData?.location?.region}, {ipData?.location?.city}
          </p>
        </div>
        <div className=" md:border-r-1 border-neutral-300 md:pr-15 md:pl-5">
          <h2 className="text-neutral-500 font-bold text-sm">TIMEZONE</h2>
          <p className="font-bold text-md md:text-2xl">
            {ipData?.location?.timezone}
          </p>
        </div>
        <div className="md:pr-15 md:pl-5">
          <h2 className="text-neutral-500 font-bold text-sm">ISP</h2>
          <p className="font-bold text-md md:text-2xl ]">{ipData?.isp}</p>
        </div>
      </div>
    </div>
  );
}

export default Tracker;
