"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Aparicion progresiva de los bloques marcados con [data-revelar].
// Respeta prefers-reduced-motion y degrada mostrandolo todo si no hay soporte.
//
// Se monta una sola vez en el layout y se vuelve a enganchar en cada navegacion,
// asi las paginas siguen siendo componentes de servidor sin envoltorios extra.
export function Revelado() {
  const ruta = usePathname();

  useEffect(() => {
    const elementos = document.querySelectorAll("[data-revelar]");
    if (elementos.length === 0) return;

    const sinMovimiento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (sinMovimiento || !("IntersectionObserver" in window)) {
      elementos.forEach((elemento) => elemento.classList.add("es-visible"));
      return;
    }

    const observador = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (!entrada.isIntersecting) return;
          entrada.target.classList.add("es-visible");
          observador.unobserve(entrada.target);
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );

    elementos.forEach((elemento) => observador.observe(elemento));

    return () => observador.disconnect();
  }, [ruta]);

  return null;
}
