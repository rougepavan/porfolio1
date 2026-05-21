import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="px-5 lg:px-28 flex justify-between flex-col lg:flex-row" id="about">
      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10 }}
        viewport={{ once: true }}
      >
        <img src="/assets/about-me.svg" alt="About Me Illustration" />
      </motion.div>

      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="lg:text-4xl text-2xl mt-4 lg:mt-0">
          About <span className="font-extrabold">Me</span>
        </h2>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-5 lg:mt-10">
          I am a Computer Science undergraduate passionate about software engineering, backend development, and scalable full-stack applications. I enjoy solving real-world problems through clean architecture, optimized systems, and efficient development practices.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          My technical expertise includes Java, Python, SQL, React.js, Node.js, MongoDB, Express.js, REST APIs, and database management systems. I have experience building web applications, backend services, analytics platforms, and data-driven systems using modern development technologies.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          Beyond development, I continuously improve my problem-solving skills through projects, hackathons, and practical engineering challenges. I am actively seeking opportunities to contribute to innovative software solutions while growing as a software engineer.
        </p>
      </motion.div>
    </div>
  );
}
