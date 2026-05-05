"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix marker icons for Leaflet in Next.js
const customIcon = L.divIcon({
  html: `<div style="width:18px;height:18px;background:#ffe600;box-shadow:0 0 12px #ff1f3d, 0 0 24px #ff1f3d;border:2px solid #ff1f3d;transform:rotate(45deg);"></div>`,
  className: "auktave-marker",
  iconSize: [18, 18],
  iconAnchor: [9, 9]
});

export default function MapView() {
  const position = [22.596922372979076, 88.4875113527537]; // Amity University Kolkata - Major Arterial Road, New Town
  const coordsText = "22.596922372979076, 88.4875113527537";
  return (
    <MapContainer
      center={position}
      zoom={14}
      scrollWheelZoom={false}
      attributionControl={false}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution=""
        url="https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png"
      />
      <Marker position={position} icon={customIcon}>
        <Popup>
          <strong>AUKTAVE 2K26</strong><br />
          Amity University Kolkata<br />
          New Town, Kolkata<br />
          Lat, Lng: {coordsText}
        </Popup>
      </Marker>
    </MapContainer>
  );
}
