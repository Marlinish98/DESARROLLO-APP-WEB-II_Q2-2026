import Image from "next/image";
import ProvidersLista from "./providers/ProvidersLista";
import FormularioLista from "./componentes/Personas/FormularioLista";
import ListadoTareas from "./componentes/Personas/ListadoTareas";


export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans bg-white text-black">

      <ProvidersLista>
      <FormularioLista/>
      <ListadoTareas/>
      </ProvidersLista>
    </div>
  );
}
