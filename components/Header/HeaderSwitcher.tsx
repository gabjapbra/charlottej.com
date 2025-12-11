"use client"

import HeaderSmartphone from "./HeaderSmartphone";
import HeaderDesktop from "./HeaderDesktop";

export default function HeaderSwitcher() {
  return (
    <>
      {/* Smartphone */}
      <div className="block lg:hidden">
        <HeaderSmartphone />
      </div>
      {/* Desktop */}
      <div className="hidden lg:block">
        <HeaderDesktop />
      </div>
    </>
  );
}