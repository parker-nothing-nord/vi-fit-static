"use client";

import { useEffect, useRef } from "react";

interface MapProps {
  className?: string;
}

export default function Map({ className = "" }: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    const initMap = () => {
      // Vi Gym location: 895 Ellis St unit 2, Kelowna, BC V1Y 1Y8
      const gymLocation = { lat: 49.8880, lng: -119.4960 };

      const map = new google.maps.Map(mapRef.current!, {
        center: gymLocation,
        zoom: 16,
        styles: [
          {
            featureType: "poi",
            elementType: "labels",
            stylers: [{ visibility: "off" }],
          },
        ],
      });

      new google.maps.Marker({
        position: gymLocation,
        map: map,
        title: "Vi, Your Neighbourhood Gym",
      });

      mapInstanceRef.current = map;
    };

    // Check if Google Maps is already loaded
    if (window.google && window.google.maps) {
      initMap();
    } else {
      // Load Google Maps script with required libraries
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=marker&v=weekly`;
      script.async = true;
      script.defer = true;
      script.onload = initMap;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div
      ref={mapRef}
      className={`w-full h-[400px] md:h-[500px] rounded-lg ${className}`}
    />
  );
}

