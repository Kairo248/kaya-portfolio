"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Shield } from "lucide-react";
import Button from "./Button";
import { motion, AnimatePresence } from "framer-motion";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "projects", "about", "contact"];
      const scrollPos = window.scrollY + 100;

      setScrolled(window.scrollY > 50);

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
    <motion.nav 
      className={`fixed top-0 left-0 w-full py-4 px-6 flex justify-between items-center z-50 transition-all duration-300 border-b-2 ${
        scrolled 
          ? "bg-slate-900/95 backdrop-blur-lg shadow-lg border-yellow-500/30" 
          : "bg-slate-900/80 backdrop-blur-md shadow-md border-red-500/30"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo */}
      <Link
        href="/"
        className="flex items-center gap-2 text-lg font-bold transition duration-300"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Shield className="w-6 h-6 text-red-500" />
        </motion.div>
        <span className="bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 bg-clip-text text-transparent" style={{textShadow: '0 0 20px rgba(220, 38, 38, 0.5)'}}>
          KAYA SMITH
        </span>
      </Link>

      {/* Desktop menu */}
      <div className="hidden md:flex gap-6 items-center text-sm">
        {links.map(({ href, label }) => (
          <motion.a
            key={href}
            href={href}
            className={`font-bold transition duration-300 relative ${
              active === href.slice(1) 
                ? "text-yellow-500" 
                : "text-slate-300 hover:text-yellow-500"
            }`}
            style={active === href.slice(1) ? {textShadow: '0 0 10px rgba(251, 191, 36, 0.5)'} : {}}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {label}
            {active === href.slice(1) && (
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-red-600 to-yellow-500"
                layoutId="activeLink"
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.a>
        ))}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button>Resume</Button>
        </motion.div>
      </div>

      {/* Mobile menu button */}
      <motion.button
        className="md:hidden p-2 rounded-lg bg-red-900/50 text-yellow-500 border border-yellow-500/50"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        whileTap={{ scale: 0.9 }}
      >
        {open ? <X /> : <Menu />}
      </motion.button>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div 
            className="absolute top-16 right-6 bg-slate-900/95 border-2 border-yellow-500/50 backdrop-blur-md rounded-lg p-4 flex flex-col gap-4 w-48 md:hidden shadow-xl"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {links.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`font-bold transition duration-300 ${
                  active === href.slice(1) 
                    ? "text-yellow-500" 
                    : "text-slate-300 hover:text-yellow-500"
                }`}
              >
                {label}
              </a>
            ))}
            <Button onClick={() => setOpen(false)}>Resume</Button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
