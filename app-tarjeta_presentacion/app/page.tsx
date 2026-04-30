'use client'

import TarjetasPersonas from "@/component/TarjetasPersonas";
import { Personas } from "@/models/Personas";
import { useEffect, useState } from "react";

export default function Home() {
  const [personas, setPersonas] = useState<Personas[]>([]);

  const datos = [
    { id: 1, nombre: "Juan", ocupacion: "Doctor", pais: "Honduras" },
    { id: 2, nombre: "Marlon", ocupacion: "Programador", pais: "Japon" },
    { id: 3, nombre: "Pedro", ocupacion: "Marketing", pais: "España" },
    { id: 4, nombre: "Roberto", ocupacion: "Fisica", pais: "Francia" },
    { id: 5, nombre: "Sindy", ocupacion: "Mercadeo", pais: "Rusia" }
  ];

  useEffect(() => {
    setPersonas(datos);
  }, []);

  return (
    <div className="flex items-center justify-center bg-zinc-50 font-sans">
      <main className="flex flex-col items-center py-32 px-16 bg-whitesm:items-start">
        <h1 className="text-2xl font-bold mb-6 text-white bg-blue-950 p-5 rounded-2xl">Tarjeta de personas</h1>

        <TarjetasPersonas listaPersonas={personas} />
      </main>
    </div>
  );
}