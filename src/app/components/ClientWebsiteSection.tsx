const clientProjects = [
    {
      title: "Lilitha Ntsundwandi Brand",
      description:
        "A modern, elegant, and business-focused website featuring personal branding for Lilitha Ntsundwani.",
      image: "/lilitha.png",
      demoLink: "https://lilitha-ntsundwani.vercel.app/",
    },
    {
      title: "Thembi Website",
      description:
        "A stylish product showcase for Thembi with smooth animations and responsive design.",
      image: "/thembi.png",
      demoLink: "#",
    },
    // add more client websites here
  ];

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

export default function ClientWebsitesSection() {
  return (
    <section className="py-16 max-w-7xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center text-cyan-400">
        Client Websites
      </h2>

      <motion.div
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {clientProjects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </motion.div>
    </section>
  );
}
