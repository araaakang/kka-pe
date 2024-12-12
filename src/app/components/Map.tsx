'use client';

import React, { useEffect } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { PlaceInfoType } from '@/app/types/map';
import { Place } from '@/app/lib/definitions';

type MapProps = {
  onPlaceSelect: React.Dispatch<React.SetStateAction<PlaceInfoType>>;
};

export default function Map({ onPlaceSelect }: MapProps) {
  const searchBarRef = React.useRef<HTMLInputElement | null>(null);
  const mapRef = React.useRef<HTMLDivElement | null>(null);
  const mapInstance = React.useRef<google.maps.Map | null>(null);

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
        const { Autocomplete } = await loader.importLibrary('places');
        const taiwanGeoCenter = {
          lat: 23.9738842,
          lng: 120.9820168,
        };
        // map options
        const mapOptions: google.maps.MapOptions = {
          center: taiwanGeoCenter,
          zoom: 9,
          mapId: 'KKA_PE_MAP_ID',
        };

        // setup the map
        const map = new Map(mapRef.current as HTMLDivElement, mapOptions);
        mapInstance.current = map;
        setToCurrentPosition();

        // setup the search bar
        const searchBar = new Autocomplete(
          searchBarRef.current as HTMLInputElement,
          {
            types: ['cafe', 'restaurant'],
            bounds: {
              east: 122.0071613, // Easternmost Point of Taiwan
              west: 120.0360012, // Westernmost Point of Taiwan
              south: 21.8976373, // Southernmost Point of Taiwan
              north: 25.2996123, // Northernmost Point of Taiwan
            },
            strictBounds: true,
          }
        );
        searchBar.addListener('place_changed', function () {
          const place = searchBar.getPlace();
          console.log(place);
        });

        // Fetch places and create markers
        const service = new google.maps.places.PlacesService(map);
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

  const setToCurrentPosition = () => {
    if (!mapInstance.current) {
      console.error('Map instance is not initialized.');
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const currentPosition = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        mapInstance.current!.setCenter(currentPosition);
        mapInstance.current!.setZoom(16);
      },
      (error) => {
        console.error('Error getting current position:', error);
      }
    );
  };

  return (
    <>
      <input className="text-black" ref={searchBarRef} />
      <button
        className="absolute top-24 right-0 bg-black p-2 z-10"
        onClick={setToCurrentPosition}
      >
        回到我的位置
      </button>
      <div className="absolute top-0 right-0 w-1/2 h-screen bg-gray-200">
        <div
          style={{
            height: '100vh',
            width: '50vw',
          }}
          ref={mapRef}
        />
      </div>
    </>
  );
}
