"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function PageLogo() {
  const pathname = usePathname();
  
  // Don't show on home page (it has the hero with logo)
  if (pathname === "/") {
    return null;
  }

  return (
    <div className="absolute top-6 left-6 md:top-12 md:left-12 lg:top-12 lg:left-12 z-50">
      <Link href="/" className="flex items-center gap-4 md:gap-6 lg:gap-8 hover:opacity-80 transition-opacity">
        <Image
          src="/icon.png"
          alt="Vi Gym Logo"
          width={208}
          height={208}
          className="w-20 h-20 md:w-32 md:h-32 lg:w-44 lg:h-44"
          unoptimized
        />
        <div className="text-left">
          <div className="text-text-dark text-sm md:text-2xl lg:text-3xl font-poppins font-light tracking-wide">
            Your Neighbourhood
          </div>
          <div className="text-text-dark text-3xl md:text-6xl lg:text-8xl font-serif font-light tracking-widest">
            G Y M
          </div>
        </div>
      </Link>
    </div>
  );
}

