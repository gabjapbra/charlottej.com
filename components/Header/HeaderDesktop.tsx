import Link from "next/link";
import Image from "next/image";

export default function HeaderDesktop() {

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
    <header className="sticky top-0 left-0 w-[275px] min-h-screen bg-white flex flex-col p-10 z-30">
      {/* Logo */}
      <h1 className="text-3xl mb-10">
        <Link href="/">
          Charlotte<br />
          Jeanningros
        </Link>
      </h1>

      {/* Menu centré */}
      <nav className="flex-1 flex flex-col justify-center space-y-5 text-md font-light tracking-wide">
        {menuItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="capitalize hover:translate-x-2 transition-transform duration-200"
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Footer - icônes uniquement */}
      <div className="mt-10 flex space-x-8">

        {/* Email */}
        <div className="relative group inline-block">
          <Link href="mailto:charlottejeanningros@yahoo.com">
            <Image
              className="hover:scale-120 transition-transform duration-200"
              src="/icons/mail.webp"
              alt="Email"
              width={36}
              height={36}
            />
          </Link>
          <div
            className="
              absolute -top-10
              text-black text-xs
              whitespace-nowrap
              opacity-0 group-hover:opacity-100 transition-opacity duration-200
              pointer-events-none
            "
          >
            charlottejeanningros@yahoo.com
          </div>
        </div>

        {/* Instagram */}
        <div className="relative group inline-block">
          <Link
            href="https://www.instagram.com/charlotte.jeanningros/?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="hover:scale-120 transition-transform duration-200"
              src="/icons/insta.webp"
              alt="Instagram"
              width={36}
              height={36}
            />
          </Link>
          <div
            className="
              absolute left-0 -translate-x-17 -top-10
              text-black text-xs 
              whitespace-nowrap
              opacity-0 group-hover:opacity-100 transition-opacity duration-200
              pointer-events-none
            "
          >
            @charlotte.jeanningros
          </div>
        </div>

        {/* Téléphone */}
        <div className="relative group inline-block">
          <Link href="tel:+33787244657">
            <Image
              className="hover:scale-120 transition-transform duration-200"
              src="/icons/phone.webp"
              alt="Téléphone"
              width={36}
              height={36}
            />
          </Link>
          <div
            className="
              absolute right-18 -top-10
              text-black text-xs 
              whitespace-nowrap
              opacity-0 group-hover:opacity-100 transition-opacity duration-200
              pointer-events-none
            "
          >
            +33 7 87 24 46 57
          </div>
        </div>

      </div>
    </header>
  );
}
