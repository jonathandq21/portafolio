"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();

      if (!data.user) {
        router.push("/login");
      } else {
        setUser(data.user);
      }
    };

    getUser();
  }, []);

  if (!user) return null;

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Zona protegida</h1>

      <div className="mt-6">
        <p><strong>Email:</strong> jonathandq21@email.com</p>
        <p><strong>WhatsApp:</strong> +57 3006472911</p>

        <h2 className="mt-6 text-xl font-semibold">Sobre mí</h2>
        <p>
          Agregar Informacion.
        </p>
      </div>
    </div>
  );
}
