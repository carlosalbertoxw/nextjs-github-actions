"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Marca } from "./marca";

const ENLACES = [
  { href: "/", texto: "Inicio" },
  { href: "/servicios", texto: "Servicios" },
  { href: "/precios", texto: "Precios" },
  { href: "/casos", texto: "Casos" },
  { href: "/contacto", texto: "Contacto" },
];

// Con trailingSlash activado las rutas llegan como "/precios/"; la raiz se queda en "/".
const normalizar = (ruta: string) => ruta.replace(/\/+$/, "") || "/";

export function Cabecera() {
  const [abierta, setAbierta] = useState(false);
  const ruta = normalizar(usePathname());

  // Si se vuelve a escritorio, el menu desplegable deja de tener sentido.
  useEffect(() => {
    const consulta = window.matchMedia("(min-width: 761px)");
    const cerrar = () => setAbierta(false);

    consulta.addEventListener("change", cerrar);
    return () => consulta.removeEventListener("change", cerrar);
  }, []);

  useEffect(() => {
    const alPulsarTecla = (evento: KeyboardEvent) => {
      if (evento.key === "Escape") setAbierta(false);
    };

    document.addEventListener("keydown", alPulsarTecla);
    return () => document.removeEventListener("keydown", alPulsarTecla);
  }, []);

  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>

      <header className="cabecera">
        <div className="contenedor cabecera__interior">
          <Marca />

          <button
            className="nav-toggle"
            type="button"
            aria-expanded={abierta}
            aria-controls="nav-principal"
            onClick={() => setAbierta((estaba) => !estaba)}
          >
            <span className="visualmente-oculto">{abierta ? "Cerrar menu" : "Abrir menu"}</span>
            <span className="nav-toggle__icono" aria-hidden="true" />
          </button>

          {/* Cerrar al navegar, tanto entre paginas como a un ancla de la misma. */}
          <nav
            className={abierta ? "nav es-abierta" : "nav"}
            id="nav-principal"
            aria-label="Navegacion principal"
            onClick={(evento) => {
              if ((evento.target as HTMLElement).closest("a")) setAbierta(false);
            }}
          >
            <ul className="nav__lista">
              {ENLACES.map((enlace) => (
                <li key={enlace.href}>
                  <Link
                    href={enlace.href}
                    aria-current={ruta === enlace.href ? "page" : undefined}
                  >
                    {enlace.texto}
                  </Link>
                </li>
              ))}
            </ul>
            <Link className="boton boton--primario boton--sm" href="/contacto">
              Pedir una demo
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
