"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Button from "./Button";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "projects", "about", "contact"];
      const scrollPos = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            setActive(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "projects", label: "Projects" },
    { href: "about", label: "About" },
    { href: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/60 backdrop-blur-md shadow-lg py-4 px-6 flex justify-between items-center z-50">
      {/* Logo */}
      <Link
        href="/"
        className="text-lg font-semibold transition duration-300 hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.8)]"
      >
        Kaya Smith
      </Link>

      {/* Desktop menu */}
      <div className="hidden md:flex gap-6 items-center text-sm">
        {links.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className={`transition duration-300 hover:text-blue-700 hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.8)] ${
              active === href.slice(1) ? "text-blue-700 drop-shadow-[0_0_8px_rgba(0,255,255,0.8)] font-semibold" : ""
            }`}
          >
            {label}
          </a>
        ))}
        <Button>Resume</Button>
      </div>

      {/* Mobile menu button */}
      <button
        className="md:hidden p-2 rounded-lg bg-white/10 backdrop-blur-sm"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <X /> : <Menu />}
      </button>

      {/* Mobile dropdown */}
      {open && (
        <div className="absolute top-16 right-6 text-cyan-400 bg-white/5 border border-white/10 backdrop-blur-md rounded-xl p-4 flex flex-col gap-4 w-48 md:hidden">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`transition duration-300 hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.8)] ${
                active === href.slice(1) ? "text-cyan-400 drop-shadow-[0_0_8px_rgba(0,255,255,0.8)] font-semibold" : ""
              }`}
            >
              {label}
            </a>
          ))}
          <Button onClick={() => setOpen(false)}>Resume</Button>
        </div>
      )}
    </nav>
  );
}
