"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
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
  const [imgError, setImgError] = useState(false);
  return (
    <motion.div
      className="glass overflow-hidden rounded-md shadow-lg flex flex-col group relative h-full"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
    >
      {/* Gradient border on hover - Avengers energy */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 rounded-lg opacity-0 group-hover:opacity-100 blur transition duration-500"></div>
      
      <div className="relative bg-slate-900 rounded-md overflow-hidden border border-yellow-500/20 flex flex-col h-full">
        <div className="overflow-hidden relative shrink-0">
          {!imgError ? (
            <motion.img
              src={image}
              alt={title}
              className="w-full h-24 sm:h-28 md:h-32 object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="w-full h-24 sm:h-28 md:h-32 bg-slate-700 flex items-center justify-center text-slate-400 text-xs">
              Image unavailable
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        <div className="flex flex-col flex-1 p-2.5 sm:p-3 min-h-0">
          <h3 className="text-sm sm:text-base font-bold mb-1 text-yellow-500 group-hover:text-red-500 transition-colors duration-300 line-clamp-2" style={{textShadow: '0 0 10px rgba(251, 191, 36, 0.3)'}}>{title}</h3>
          <p className="text-xs text-slate-300 leading-snug line-clamp-2 flex-1 min-h-0">{description}</p>

          <div className="mt-2 sm:mt-3 flex flex-col sm:flex-row gap-1.5">
            {demoLink && (
              <motion.a 
                href={demoLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex-1 min-w-0"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <button className="w-full px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-bold bg-gradient-to-r from-red-600 to-yellow-500 text-white rounded flex items-center justify-center gap-1 shadow-lg hover:shadow-xl transition-all duration-300 border border-yellow-500/50" style={{textShadow: '0 2px 4px rgba(0,0,0,0.3)'}}>
                  View Project
                  <ExternalLink className="w-3 h-3 shrink-0" />
                </button>
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
