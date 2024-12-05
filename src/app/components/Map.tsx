'use client';

import React, { useEffect } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { PlaceInfoType } from '@/app/types/map';
import { Place } from '@/app/lib/definitions';

type MapProps = {
  onPlaceSelect: React.Dispatch<React.SetStateAction<PlaceInfoType>>;
};

export default function Map({ onPlaceSelect }: MapProps) {
  const mapRef = React.useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const initMap = async () => {
      try {
        const loader = new Loader({
          apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
          version: 'weekly',
          libraries: ['places'],
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
        const service = new google.maps.places.PlacesService(map);
        let currentPosition;
        navigator.geolocation.getCurrentPosition(function (position) {
          currentPosition = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          map.setCenter(currentPosition);
          map.setZoom(16);
        });
        // Create marker for each coffee shop
        const response = await fetch('/api/places');
        const placesData = await response.json();
        placesData.forEach((shop: Place) => {
          const position = {
            lat: shop.lat,
            lng: shop.lng,
          };
          const marker = new AdvancedMarkerElement({
            map,
            position,
            title: shop.name,
          });
          marker.addListener('click', () => {
            // query by shop name to get place_id
            service.findPlaceFromQuery(
              {
                query: shop.name,
                fields: ['place_id'],
              },
              (results, status) => {
                if (
                  results &&
                  status === google.maps.places.PlacesServiceStatus.OK &&
                  results.length > 0
                ) {
                  const placeId = results[0].place_id as string;
                  // use place_id to get place info
                  const request = {
                    placeId: placeId,
                    fields: [
                      'name',
                      'opening_hours',
                      'formatted_address',
                      'formatted_phone_number',
                      'rating',
                      'website',
                    ],
                  };
                  service.getDetails(request, (place, status) => {
                    if (
                      status === google.maps.places.PlacesServiceStatus.OK &&
                      place
                    ) {
                      const filteredPlaceInfo = {
                        name: place.name,
                        open_now: place.opening_hours?.open_now,
                        formatted_address: place.formatted_address,
                        formatted_phone_number: place.formatted_phone_number,
                        rating: place.rating,
                        website: place.website,
                      };
                      onPlaceSelect(filteredPlaceInfo);
                      console.log('place info:', place);
                    } else {
                      console.error('Failed to get place info:', status);
                    }
                  });
                } else {
                  console.error('Failed to find place:', status);
                }
              }
            );
            map.setCenter(position);
            map.setZoom(20);
          });
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
