'use client'
import TarjetasPersonas from "@/component/TarjetasPersonas";
import Image from "next/image";

const persona = [
     {id: 1, nombre: 'Juan', ocupacion:"Doctor", pais:"Honduras"}, 
     {id: 2, nombre: 'Marlon', ocupacion:"Programador", pais:"Japon"},
     {id: 3, nombre: 'Pedro', ocupacion:"Marketing", pais:"España"} 
]


export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1>Hola</h1>
        <TarjetasPersonas/>
      </main>
    </div>
  );
}
