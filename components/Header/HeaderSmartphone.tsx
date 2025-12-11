"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function HeaderSmartphone() {
  const [isOpen, setIsOpen] = useState(false);

const menuItems = [
  { label: "news", href: "/news" },
  { label: "artist", href: "/artist" },
  { label: "moving images", href: "/movingImages" },
  { label: "almost documentary", href: "/almostDocumentary" },
  { label: "new shapes", href: "/newShape" },
  { label: "second skin", href: "/secondSkin" },
  { label: "it sticks", href: "/itSticks" },
];

  return (
    <header className="w-full h-18 
                      bg-white 
                      flex items-center justify-between 
                      p-6">
      {/* Logo */}
      <h1 className="text-xl uppercase">
        <Link href="/">
          Charlotte<br />
          Jeanningros
        </Link>
      </h1>

      {/* Hamburger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-col justify-between w-8 h-5 focus:outline-none"
      >
        <span
          className={`block h-[3px] w-full bg-black rounded transition-transform duration-300 ease-in-out origin-center ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`block h-[3px] w-full bg-black rounded transition-opacity duration-20 ease-in-out ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`block h-[3px] w-full bg-black rounded transition-transform duration-300 ease-in-out origin-center ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      {/* Menu overlay */}
      {isOpen && (
        <div className="absolute top-18 left-0 w-full bg-white  border-b-2 border-black flex flex-col pt-4 pr-6 pl-6 space-y-4 z-36">
          {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-md font-light tracking-wide capitalize"
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </Link>
          ))}

          {/* Footer */}
          <div className="flex justify-between p-6">
            <Link href="mailto:charlottejeanningros@yahoo.com">
              <Image
                src="/icons/mail.webp"
                alt=""
                width={36}
                height={36}>
              </Image>
            </Link>
            <Link href="https://www.instagram.com/charlotte.jeanningros/?hl=fr">
              <Image
                src="/icons/insta.webp"
                alt=""
                width={36}
                height={36}>
              </Image>
            </Link>
            <Link href="tel:+33787244657">
              <Image
                src="/icons/phone.webp"
                alt=""
                width={36}
                height={36}>
              </Image>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
