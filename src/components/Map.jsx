import React from "react";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";

function Map({lat, lng}) {
  return (
    <MapContainer
      style={{ width: "100vw", height: "100%" }}
      zoom={13}
      center={[lat, lng]}
      scrollWheelZoom={false}
      fadeAnimation={true}
      markerZoomAnimation={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lng]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
