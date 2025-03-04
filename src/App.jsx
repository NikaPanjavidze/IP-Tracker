import { useState } from "react";
import Header from "./components/Header";
import Map from "./components/Map";
import Tracker from "./components/Tracker";

export default function App() {
  const [data, setData] = useState();

  return (
    <div className="flex flex-col justify-end h-screen">
      <Tracker setData={setData} ipData={data} />
      <Header setData={setData} />
      {data?.location?.lat && data?.location?.lng && (
        <Map lat={data.location.lat} lng={data.location.lng} />
      )}
    </div>
  );
}
