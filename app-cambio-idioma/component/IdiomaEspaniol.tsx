import { Idiomas } from "@/models/Idioma";

export default function IdiomaEspaniol(props:Idiomas 
) {
  return (
    <button className="bg-blue-950 text-white p-1 rounded-sm" onClick={() => props.setIdioma("es")}>
      Traducir al Español
    </button>
  );
}