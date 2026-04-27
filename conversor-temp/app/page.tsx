import Image from "next/image";
import Saludo from "../componentes/Saludo";
import Conversor from "@/componentes/Conversor";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-gray-900">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center py-32 px-16 sm:items-start gap-5">
        <h1 className=" text-2xl font-black text-center">Bienvenido a tu convertidor de temperaturas</h1>
        <Saludo nombre='Marlon' apellido='Matinez' ></Saludo>
        <Conversor centigrado={23} Fahrenheit={200}></Conversor>
      </main>
    </div>
  );
}
