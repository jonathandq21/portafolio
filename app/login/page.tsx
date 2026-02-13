"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (!error) {
      router.push("/dashboard");
    } else {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex relative overflow-hidden">

      {/* Botón Volver animado */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="absolute top-6 left-6 z-50"
      >
        <button
          onClick={() => router.push("/")}
          className="relative cursor-pointer py-2 px-5 text-center font-barlow inline-flex justify-center text-sm uppercase text-white rounded-lg border-solid transition-transform duration-300 ease-in-out group outline-offset-4 focus:outline focus:outline-2 focus:outline-white focus:outline-offset-4 overflow-hidden bg-black"
        >
          <span className="relative z-20">Volver</span>

          <span className="absolute left-[-75%] top-0 h-full w-[50%] bg-white/20 rotate-12 z-10 blur-lg group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>

          <span className="w-1/2 transition-all duration-300 block border-[#D4EDF9] absolute h-[20%] rounded-tl-lg border-l-2 border-t-2 top-0 left-0"></span>
          <span className="w-1/2 transition-all duration-300 block border-[#D4EDF9] absolute group-hover:h-[90%] h-[60%] rounded-tr-lg border-r-2 border-t-2 top-0 right-0"></span>
          <span className="w-1/2 transition-all duration-300 block border-[#D4EDF9] absolute h-[60%] group-hover:h-[90%] rounded-bl-lg border-l-2 border-b-2 left-0 bottom-0"></span>
          <span className="w-1/2 transition-all duration-300 block border-[#D4EDF9] absolute h-[20%] rounded-br-lg border-r-2 border-b-2 right-0 bottom-0"></span>
        </button>
      </motion.div>

      {/* Lado izquierdo - Formulario */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full lg:w-1/2 flex flex-col justify-center px-12 bg-white"
      >
        <div className="max-w-md w-full mx-auto">
          <h1 className="text-3xl font-bold text-gray-800">
            Bienvenido
          </h1>

          <p className="mt-2 text-gray-500">
            Inicia sesión para acceder a la zona privada
          </p>

          <div className="mt-8 space-y-5">
            <input
              type="email"
              placeholder="Correo electrónico"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black transition-all duration-300 focus:scale-105"
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Contraseña"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black transition-all duration-300 focus:scale-105"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              onClick={handleLogin}
              className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition transform hover:scale-105"
            >
              Ingresar al sistema
            </button>
          </div>
        </div>
      </motion.div>

      {/* Lado derecho - Imagen */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="hidden lg:block lg:w-1/2 relative bg-gray-900"
      >
        <Image
          src="/images/login-image.jpg"
          alt="Login Image"
          fill
          className="object-cover opacity-90"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>

        <div className="absolute bottom-10 left-10 text-white">
          <h2 className="text-4xl font-bold">Zona Privada</h2>
          <p className="mt-2 text-gray-300">
            Accede a información exclusiva
          </p>
        </div>
      </motion.div>
    </div>
  );
}
