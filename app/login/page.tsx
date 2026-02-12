"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import Image from "next/image";

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
    <div className="min-h-screen flex">
      {/* Lado izquierdo - Formulario */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-12 bg-white">
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
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Contraseña"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              onClick={handleLogin}
              className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
            >
              Ingresar al sistema
            </button>
          </div>
        </div>
      </div>

      {/* Lado derecho - Imagen */}
      <div className="hidden lg:block lg:w-1/2 relative bg-gray-900">
        {/* Aquí va tu imagen */}
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
      </div>
    </div>
  );
}
