"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import { ExternalLink } from "lucide-react";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  demoLink?: string;
  codeLink?: string;
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function ProjectCard({
  title,
  description,
  image,
  demoLink,
  codeLink,
}: ProjectCardProps) {
  return (
    <motion.div
      className="glass overflow-hidden rounded-lg shadow-xl flex flex-col group relative"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      {/* Gradient border on hover - Avengers energy */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 rounded-lg opacity-0 group-hover:opacity-100 blur transition duration-500"></div>
      
      <div className="relative bg-slate-900 rounded-lg overflow-hidden border-2 border-yellow-500/20">
        <div className="overflow-hidden relative">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-48 sm:h-56 md:h-64 object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        <div className="flex flex-col flex-1 p-5 sm:p-6">
          <h3 className="text-lg sm:text-xl font-bold mb-2 text-yellow-500 group-hover:text-red-500 transition-colors duration-300" style={{textShadow: '0 0 10px rgba(251, 191, 36, 0.3)'}}>{title}</h3>
          <p className="text-sm sm:text-base text-slate-300 flex-1 leading-relaxed">{description}</p>

          <div className="mt-5 flex flex-col sm:flex-row gap-3">
            {demoLink && (
              <motion.a 
                href={demoLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button className="w-full px-6 py-3 bg-gradient-to-r from-red-600 to-yellow-500 text-white rounded-md font-bold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-yellow-500/50" style={{textShadow: '0 2px 4px rgba(0,0,0,0.3)'}}>
                  View Project
                  <ExternalLink className="w-4 h-4" />
                </button>
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
