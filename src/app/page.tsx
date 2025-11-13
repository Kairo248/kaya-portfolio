"use client";

import Hero from "./components/Hero";
import ProjectCard from "./components/ProCard";
import Business from "./components/Business"
import { motion } from "framer-motion";
import { Shield, Zap } from "lucide-react";

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
    <div className="overflow-hidden">
      <section id="hero">
        <Hero />
      </section>
      
      <section id="projects" className="py-20 max-w-7xl mx-auto px-4 md:px-8 relative">
        {/* Decorative background - Avengers energy */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600 rounded-full mix-blend-screen filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500 rounded-full mix-blend-screen filter blur-3xl opacity-10"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 relative z-10"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="w-8 h-8 text-red-500" />
            <span className="text-yellow-500 font-bold text-sm uppercase tracking-widest" style={{textShadow: '0 0 10px rgba(251, 191, 36, 0.5)'}}>Mission Archives</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 bg-clip-text text-transparent" style={{textShadow: '0 0 20px rgba(220, 38, 38, 0.3)'}}>
            Projects
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Assembling powerful solutions with cutting-edge technology
          </p>
        </motion.div>

        <motion.div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 relative z-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <ProjectCard
            title="Unshakeable Faith"
            description="A modern, elegant, and business-focused website."
            image="/unshakeable.png"
            demoLink="https://unshakeable-faith.vercel.app/"
          />
          <ProjectCard
            title="Lilitha Ntsundwandi Brand"
            description="A modern, elegant, and business-focused website featuring personal branding for Lilitha Ntsundwani "
            image="/lilitha.png"
            demoLink="https://lilitha-ntsundwani.vercel.app/"
          />
          <ProjectCard
            title="OJS-Studios"
            description="A modern, elegant, and business-focused website."
            image="/ojs.png"
            demoLink="https://ojs-studios.vercel.app/"
          />
        </motion.div>
      </section>

      <section id="business">
        <Business />
      </section>
    </div>
  );
}
