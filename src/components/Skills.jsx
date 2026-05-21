import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaJs, FaReact, FaNodeJs, FaPython, FaDatabase, FaJava, 
  FaHtml5, FaCss3Alt, FaCode, FaProjectDiagram, FaGitAlt, 
  FaLinux, FaDocker, FaVial, FaCheckDouble, FaTasks, FaLink,
  FaLaptopCode
} from "react-icons/fa";
import { SiMongodb, SiMysql, SiExpress } from "react-icons/si";
import { TbApi } from "react-icons/tb";

export default function Skills() {
  const [skills] = useState([
    { id: 1, name: "Java", icon: <FaJava size={40} /> },
    { id: 2, name: "Python", icon: <FaPython size={40} /> },
    { id: 3, name: "SQL", icon: <FaDatabase size={40} /> },
    { id: 4, name: "JavaScript", icon: <FaJs size={40} /> },
    { id: 5, name: "React.js", icon: <FaReact size={40} /> },
    { id: 6, name: "Node.js", icon: <FaNodeJs size={40} /> },
    { id: 7, name: "Express.js", icon: <SiExpress size={40} /> },
    { id: 8, name: "MongoDB", icon: <SiMongodb size={40} /> },
    { id: 9, name: "MySQL", icon: <SiMysql size={40} /> },
    { id: 10, name: "HTML5", icon: <FaHtml5 size={40} /> },
    { id: 11, name: "CSS3", icon: <FaCss3Alt size={40} /> },
    { id: 12, name: "REST APIs", icon: <TbApi size={40} /> },
    { id: 13, name: "DSA", icon: <FaCode size={40} /> },
    { id: 14, name: "OOP", icon: <FaProjectDiagram size={40} /> },
    { id: 15, name: "DBMS", icon: <FaDatabase size={40} /> },
    { id: 16, name: "Git", icon: <FaGitAlt size={40} /> },
    { id: 17, name: "Linux", icon: <FaLinux size={40} /> },
    { id: 18, name: "Docker", icon: <FaDocker size={40} /> },
    { id: 19, name: "PyTest", icon: <FaVial size={40} /> },
    { id: 20, name: "JUnit", icon: <FaCheckDouble size={40} /> },
    { id: 21, name: "Agile", icon: <FaTasks size={40} /> },
    { id: 22, name: "API Integration", icon: <FaLink size={40} /> },
  ]);

  const [experiences] = useState([
    {
      id: 1,
      company: "Freelance",
      role: "Data Engineer",
      period: "Feb 2024 - Sept 2024",
      description:
        "Built backend services and API integrations using Node.js, Python, and SQL. Designed data workflows and improved system efficiency by 25%. Collaborated in Agile environments with clear requirement analysis and delivery.",
      icon: "data",
    },
    {
      id: 2,
      company: "Freelance",
      role: "Frontend Developer",
      period: "Sep 2023 - Jan 2024",
      description:
        "Developed and deployed responsive web applications using React.js, Node.js, and REST APIs. Improved application load times by 40% and enhanced UI/UX, contributing to increased client engagement. Delivered 10+ client projects using Git-based workflows and documentation.",
      icon: "frontend",
    },
  ]);

  return (
    <div className="mt-3 lg:mt-16" id="skills">
      <div className="px-5 lg:px-28">

        <motion.h2
          className="text-2xl lg:text-4xl text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold">Skills</span>
        </motion.h2>

        {/* Skill Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 text-lg font-bold mt-7 lg:mt-16 w-full place-items-center gap-y-6 lg:gap-y-12">
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              className="bg-white border-2 hover:bg-black hover:text-white transition-all cursor-pointer border-black rounded p-3 h-32 w-32 lg:h-36 lg:w-36 flex flex-col items-center justify-center gap-3 text-center"
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: skill.id * 0.05 }}
              viewport={{ once: true }}
            >
              {skill.icon}
              <p className="text-xs lg:text-sm font-semibold">{skill.name}</p>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Experience Section */}
      <div className="bg-black w-full my-8 py-8 lg:my-16 lg:py-16">
        <motion.h2
          className="text-2xl lg:text-4xl text-center text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold">Experience</span>
        </motion.h2>

        {/* Experience Cards */}
        <div className="px-5 lg:px-28 my-8 lg:mt-16 space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="bg-black p-5 border border-[#D4D4D8] rounded-md hover:bg-[#27272A] transition-all cursor-pointer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between flex-col items-start lg:flex-row lg:items-center">
                <div className="flex items-center gap-5">
                  <div className="p-2 border border-white rounded-full bg-zinc-800 text-white flex items-center justify-center">
                    {exp.icon === "data" ? <FaDatabase size={18} /> : <FaLaptopCode size={18} />}
                  </div>
                  <h2 className="font-semibold text-white text-lg lg:text-xl">
                    {exp.role} at {exp.company}
                  </h2>
                </div>
                <span className="text-[#D4D4D8] font-semibold text-sm mt-4 lg:mt-0 lg:text-base">
                  {exp.period}
                </span>
              </div>
              <p className="text-[#D4D4D8] mt-6 text-sm/6 lg:text-base font-light">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
