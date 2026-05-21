import React from 'react';
import { TbExternalLink } from "react-icons/tb";
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "AI-Based Image Captioning Data Pipeline",
    description: "Built an end-to-end data pipeline for image ingestion and transformation using Python, TensorFlow, GPT-based models, and SQL. Automated conversion of unstructured data into analytics-ready formats while improving processing efficiency by 30%.",
    image: "/assets/ai_data_pipeline.png",
    link: "https://github.com/rougepavan/AI-Image-captioning.git"
  },
  {
    id: 2,
    title: "Laptop Sales & Inventory Management System",
    description: "Designed backend APIs and database models for managing inventory, sales, and service records using Node.js, Express.js, and MongoDB. Optimized database queries to improve real-time reporting efficiency by 25%.",
    image: "/assets/inventory_system.png",
    link: "https://github.com/rougepavan/IP.git"
  }
];

export default function Projects() {
  return (
    <div className="bg-black px-5 lg:px-28 py-8 my-8 lg:py-16 lg:my-16" id="projects">
      <h2 className="text-2xl lg:text-4xl text-center text-white">
        My <span className="font-extrabold">Projects</span>
      </h2>

      <div className="lg:mt-16 mt-8 lg:space-y-16 space-y-8 lg:pb-6 pb-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className={`flex justify-between items-center flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 10, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="lg:w-[500px] h-64 lg:h-80 w-full rounded-2xl overflow-hidden border border-zinc-800 flex items-center justify-center hover:scale-[1.02] transition-transform duration-500 cursor-pointer shadow-xl">
              <img
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                src={project.image}
                alt={project.title}
              />
            </div>

            <div className="lg:w-1/2 lg:space-y-6 space-y-4">
              <h2 className="font-extrabold text-white mt-5 lg:mt-0 text-3xl lg:text-5xl">
                {String(project.id).padStart(2, "0")}
              </h2>
              <p className="font-bold text-white text-xl lg:text-3xl">{project.title}</p>

              <p className="font-light text-sm/6 lg:text-base text-[#71717A]">
                {project.description}
              </p>
              <a href={project.link} className="text-white mt-3 block" target="_blank" rel="noopener noreferrer">
                <TbExternalLink size={23} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
