"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TechCarousel from "@/components/TechCarousel";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion, Variants } from "framer-motion";

export default function Home() {
  const fadeUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};


  return (
    <>
      <Header />

      <main className="flex-1 bg-gray-50 text-gray-900 py-24">

        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl mx-auto px-6 text-center"
        >
          <h1 className="text-5xl font-bold leading-tight">
            Jonathan David Quintero Villamizar
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            Desarrollador de Software — Bucaramanga, Colombia
          </p>

          <div className="mt-8 flex justify-center gap-6 text-2xl">
            <a
              href="https://github.com/jonathandq21"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition-transform hover:scale-110"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/jonathan-david-quintero-villamizar-488b54365"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-transform hover:scale-110"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.section>

        {/* ABOUT */}
        <motion.section
          id="about"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl mx-auto px-6 mt-20 text-center scroll-mt-40"
        >
          <h2 className="text-2xl font-semibold">Sobre mí</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Desarrollador apasionado por la tecnología y el aprendizaje
            continuo. Actualmente cursando Ingeniería de Sistemas.
            Experiencia en desarrollo web, mantenimiento de sistemas,
            optimización de bases de datos y trabajo bajo metodologías ágiles.
            Me caracterizo por mi pensamiento lógico, adaptación rápida y
            compromiso con la calidad del software.
          </p>
        </motion.section>

        {/* TECH */}
        <motion.section
          id="tech"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl mx-auto px-6 mt-20 text-center"
        >
          <h2 className="text-2xl font-semibold">Tecnologías principales</h2>
          <TechCarousel />
        </motion.section>

        {/* IA TOOLS */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-3xl mx-auto px-6 mt-20 text-center"
        >
          <h2 className="text-2xl font-semibold">
            Herramientas de IA utilizadas
          </h2>

          <p className="mt-4 text-gray-600">
            Copilot para estructuración de arquitectura, generación de código
            base y optimización.
          </p>
        </motion.section>

      </main>

      <Footer />
    </>
  );
}

/*import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the page.tsx file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
*/