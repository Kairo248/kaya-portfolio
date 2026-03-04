"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link"
import { Handshake, ArrowRight, Star } from "lucide-react";

export default function BusinessSection() {
  return (
    <Link href="/business" className="cursor-pointer block">
    <section className="relative h-screen w-full overflow-hidden group">
      {/* Background Image with slow zoom animation */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/website-hp.jpg"
          alt="Business Background"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </motion.div>

      {/* Avengers overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/80 via-slate-900/80 to-yellow-900/70 group-hover:from-red-900/90 group-hover:via-slate-900/90 group-hover:to-yellow-900/80 transition-all duration-500"></div>

      {/* Animated particles - Arc Reactor energy */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-3 h-3 bg-yellow-500 rounded-full"
          animate={{ y: [0, -30, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 4, repeat: Infinity }}
          style={{boxShadow: '0 0 10px rgba(251, 191, 36, 0.8)'}}
        ></motion.div>
        <motion.div
          className="absolute top-40 right-32 w-2 h-2 bg-red-500 rounded-full"
          animate={{ y: [0, -40, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          style={{boxShadow: '0 0 10px rgba(220, 38, 38, 0.8)'}}
        ></motion.div>
        <motion.div
          className="absolute bottom-32 left-1/3 w-3 h-3 bg-yellow-400 rounded-full"
          animate={{ y: [0, -25, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3.5, repeat: Infinity, delay: 2 }}
          style={{boxShadow: '0 0 10px rgba(251, 191, 36, 0.8)'}}
        ></motion.div>
      </div>

      {/* Centered text with enhanced animations */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 mb-6"
        >
          <Handshake className="w-12 h-12 text-yellow-500" />
          <span className="text-yellow-500 font-bold text-sm uppercase tracking-widest" style={{textShadow: '0 0 10px rgba(251, 191, 36, 0.5)'}}>ASSEMBLE YOUR TEAM</span>
        </motion.div>
        
        <motion.h2 
          className="text-5xl md:text-7xl font-extrabold mb-6 tracking-wide bg-gradient-to-r from-red-500 via-yellow-500 to-red-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{textShadow: '0 0 40px rgba(220, 38, 38, 0.5)'}}
        >
          How I Do Business
        </motion.h2>
        
        <motion.p 
          className="text-slate-200 text-xl md:text-2xl max-w-3xl leading-relaxed font-medium mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          I value collaboration, clear communication, and long term partnerships,
          because great results come from genuine connections and shared vision.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex gap-6 items-center flex-wrap justify-center"
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-red-600 to-yellow-500 text-white rounded-md font-bold flex items-center gap-2 shadow-2xl hover:shadow-3xl transition-all duration-300 border-2 border-yellow-500/50"
            style={{textShadow: '0 2px 4px rgba(0,0,0,0.3)'}}
            whileHover={{ scale: 1.05, y: -2, boxShadow: '0 0 30px rgba(220, 38, 38, 0.6)' }}
            whileTap={{ scale: 0.95 }}
          >
            Join the Initiative
            <ArrowRight className="w-5 h-5" />
          </motion.button>
          
          <div className="flex items-center gap-2">
            <Star className="w-6 h-6 fill-yellow-500 text-yellow-500" style={{filter: 'drop-shadow(0 0 5px rgba(251, 191, 36, 0.8))'}} />
            <Star className="w-6 h-6 fill-yellow-500 text-yellow-500" style={{filter: 'drop-shadow(0 0 5px rgba(251, 191, 36, 0.8))'}} />
            <Star className="w-6 h-6 fill-yellow-500 text-yellow-500" style={{filter: 'drop-shadow(0 0 5px rgba(251, 191, 36, 0.8))'}} />
            <Star className="w-6 h-6 fill-yellow-500 text-yellow-500" style={{filter: 'drop-shadow(0 0 5px rgba(251, 191, 36, 0.8))'}} />
            <Star className="w-6 h-6 fill-yellow-500 text-yellow-500" style={{filter: 'drop-shadow(0 0 5px rgba(251, 191, 36, 0.8))'}} />
          </div>
        </motion.div>
      </div>
    </section>
    </Link>
  );
}
