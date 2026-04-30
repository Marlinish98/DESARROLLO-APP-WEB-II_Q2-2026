import { Idiomas } from "@/models/Idioma";

export default function IdiomaIngles(props:Idiomas 
) {
  return (
    <button className="bg-red-900 text-white p-1 rounded-sm" onClick={() => props.setIdioma("en")}>
      Traducir al Inglés
    </button>
  );
}