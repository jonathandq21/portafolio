"use client";

import { motion } from "framer-motion";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.replace("/login");
  };

  const links = [
    { name: "Acerca de mí", id: "acerca" },
    { name: "Tecnologías", id: "tecnologias" },
    { name: "Experiencia", id: "experiencia" },
    { name: "Educación", id: "educacion" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full bg-[#0a0a0a]/80 backdrop-blur-md border-b border-gray-800 z-50"
    >
      <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="font-semibold text-lg tracking-wide text-white">
          Jonathan.dev
        </h1>

        <nav className="flex gap-6 text-sm text-gray-400">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="hover:text-blue-400 transition"
            >
              {link.name}
            </button>
          ))}
        </nav>
        <button
          onClick={handleLogout}
          className="ml-6 relative overflow-hidden px-5 py-2 text-sm font-medium 
             rounded-full border border-gray-700 
             text-gray-300 bg-white/5 backdrop-blur-md
             transition-all duration-300
             hover:border-blue-500 hover:text-blue-400
             group"
        >
          <span className="relative z-10">Cerrar sesión</span>

          <span className="absolute left-[-75%] top-0 h-full w-1/2 
                   bg-blue-500/10 rotate-12 blur-lg 
                   group-hover:left-[125%] 
                   transition-all duration-1000 ease-in-out">
          </span>
        </button>


      </div>
    </motion.header>
  );
}
