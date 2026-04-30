'use client'

import IdiomaIngles from "@/component/IdiomaIngles"
import { useState, useEffect} from "react";
import Image from "next/image";
import IdiomaEspaniol from "@/component/IdiomaEspaniol"


export default function home() {
  const listaIdiomas = [
  { es: "Casa", en: "House" },
  { es: "Perro", en: "Dog" },
  { es: "Comida", en: "Food" },
  { es: "Escuela", en: "School" },
  { es: "Juego", en: "Game" },
  { es: "Gato", en: "Cat" },
  { es: "Teclado", en: "Keyboard" },
  { es: "Mochila", en: "Backpack" },
  { es: "Agua", en: "Water" },
  { es: "Dormir", en: "Sleep" }
  ]
  
  const [idioma, setIdioma] = useState<"es" | "en">("es");
    const [lista, setLista] = useState<string[]>([]);

      useEffect(() => {
    setLista(listaIdiomas.map((p) => p[idioma]));
  }, [idioma]);

  
  return (
    <div className="flex items-center justify-center bg-white">
      <main className="flex w-full max-w-3xl items-center justify-between py-32 px-16 sm:items-start">
       
        <div className="items-center">
          <h1 className="text-3xl font-semibold text-black">
            Bienvenido a tu traductor de confianza
          </h1>

        <ul className="text-black">
        {lista.map((idioma, idiomas) => (
          <li key={idiomas}>{idioma}</li>
        ))}
      </ul>
      <div className="space-x-2">  
      <IdiomaIngles setIdioma={setIdioma}/>
      <IdiomaEspaniol setIdioma={setIdioma}/>
      </div>
        </div>
      </main>
    </div>
  );
}
