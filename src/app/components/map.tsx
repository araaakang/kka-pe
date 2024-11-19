'use client';

import React, { useEffect } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

export default function Map() {
  const mapRef = React.useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const initMap = async () => {
      try {
        const loader = new Loader({
          apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
          version: 'weekly',
        });
        const { Map } = await loader.importLibrary('maps');
        const { AdvancedMarkerElement } = await loader.importLibrary('marker');
        const position = {
          lat: 24.998259,
          lng: 121.517034,
        };
        // map options
        const mapOptions: google.maps.MapOptions = {
          center: position,
          zoom: 9,
          mapId: 'KKA_PE_MAP_ID',
        };
        // setup the map
        const map = new Map(mapRef.current as HTMLDivElement, mapOptions);
        let currentPosition;
        navigator.geolocation.getCurrentPosition(function (position) {
          currentPosition = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          map.setCenter(currentPosition);
          map.setZoom(16);
        });
        // put up a marker
        const marker = new AdvancedMarkerElement({
          map,
          position,
          title: 'First coffee shop',
        });
      } catch (error) {
        console.error('Error loading Google Maps:', error);
      }
    };
    initMap();
  }, []);

  return (
    <div className="absolute top-0 right-0 w-1/2 h-screen bg-gray-200">
      <div
        style={{
          height: '100vh',
          width: '50vw',
        }}
        ref={mapRef}
      />
    </div>
  );
}
