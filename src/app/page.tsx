"use client";

import Hero from "./components/Hero";
import ProjectCard from "./components/ProCard";
import Business from "./components/Business"
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};


export default function HomePage() {
  return (
    <>
      <section id="hero">
        <Hero />
        </section>
      <section id="projects" className="py-16 max-w-7xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center">Projects</h2>

      <motion.div
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <ProjectCard
          title="Smart Expense Tracker"
          description="A fullstack expense tracker with AI-powered budgeting, built using React, Spring Boot, and MySQL."
          image="/expense.png"
          demoLink="#"
        />
        <ProjectCard
          title="Lilitha Ntsundwandi Brand"
          description="A modern, elegant, and business-focused website featuring personal branding for Lilitha Ntsundwani "
          image="/lilitha.png"
          demoLink="https://lilitha-ntsundwani.vercel.app/"
        />
        <ProjectCard
          title="E-Commerce App"
          description="A responsive eCommerce platform with modern UI and secure checkout."
          image="/ecommerce.png"
          demoLink="#"
        />
      </motion.div>
      </section>

      <section id="business">
        <Business />
      </section>
      
    </>
  );
}
