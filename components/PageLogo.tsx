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
    <div className="absolute top-4 left-4 md:top-6 md:left-6 lg:top-8 lg:left-8 z-50">
      <Link href="/" className="flex items-center gap-1.5 md:gap-2 lg:gap-2.5 hover:opacity-80 transition-opacity">
        <Image
          src="/icon-black.png"
          alt="Vi Gym Logo"
          width={208}
          height={208}
          className="w-8 h-8 md:w-10 md:h-10 lg:w-11 lg:h-11"
          unoptimized
        />
        <div className="text-left whitespace-nowrap">
          <div className="text-text-dark text-[9px] md:text-[10px] lg:text-xs font-poppins font-light tracking-wide leading-tight">
            Your Neighbourhood
          </div>
          <div className="text-text-dark text-sm md:text-base lg:text-lg font-serif font-light tracking-widest leading-tight">
            G Y M
          </div>
        </div>
      </Link>
    </div>
  );
}

