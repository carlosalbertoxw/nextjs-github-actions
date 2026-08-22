import type { Metadata } from "next";
import Link from "next/link";
import { FormularioContacto } from "@/components/formulario-contacto";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Formulario de contacto de demostracion, datos de la oficina y preguntas frecuentes. Contenido ficticio.",
};

const FAQ = [
  {
    pregunta: "Cuanto tarda una implantacion tipica?",
    respuesta:
      "Entre dos y cuatro semanas desde la sesion de diagnostico, segun cuantos sistemas haya que conectar y en que estado esten los datos.",
    abierta: true,
  },
  {
    pregunta: "Necesito un equipo de datos propio?",
    respuesta:
      "No. La mayoria de nuestros clientes de demostracion no tienen uno. Si lo tienes, trabajamos con el y le dejamos el control del modelado.",
  },
  {
    pregunta: "Donde se alojan los datos?",
    respuesta:
      "En centros de datos de la Union Europea. En el plan Corporativo se puede desplegar en tu propia infraestructura.",
  },
  {
    pregunta: "Se puede exportar todo si dejamos de ser clientes?",
    respuesta:
      "Si, en cualquier momento y sin coste: datos, definiciones de indicadores e historico completo.",
  },
];

export default function Contacto() {
  return (
    <>
      <section className="portada">
        <div className="contenedor contenedor--estrecho">
          <p className="antetitulo">Contacto</p>
          <h1>Hablamos 30 minutos</h1>
          <p className="entradilla">
            Cuentanos que proceso quieres medir. Respondemos en menos de un dia habil.
          </p>
        </div>
      </section>

      <section className="seccion seccion--sin-tope">
        <div className="contenedor">
          <div className="contacto">
            <FormularioContacto />

            <aside className="contacto__lateral" data-revelar>
              <div className="cuadro">
                <h2>Otras vias</h2>
                <ul className="lista-contacto">
                  <li>
                    <span className="lista-contacto__etiqueta">Correo</span>
                    <a href="mailto:hola@cauce.example">hola@cauce.example</a>
                  </li>
                  <li>
                    <span className="lista-contacto__etiqueta">Telefono</span>
                    <a href="tel:+34900000000">+34 900 000 000</a>
                  </li>
                  <li>
                    <span className="lista-contacto__etiqueta">Soporte de clientes</span>
                    <a href="mailto:soporte@cauce.example">soporte@cauce.example</a>
                  </li>
                </ul>
              </div>

              <div className="cuadro">
                <h2>Oficina</h2>
                <p className="cuadro__texto">
                  Calle Ejemplo 000
                  <br />
                  28000 Madrid
                  <br />
                  Espana
                </p>
                <p className="cuadro__texto cuadro__texto--tenue">
                  Lunes a viernes, de 9:00 a 18:00 (CET)
                </p>
              </div>

              <div className="cuadro cuadro--acento">
                <h2>Prefieres verlo directamente?</h2>
                <p className="cuadro__texto">
                  Reserva una demo de 30 minutos sobre un proceso real tuyo. Sin presentacion
                  generica.
                </p>
                <Link className="boton boton--primario boton--bloque boton--sm" href="/precios">
                  Ver planes
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="seccion seccion--alterna" id="faq">
        <div className="contenedor contenedor--estrecho">
          <header className="seccion__cabecera" data-revelar>
            <p className="antetitulo">Preguntas frecuentes</p>
            <h2>Antes de escribirnos</h2>
          </header>

          <div className="faq" data-revelar>
            {FAQ.map((entrada) => (
              <details key={entrada.pregunta} open={entrada.abierta}>
                <summary>{entrada.pregunta}</summary>
                <p>{entrada.respuesta}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
