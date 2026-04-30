import { ListadoPersonas } from "@/models/ListadoPersonas";

export default function TarjetasPersonas({ listaPersonas }: ListadoPersonas) {
  return (
    <div className=" flex ">
      <div className="flex flex-wrap gap-7 justify-center ">
        {listaPersonas.map((p) => (
          <div
            key={p.id}
            className="w-64 rounded-2xl bg-zinc-700 backdrop-blur-md border border-white/30 dark:border-zinc-700 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 p-6"
          >
            <h2 className="text-center text-lg font-semibold text-white mb-2">
              {p.nombre}
            </h2>

            <div className="text-sm space-y-2 text-center text-white">
              <p>
                <span className="font-medium text-white">
                  Ocupación:
                </span>{" "}
                {p.ocupacion}
              </p>

              <p>
                <span className="font-medium text-white">
                  País:
                </span>{" "}
                {p.pais}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}