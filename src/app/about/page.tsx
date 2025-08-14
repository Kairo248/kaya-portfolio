"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image with zoom in/out animation */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/about.jpg"
            alt="Kaya Smith"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </motion.div>

        {/* Overlay to darken the image for better text contrast */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

        {/* Content centered over image */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            About Me
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl opacity-80"
          >
            I’m Kaya Smith, a passionate software development student at the
            International University of Applied Sciences. I love building
            interactive, user-friendly applications and turning creative ideas
            into real digital products.
          </motion.p>
        </div>
      </section>


      {/* Background Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <motion.h2
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-4 text-yellow-400"
        >
          My Background
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="opacity-80 leading-relaxed"
        >
          My journey in tech started with curiosity and a love for solving problems. 
          Over time, I developed a deep interest in software development from 
          crafting clean, interactive UIs to building robust backend systems.  
          I’ve balanced my academic studies with hands-on projects and real-world work experiences.
        </motion.p>
      </section>

      {/* Experience Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <motion.h2
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-8 text-yellow-400"
        >
          Work Experience
        </motion.h2>

        <div className="space-y-8">
          {[
            {
              title: "Frontend Developer – Happierleads (London)",
              description:
                "Worked on developing and improving frontend features, ensuring responsive design and smooth user experiences.",
            },
            {
              title: "Frontend Developer – Zlto",
              description:
                "Currently building and enhancing user-facing components, integrating APIs, and maintaining high-quality code standards.",
            },
          ].map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
              <p className="opacity-80">{job.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
<section className="max-w-5xl mx-auto px-6 py-16">
  <motion.h2
    initial={{ x: -50, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="text-3xl font-bold mb-8 text-yellow-400"
  >
    Projects I’ve Worked On
  </motion.h2>

  <div className="grid md:grid-cols-2 gap-8">
    {[
      "Expense Tracker",
      "E-Commerce Website",
      "To-Do List App",
      "SpaceX News App",
      "Client Websites",
      "More About the Projects",
    ].map((project, i) => {
      const isMoreLink = project === "More About the Projects";
      

      const cardContent = (
        <motion.div
          key={project}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1 }}
          viewport={{ once: true }}
          className={`border p-6 rounded-lg hover:border-yellow-400 transition cursor-pointer ${
          isMoreLink
            ? "bg-cyan-400  text-white"
            : "bg-white/5 border-white/10 text-white/80"
        }`}
        >
          <h3 className="text-lg font-semibold">{project}</h3>
        </motion.div>
      );

      if (isMoreLink) {
        return (
          <Link href="/projects" key={project}>
            {cardContent}
          </Link>
        );
      }

      return cardContent;
    })}
  </div>
</section>



      {/* Skills Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <motion.h2
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-6 text-yellow-400"
        >
          Tools & Technologies
        </motion.h2>

        <div className="flex flex-wrap gap-4">
          {[
            "React",
            "Next.js",
            "Tailwind CSS",
            "Framer Motion",
            "Java (Spring Boot)",
            "Node.js",
            "MySQL",
            "JWT Authentication",
            "REST APIs",
            "Git & GitHub",
          ].map((tool, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="bg-cyan-400/10 border border-cyan-400/30 px-4 py-2 rounded-full text-sm hover:bg-cyan-400/20 transition"
            >
              {tool}
            </motion.span>
          ))}
        </div>
      </section>
    </main>
  );
}
