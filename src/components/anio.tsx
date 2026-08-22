"use client";

import { useSyncExternalStore } from "react";

// El sitio es estatico: si calculamos el ano al construir, se queda congelado en
// la fecha del despliegue. Lo leemos del navegador para no tocarlo cada enero.
//
// El reloj no emite eventos, asi que la suscripcion no hace nada: solo nos
// interesa que React tome el valor del cliente despues de hidratar.
const sinCambios = () => () => {};
const enElNavegador = () => new Date().getFullYear();
const enElServidor = () => null;

export function Anio() {
  const anio = useSyncExternalStore(sinCambios, enElNavegador, enElServidor);

  return <span>{anio}</span>;
}
