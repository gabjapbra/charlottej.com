"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/*DESKTOP*/}
      <div className="hidden lg:flex w-full h-screen flex-col bg-white">
        <div className="flex-1 items-center justify-center flex">
          <div className="
              max-h-full max-w-full flex flex-col
              items-end mr-[275px]">
              <Image
                src="/accueil.webp"
                alt="Présentation"
                width={1200}
                height={800}
                className="object-contain max-h-[90vh] w-auto"
                sizes="100vw"
              />
            <p className="mt-2 text-xs text-neutral-700 whitespace-nowrap text-right">
              RÉFLEXIONS, photographie sur verre, 60x42cm, 2025.
            </p>
          </div>
        </div>
      </div>
      {/*SMARTPHONE*/}
      <div className="lg:hidden bg-[url('/accueil.webp')] bg-cover bg-center bg-no-repeat w-full h-screen"></div>
    </main>
  );
}
