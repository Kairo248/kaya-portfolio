"use client";

import { motion } from "framer-motion";
import ProjectCard from "../components/ProCard";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Projects() {
  // Hardcoded projects with categories
  const projects = [
    {
      title: "Smart Expense Tracker",
      description:
        "A fullstack expense tracker with AI-powered budgeting, built using React, Spring Boot, and MySQL.",
      image: "/projects/expense-tracker.png",
      demoLink: "#",
      category: "personal",
    },
    {
      title: "Lilitha Ntsundwandi Brand",
      description:
        "A modern, elegant, and business-focused website featuring personal branding for Lilitha Ntsundwani.",
      image: "/lilitha.png",
      demoLink: "https://lilitha-ntsundwani.vercel.app/",
      category: "client",
    },
    {
      title: "E-Commerce App",
      description: "A responsive eCommerce platform with modern UI and secure checkout.",
      image: "/ecommerce.png",
      demoLink: "#",
      category: "personal",
    },
    {
      title: "Thembi Website",
      description:
        "A stylish product showcase for Thembi. The sites include smooth animations, clear navigation, and responsive design to highlight their stories, services, and products effectively.",
      image: "/thembi.png",
      demoLink: "#",
      category: "client",
    },
    {
      title: "Zlto",
      description:
        "A digital rewards platform that incentivizes positive social actions by allowing users to earn and spend Zlto currency within a supportive community ecosystem.",
      image: "/zlto.png",
      demoLink: "https://zlto.mobi/",
      category: "work",
    },
    {
      title: "Happierleads",
      description:
        "A lead generation and customer engagement platform designed to help businesses capture, nurture, and convert prospects through smart marketing tools",
      image: "/happierleads.png",
      demoLink: "https://admin.happierleads.com",
      category: "work",
    },
    // Add more projects as needed
  ];

  const categories = [
    { key: "personal", label: "Personal Projects" },
    { key: "work", label: "Work Projects" },
    { key: "client", label: "Client Websites" },
  ];

  return (
    <section id="projects" className="py-16 max-w-7xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">Projects</h2>

      {categories.map(({ key, label }) => {
        const filteredProjects = projects.filter((p) => p.category === key);

        if (filteredProjects.length === 0) return null;

        return (
          <div key={key} className="mb-16">
            <h3 className="text-2xl font-semibold mb-6 border-b-2 border-cyan-400 pb-2">{label}</h3>

            <motion.div
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {filteredProjects.map((project, i) => (
                <ProjectCard key={i} {...project} />
              ))}
            </motion.div>
          </div>
        );
      })}
    </section>
  );
}
