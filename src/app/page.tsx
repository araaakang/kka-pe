import Script from 'next/script';

export default function Home() {
  return (
    <div className="min-h-screen p-8 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 items-center sm:items-start">
        <div className="flex justify-between fixed top-10 left-0 px-8 w-full z-10">
          <h1 className="text-4xl font-extrabold">KKA-PE</h1>
          <span className="text-4xl font-extrabold">?</span>
        </div>
      </main>
      <Script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyACloyFqZHDGRy5RwasW3unXxQ5EbdaPa0&loading=async&libraries=places&callback=initMap" />
    </div>
  );
}
