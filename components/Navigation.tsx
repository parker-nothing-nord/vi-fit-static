"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ViLogo from "./ViLogo";

export default function Navigation() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/tour", label: "Free Intro Tour" },
    { href: "/culture", label: "Our Culture" },
    { href: "/process", label: "The Process" },
    { href: "/book", label: "Book Now" },
  ];

  return (
    <nav className="bg-background-cream border-b border-gray-300 sticky top-0 z-50">
      <div className="max-w-[1160px] mx-auto px-6 md:px-12 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <ViLogo className="w-12 h-12 text-accent-green" />
            <div className="text-left">
              <div className="text-text-gray text-xs font-poppins font-light tracking-wide">
                Your Neighbourhood
              </div>
              <div className="text-text-dark text-xl font-serif font-light tracking-widest">
                GYM
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-cantarell text-sm font-semibold uppercase tracking-wider transition-colors ${
                  pathname === link.href
                    ? "text-accent-green"
                    : "text-text-gray hover:text-accent-green"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-text-dark"
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block py-2 font-cantarell text-sm font-semibold uppercase tracking-wider transition-colors ${
                pathname === link.href
                  ? "text-accent-green"
                  : "text-text-gray hover:text-accent-green"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

