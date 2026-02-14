"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  MapPin,
  Mail,
  Linkedin,
  Github,
  Download,
} from "lucide-react";

import {
  FaAngular,
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
  FaGitAlt,
  FaLinux,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

import {
  SiTypescript,
  SiJavascript,
  SiPostgresql,
  SiPhp,
} from "react-icons/si";

export default function Home() {
  const technologies = [
    { name: "Angular", icon: <FaAngular size={42} /> },
    { name: "React", icon: <FaReact size={42} /> },
    { name: "Node.js", icon: <FaNodeJs size={42} /> },
    { name: "Java", icon: <FaJava size={42} /> },
    { name: "Python", icon: <FaPython size={42} /> },
    { name: "PHP", icon: <SiPhp size={42} /> },
    { name: "TypeScript", icon: <SiTypescript size={42} /> },
    { name: "JavaScript", icon: <SiJavascript size={42} /> },
    { name: "PostgreSQL", icon: <SiPostgresql size={42} /> },
    { name: "Git", icon: <FaGitAlt size={42} /> },
    { name: "Linux", icon: <FaLinux size={42} /> },
    { name: "HTML", icon: <FaHtml5 size={42} /> },
    { name: "CSS", icon: <FaCss3Alt size={42} /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#111] to-[#0a0a0a] text-white px-6 py-16">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row gap-12 items-center md:items-start"
        >

          <div className="w-44 h-44 relative">
            <Image
              src="/foto.jpg"
              alt="Jonathan"
              fill
              className="rounded-full object-cover border border-gray-700 shadow-xl"
            />
          </div>

          <div className="flex-1">
            <h1 className="text-5xl font-bold tracking-tight">
              Jonathan Quintero
            </h1>

            <p className="text-blue-400 text-xl mt-2">
              Software Developer
            </p>

            <div className="flex items-center gap-2 text-gray-400 mt-4">
              <MapPin size={18} />
              Girón, Santander, Colombia
            </div>

            <div className="flex gap-4 mt-6 flex-wrap">
              <a
                href="mailto:jonathandq21@gmail.com"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition px-5 py-2 rounded-full text-sm shadow-lg hover:shadow-blue-500/30"
              >
                <Mail size={16} />
                Contact Me
              </a>

              <a
                href="/HV_Jonathan_Quintero_Villamizar.pdf"
                download
                className="inline-flex items-center gap-2 border border-gray-600 hover:border-blue-500 transition px-5 py-2 rounded-full text-sm"
              >
                <Download size={16} />
                Download CV
              </a>
            </div>

            <div className="flex gap-6 mt-8 text-gray-400">
              <Linkedin className="hover:text-blue-400 cursor-pointer transition" />
              <Github className="hover:text-white cursor-pointer transition" />
            </div>
          </div>
        </motion.div>

        {/* ABOUT */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-20"
        >
          <h2 className="text-2xl font-bold border-b border-gray-700 pb-2 inline-block">
            ABOUT ME
          </h2>

          <p className="text-gray-400 mt-6 leading-relaxed max-w-4xl">
            Desarrollador apasionado por la tecnología y en constante aprendizaje.
            Experiencia en desarrollo de sistemas empresariales, backend, frontend,
            administración de servidores y optimización de bases de datos.
            Me enfoco en crear soluciones eficientes, escalables y modernas.
          </p>
        </motion.div>

        {/* TECHNOLOGIES */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-24"
        >
          <h2 className="text-2xl font-bold border-b border-gray-700 pb-2 inline-block">
            TECHNOLOGIES
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-14 mt-14 text-center">
            {technologies.map((tech) => (
              <motion.div
                key={tech.name}
                whileHover={{ scale: 1.15 }}
                className="flex flex-col items-center gap-3 text-gray-400 
                           hover:text-blue-400 transition duration-300"
              >
                <div className="drop-shadow-[0_0_12px_rgba(59,130,246,0.4)]">
                  {tech.icon}
                </div>
                <span className="text-sm tracking-wide">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* PROJECTS */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-28"
        >
          <h2 className="text-2xl font-bold border-b border-gray-700 pb-2 inline-block">
            PROJECTS
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {["Sistema ERP", "App Web Empresarial", "API REST Empresarial"].map(
              (project) => (
                <div
                  key={project}
                  className="bg-[#141414] p-6 rounded-xl border border-gray-800 
                             hover:border-blue-500 transition hover:shadow-lg 
                             hover:shadow-blue-500/20"
                >
                  <h3 className="text-lg font-semibold mb-3">
                    {project}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Proyecto desarrollado utilizando tecnologías modernas,
                    enfocado en rendimiento, escalabilidad y buenas prácticas.
                  </p>
                </div>
              )
            )}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
