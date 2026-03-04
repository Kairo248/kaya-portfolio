"use client";

import { motion } from "framer-motion";
import { Zap, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer(){
    return (
      <footer className="w-full py-12 bg-slate-900 border-t-2 border-yellow-500/30">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div 
            className="flex flex-col items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Social Links */}
            <div className="flex gap-4">
              <motion.a
                href="https://github.com/Kairo248"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-yellow-500 hover:text-red-500 border-2 border-yellow-500/50"
                whileHover={{ scale: 1.1, rotate: 5, boxShadow: '0 0 20px rgba(251, 191, 36, 0.4)' }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/kaya-smith-32491a319"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-yellow-500 hover:text-red-500 border-2 border-yellow-500/50"
                whileHover={{ scale: 1.1, rotate: 5, boxShadow: '0 0 20px rgba(251, 191, 36, 0.4)' }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="mailto:smithkaya404@gmail.com"
                className="p-3 bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-yellow-500 hover:text-red-500 border-2 border-yellow-500/50"
                whileHover={{ scale: 1.1, rotate: 5, boxShadow: '0 0 20px rgba(251, 191, 36, 0.4)' }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>

            {/* Copyright */}
            <div className="text-center">
              <p className="text-slate-400 text-sm flex items-center gap-2 justify-center">
                © {new Date().getFullYear()} Kaya Smith
              </p>
            </div>
          </motion.div>
        </div>
      </footer>
    );
  }
  