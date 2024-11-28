'use client';

import Script from 'next/script';
import Map from '@/app/components/Map';
import InfoCard from '@/app/components/InfoCard';
import { useState } from 'react';
import { PlaceInfoType } from '@/app/types/map';

export default function Home() {
  const apiKey = process.env.NEXT_PUBLIC_MAPS_API_KEY;
  const [placeInfo, setPlaceInfo] = useState<PlaceInfoType>({});

  return (
    <div className="min-h-screen p-8 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 items-center sm:items-start">
        <div className="flex justify-between fixed top-10 left-0 px-8 w-full z-10">
          <h1 className="text-4xl font-extrabold">KKA-PE</h1>
          <span className="text-4xl font-extrabold">?</span>
        </div>
        <InfoCard info={placeInfo} />
        <Map onPlaceSelect={setPlaceInfo} />
      </main>
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=${apiKey}&loading=async&libraries=places&callback=initMap&libraries=marker`}
      />
    </div>
  );
}
