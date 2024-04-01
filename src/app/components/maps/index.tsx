"use client";

import React, { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

export default function Location() {
  useEffect(() => {
    var greenIcon = L.icon({
      iconUrl: "einstein.png",

      iconSize: [38, 38],
      iconAnchor: [22, 94],
      shadowAnchor: [4, 62],
      popupAnchor: [-3, -76],
    });
    const map = L.map("map").setView([-23.6002357, -46.7168608], 17);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      // attribution: "© OpenStreetMap",
    }).addTo(map);

    L.marker([-23.6, -46.715])
      .addTo(map)
      .setIcon(greenIcon)
      .bindPopup("<b>Hospital Albert Einstein!</b>")
      .openPopup();

    return () => {
      map.remove();
    };
  }, []);

  return (
    <section className="w-full flex justify-center">
      <div id="map" className="w-full h-[300px] sm:h-[450px]"></div>
    </section>
  );
}
