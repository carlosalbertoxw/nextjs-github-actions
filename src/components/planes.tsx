"use client";

import Link from "next/link";
import { useState } from "react";

// Conmutador mensual / anual y las tarjetas de plan.
// Comparten estado, asi que viven en el mismo componente aunque el maquetado
// los reparta en dos secciones.

type Periodo = "mensual" | "anual";

const formateador = new Intl.NumberFormat("es-ES");

const IMPORTES = {
  inicio: { mensual: 290, anual: 232 },
  equipo: { mensual: 740, anual: 592 },
} as const;

const NOTA = {
  mensual: "Facturado mensualmente",
  anual: "Facturado anualmente · 20 % de descuento",
} as const;

export function Planes() {
  const [periodo, setPeriodo] = useState<Periodo>("mensual");

  const opcion = (valor: Periodo) => ({
    type: "button" as const,
    className: valor === periodo ? "conmutador__opcion es-activa" : "conmutador__opcion",
    "aria-pressed": valor === periodo,
    onClick: () => setPeriodo(valor),
  });

  return (
    <>
      <section className="portada">
        <div className="contenedor contenedor--estrecho">
          <p className="antetitulo">Precios</p>
          <h1>Precio publico, sin llamada previa</h1>
          <p className="entradilla">
            Todos los planes incluyen paneles ilimitados y actualizaciones. Cifras ficticias,
            solo para la demo.
          </p>

          <div className="conmutador" role="group" aria-label="Periodo de facturacion">
            <button {...opcion("mensual")}>Mensual</button>
            <button {...opcion("anual")}>
              Anual <span className="pastilla">-20 %</span>
            </button>
          </div>
        </div>
      </section>

      <section className="seccion seccion--sin-tope">
        <div className="contenedor">
          <div className="rejilla rejilla--3 rejilla--planes">
            <article className="plan" data-revelar>
              <h2 className="plan__nombre">Inicio</h2>
              <p className="plan__descripcion">Para un equipo que empieza a medir en serio.</p>
              <p className="plan__precio">
                <span className="plan__moneda">€</span>
                <span>{formateador.format(IMPORTES.inicio[periodo])}</span>
                <span className="plan__periodo">/ mes</span>
              </p>
              <p className="plan__nota">{NOTA[periodo]}</p>
              <Link className="boton boton--fantasma boton--bloque" href="/contacto">
                Empezar prueba
              </Link>
              <ul className="lista-marcas">
                <li>Hasta 10 usuarios</li>
                <li>5 conectores</li>
                <li>Paneles ilimitados</li>
                <li>Actualizacion diaria de datos</li>
                <li>Soporte por correo</li>
              </ul>
            </article>

            <article className="plan plan--destacado" data-revelar>
              <p className="plan__insignia">El mas contratado</p>
              <h2 className="plan__nombre">Equipo</h2>
              <p className="plan__descripcion">
                Cuando varias areas dependen de los mismos numeros.
              </p>
              <p className="plan__precio">
                <span className="plan__moneda">€</span>
                <span>{formateador.format(IMPORTES.equipo[periodo])}</span>
                <span className="plan__periodo">/ mes</span>
              </p>
              <p className="plan__nota">{NOTA[periodo]}</p>
              <Link className="boton boton--primario boton--bloque" href="/contacto">
                Pedir una demo
              </Link>
              <ul className="lista-marcas">
                <li>Hasta 50 usuarios</li>
                <li>20 conectores</li>
                <li>Modelado de indicadores incluido</li>
                <li>Actualizacion cada hora</li>
                <li>Alertas en Slack y Teams</li>
                <li>Canal de soporte compartido</li>
              </ul>
            </article>

            <article className="plan" data-revelar>
              <h2 className="plan__nombre">Corporativo</h2>
              <p className="plan__descripcion">Varias sedes, auditoria y requisitos propios.</p>
              <p className="plan__precio plan__precio--texto">A medida</p>
              <p className="plan__nota">Contrato anual</p>
              <Link className="boton boton--fantasma boton--bloque" href="/contacto">
                Hablar con ventas
              </Link>
              <ul className="lista-marcas">
                <li>Usuarios ilimitados</li>
                <li>Conectores a medida</li>
                <li>Actualizacion en tiempo real</li>
                <li>Inicio de sesion unico (SSO)</li>
                <li>Registro de auditoria</li>
                <li>Acuerdo de nivel de servicio firmado</li>
              </ul>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
