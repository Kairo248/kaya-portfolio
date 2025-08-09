"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  demoLink?: string;
  codeLink?: string;
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
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
      className="glass overflow-hidden rounded-2xl shadow-lg flex flex-col hover:scale-[1.02] transition-transform duration-300"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 sm:h-56 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="flex flex-col flex-1 p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm sm:text-base opacity-80 flex-1">{description}</p>

        <div className="mt-4 flex flex-col sm:flex-row gap-3">
          {demoLink && (
            <a href={demoLink} target="_blank" rel="noopener noreferrer" className="flex-1">
              <Button variant="primary" className="w-full cursor-pointer">
                View Project
              </Button>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
