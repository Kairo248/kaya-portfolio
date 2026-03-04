"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Shield, ArrowRight, Code2, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex flex-col md:flex-row items-center gap-12 py-16 md:py-24 px-4 md:px-8 overflow-hidden hex-pattern">
      {/* Animated background elements - Avengers energy */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-red-600 rounded-full mix-blend-screen filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-screen filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-orange-500 rounded-full mix-blend-screen filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>

      <motion.div
        className="flex-1 text-center md:text-left relative z-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex items-center gap-2 justify-center md:justify-start mb-4"
        >
          <Shield className="w-6 h-6 text-red-500" />
          <span className="text-yellow-500 font-bold text-sm uppercase tracking-widest" style={{textShadow: '0 0 10px rgba(251, 191, 36, 0.5)'}}>AVENGERS INITIATIVE</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-2">
            Hey, I&apos;m{" "}
            <span className="gradient-text inline-block">
              Kaya
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex items-center gap-3 justify-center md:justify-start mb-6"
        >
          <Code2 className="w-5 h-5 text-red-500" />
          <span className="text-xl md:text-2xl font-bold text-slate-200" style={{textShadow: '0 0 10px rgba(220, 38, 38, 0.5)'}}>Full-Stack Developer</span>
          <Zap className="w-5 h-5 text-yellow-500" />
        </motion.div>

        <motion.p 
          className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto md:mx-0 leading-relaxed mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
         Software developer with a vision for innovation. I design and build powerful, 
         scalable applications that blend creativity, technology, and purpose. ⚡
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex gap-4 justify-center md:justify-start"
        >
          <Link href="/projects">
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-red-600 to-yellow-500 text-white rounded-md font-bold flex items-center gap-2 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-yellow-500/50"
              style={{textShadow: '0 2px 4px rgba(0,0,0,0.3)'}}
              whileHover={{ scale: 1.05, y: -2, boxShadow: '0 0 30px rgba(220, 38, 38, 0.6)' }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
          <Link href="/contact">
            <motion.button
              className="px-8 py-4 bg-slate-800 text-yellow-500 rounded-md font-bold border-2 border-yellow-500 shadow-lg hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2, boxShadow: '0 0 30px rgba(251, 191, 36, 0.6)' }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="relative z-10"
      >
        <Link href="/about">
          <motion.div 
            className="relative group w-80 h-80 md:w-96 md:h-96 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 opacity-75 blur-2xl group-hover:opacity-100 transition duration-500 arc-reactor"></div>
            <motion.div
              className="relative z-10 w-full h-full rounded-full overflow-hidden border-4 border-yellow-500 shadow-2xl float"
              style={{boxShadow: '0 0 40px rgba(220, 38, 38, 0.5), 0 0 60px rgba(251, 191, 36, 0.3), inset 0 0 20px rgba(251, 191, 36, 0.2)'}}
              whileHover={{ rotate: [0, -5, 5, -5, 0] }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="/profile.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </motion.div>
            {/* Decorative elements - Arc Reactor style */}
            <motion.div
              className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-yellow-400 to-red-500 rounded-full flex items-center justify-center shadow-lg border-2 border-yellow-300"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              style={{boxShadow: '0 0 20px rgba(251, 191, 36, 0.6)'}}
            >
              <Shield className="w-8 h-8 text-white" />
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-red-600 to-yellow-500 rounded-full flex items-center justify-center shadow-lg border-2 border-red-400"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              style={{boxShadow: '0 0 20px rgba(220, 38, 38, 0.6)'}}
            >
              <Zap className="w-8 h-8 text-white" />
            </motion.div>
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
}
