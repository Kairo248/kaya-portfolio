"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link"

export default function BusinessSection() {
  return (
    <Link href="/business" className="cursor-pointer">
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with slow zoom animation */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/website-hp.jpg" // Replace with your business image path
          alt="Business Background"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </motion.div>

      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Centered text */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-white text-5xl md:text-6xl font-extrabold mb-6 tracking-wide">
          How I Do Business
        </h2>
        <p className="text-cyan-400 text-xl md:text-2xl max-w-3xl leading-relaxed font-semibold">
          I believe in transparency, quality, and building lasting relationships. 
          Every project is a partnership, and your success is my priority.
        </p>
      </div>
    </section>
    </Link>
  );
}
