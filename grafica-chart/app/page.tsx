import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <Link href="/PromedioCategoria">Categoria por Promedio</Link>
      <Link href="/Max&MinProduct">Maximo y Minimo Productos</Link>
      <Link href="/SumaProducto">Suma de Productos</Link>
    </div>
  );
}
