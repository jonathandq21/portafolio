"use client";
export const dynamic = "force-dynamic";


import Image from "next/image";
import { motion } from "framer-motion";
import { FaGoogle } from "react-icons/fa";
import Header from "@/components/HeaderPage";
import Footer from "@/components/FooterPage";
import { useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
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
  const router = useRouter();

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (!session) {
        router.replace("/login");
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);


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
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#111] to-[#0a0a0a] text-white px-6 pt-28 pb-16">

        <div className="max-w-3xl mx-auto px-8 lg:px-0">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row gap-12 items-center md:items-start"
          >
            <div className="w-44 h-44 relative">
              <Image
                src="/images/foto.jpg"
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
                  href="https://wa.me/573006472911"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 transition px-5 py-2 rounded-full text-sm shadow-lg hover:shadow-green-500/30"
                >
                  <Mail size={16} />
                  WhatsApp
                </a>
                <a
                  href="/HV_Jonathan_Quintero_Villamizar.pdf"
                  download="Jonathan_Quintero_CV.pdf"
                  className="inline-flex items-center gap-2 border border-gray-600 hover:border-blue-500 transition px-5 py-2 rounded-full text-sm"
                >
                  <Download size={16} />
                  Download CV
                </a>
              </div>
              <div className="mt-4">
                <div className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition px-5 py-2 rounded-full text-sm shadow-lg hover:shadow-blue-500/30">
                  <Mail size={16} />
                  jonathandq21@gmail.com
                </div>
              </div>
              <div className="flex gap-6 mt-8 text-gray-400">
                <a
                  href="https://www.linkedin.com/in/jonathan-david-quintero-villamizar-488b54365/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition"
                >
                  <Linkedin className="cursor-pointer" />
                </a>
                <a
                  href="https://github.com/jonathandq21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  <Github className="cursor-pointer" />
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            id="acerca"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mt-20 scroll-mt-32"
          >
            <h2 className="text-2xl font-bold border-b border-gray-700 pb-2 inline-block">
              ACERCA DE MI
            </h2>
            <p className="text-gray-400 mt-6 leading-relaxed max-w-4xl">
              Soy desarrollador de software con experiencia en el diseño, desarrollo y mantenimiento de sistemas empresariales personalizados.
              He trabajado en entornos ágiles colaborando con equipos multidisciplinarios, participando en el levantamiento de requerimientos,
              diseño de soluciones y desarrollo de funcionalidades orientadas a mejorar procesos organizacionales.
            </p>
            <p className="text-gray-400 mt-6 leading-relaxed max-w-4xl">
              Cuento con experiencia tanto en backend como en frontend, así como en administración de servidores, configuración de redes y
              soporte a infraestructuras tecnológicas. Me caracterizo por mi pensamiento analítico, capacidad de adaptación y enfoque en la
              entrega de soluciones eficientes, seguras y escalables.
            </p>
            <p className="text-gray-400 mt-6 leading-relaxed max-w-4xl">
              Actualmente continúo fortaleciendo mis conocimientos en Ingeniería de Sistemas, con el objetivo de especializarme en arquitecturas
              modernas y desarrollo de software de alto impacto.
            </p>
          </motion.div>
          <motion.div
            id="tecnologias"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mt-24 scroll-mt-32"
          >

            <h2 className="text-2xl font-bold border-b border-gray-700 pb-2 inline-block">
              TECNOLOGIAS
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
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mt-28"
          >
            <h2 className="text-2xl font-bold border-b border-gray-700 pb-2 inline-block">
              PROYECTOS
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  name: "Sistema ERP",
                  image: "/images/erp.jpg",
                  url: "https://tusitio-erp.com",
                  description:
                    "Sistema ERP empresarial para gestión de inventario, facturación y control administrativo. Desarrollado con enfoque en escalabilidad y arquitectura modular. Actualmente no tengo acceso",
                },
                {
                  name: "App Web Empresarial",
                  image: "/images/appweb.jpg",
                  url: "https://ramedicas.com",
                  description:
                    "Aplicación web corporativa enfocada en presencia digital y optimización, priorizando rendimiento y experiencia de usuario.",
                },
                {
                  name: "Proyecto Personal",
                  image: "/images/mascotas.jpg",
                  url: "https://github.com/jonathandq21/MascotWeb/tree/master",
                  description:
                    "Proyecto personal orientado a gestión de mascotas, aplicando buenas prácticas de desarrollo frontend",
                },
              ].map((project) => (
                <div
                  key={project.name}
                  className="bg-[#141414] rounded-xl border border-gray-800 
                 hover:border-blue-500 transition hover:shadow-lg 
                 hover:shadow-blue-500/20 overflow-hidden"
                >
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    <div className="overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-48 object-cover transition duration-500 hover:scale-110"
                      />
                    </div>
                  </a>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-3">
                      {project.name}
                    </h3>

                    <p className="text-gray-400 text-sm">
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div id="experiencia" className="mt-32 scroll-mt-32">
              <h2 className="text-2xl font-bold border-b border-gray-700 pb-2 inline-block">
                EXPERIENCIA
              </h2>
              <div className="mt-14 space-y-16">
                <div className="flex flex-col md:flex-row justify-between gap-6">

                  <div className="md:w-3/4">
                    <h3 className="text-xl font-semibold text-blue-400">
                      Ramedicas SAS – Bucaramanga, Colombia
                    </h3>
                    <ul className="mt-4 space-y-3 text-gray-400 text-sm leading-relaxed list-disc pl-5">
                      <li>
                        Participación en el análisis, diseño y desarrollo de sistemas empresariales personalizados bajo metodologías ágiles.
                      </li>
                      <li>
                        Levantamiento de requerimientos y desarrollo de soluciones escalables alineadas a las necesidades del negocio.
                      </li>
                      <li>
                        Mantenimiento, actualización y optimización de sistemas existentes garantizando estabilidad y seguridad de la información.
                      </li>
                      <li>
                        Administración de servidores de telefonía VOIP (Issabel y Asterisk) y configuración de redes locales.
                      </li>
                      <li>
                        Ejecución de pruebas, identificación y corrección de errores, reduciendo fallos posteriores al despliegue.
                      </li>
                    </ul>
                  </div>
                  <div className="text-gray-500 text-sm whitespace-nowrap">
                    Mayo 2023 – Mayo 2025
                  </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between gap-6">

                  <div className="md:w-3/4">
                    <h3 className="text-xl font-semibold text-blue-400">
                      World Digital Solutions SAS – Colombia
                    </h3>
                    <ul className="mt-4 space-y-3 text-gray-400 text-sm leading-relaxed list-disc pl-5">
                      <li>
                        Integración en equipos de desarrollo ágil contribuyendo a la entrega oportuna de proyectos tecnológicos.
                      </li>
                      <li>
                        Mantenimiento y actualización de sistemas, aplicando parches de seguridad y solucionando incidencias técnicas.
                      </li>
                      <li>
                        Ejecución de pruebas de software y análisis de errores para mejorar la confiabilidad del sistema.
                      </li>
                      <li>
                        Elaboración de documentación técnica y manuales de usuario para facilitar el mantenimiento y soporte.
                      </li>
                    </ul>
                  </div>
                  <div className="text-gray-500 text-sm whitespace-nowrap">
                    Agosto 2022 – Marzo 2023
                  </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between gap-6">
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-semibold text-blue-400">
                      Técnico en Soporte TI (Autónomo) – Colombia
                    </h3>
                    <ul className="mt-4 space-y-3 text-gray-400 text-sm leading-relaxed list-disc pl-5">
                      <li>
                        Mantenimiento preventivo y correctivo de equipos de cómputo y sistemas operativos.
                      </li>
                      <li>
                        Gestión de incidencias técnicas y optimización del rendimiento de equipos tecnológicos.
                      </li>
                      <li>
                        Soporte a usuarios garantizando continuidad operativa y estabilidad de los sistemas.
                      </li>
                    </ul>
                  </div>
                  <div className="text-gray-500 text-sm whitespace-nowrap">
                    Diciembre 2018 – Diciembre 2021
                  </div>
                </div>
              </div>
            </div>
            <div id="educacion" className="mt-32 scroll-mt-32">
              <h2 className="text-2xl font-bold border-b border-gray-700 pb-2 inline-block">
                EDUCACIÓN
              </h2>
              <div className="mt-14 space-y-16">
                <div className="flex flex-col md:flex-row justify-between gap-6">
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-semibold text-blue-400">
                      Ingeniería de Sistemas – Unidades Tecnológicas de Santander (UTS)
                    </h3>
                    <ul className="mt-4 space-y-3 text-gray-400 text-sm leading-relaxed list-disc pl-5">
                      <li>
                        Formación en desarrollo de software, bases de datos, estructuras de datos y arquitectura de sistemas.
                      </li>
                      <li>
                        Enfoque en metodologías ágiles, análisis de requerimientos y diseño de soluciones tecnológicas.
                      </li>
                    </ul>
                  </div>
                  <div className="text-gray-500 text-sm whitespace-nowrap">
                    2025 – Actualidad
                  </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between gap-6">
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-semibold text-blue-400">
                      Tecnología en Desarrollo de Sistemas Informáticos – UTS
                    </h3>
                    <ul className="mt-4 space-y-3 text-gray-400 text-sm leading-relaxed list-disc pl-5">
                      <li>
                        Desarrollo de aplicaciones web y de escritorio aplicando buenas prácticas de programación.
                      </li>
                      <li>
                        Gestión y modelado de bases de datos relacionales.
                      </li>
                    </ul>
                  </div>
                  <div className="text-gray-500 text-sm whitespace-nowrap">
                    2022 – 2025
                  </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between gap-6">
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-semibold text-blue-400">
                      Técnico en Mantenimiento de Equipos de Cómputo – SENA
                    </h3>
                    <ul className="mt-4 space-y-3 text-gray-400 text-sm leading-relaxed list-disc pl-5">
                      <li>
                        Diagnóstico, mantenimiento preventivo y correctivo de hardware y software.
                      </li>
                      <li>
                        Configuración de sistemas operativos y soporte técnico a usuarios.
                      </li>
                    </ul>
                  </div>
                  <div className="text-gray-500 text-sm whitespace-nowrap">
                    2016 – 2018
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <Footer />
      </div>
    </>
  );
}
