import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pagina no encontrada",
  robots: { index: false },
};

// Con `output: export` esta pagina se compila a out/404.html, que es justo el
// archivo que GitHub Pages sirve ante cualquier ruta desconocida.
export default function NoEncontrada() {
  return (
    <section className="portada portada--centrada">
      <div className="contenedor contenedor--estrecho">
        <p className="antetitulo">Error 404</p>
        <h1>Esta pagina no existe</h1>
        <p className="entradilla">
          El enlace puede estar mal escrito o el contenido haberse movido. GitHub Pages sirve
          este archivo automaticamente para cualquier ruta desconocida.
        </p>
        <div className="hero__acciones">
          <Link className="boton boton--primario" href="/">
            Volver al inicio
          </Link>
          <Link className="boton boton--fantasma" href="/contacto">
            Contactar
          </Link>
        </div>
      </div>
    </section>
  );
}
