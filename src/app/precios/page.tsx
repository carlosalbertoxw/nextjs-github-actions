import type { Metadata } from "next";
import Link from "next/link";
import { Planes } from "@/components/planes";

export const metadata: Metadata = {
  title: "Precios",
  description:
    "Tres planes con precio público y comparativa detallada. Cifras ficticias de demostración.",
};

const COMPARATIVA = [
  { caracteristica: "Usuarios", inicio: "10", equipo: "50", corporativo: "Ilimitados" },
  { caracteristica: "Conectores", inicio: "5", equipo: "20", corporativo: "A medida" },
  {
    caracteristica: "Frecuencia de actualización",
    inicio: "Diaria",
    equipo: "Cada hora",
    corporativo: "Tiempo real",
  },
  {
    caracteristica: "Histórico de datos",
    inicio: "12 meses",
    equipo: "36 meses",
    corporativo: "Sin límite",
  },
  {
    caracteristica: "Modelado de indicadores",
    inicio: "—",
    equipo: "Incluido",
    corporativo: "Incluido",
  },
  { caracteristica: "Alertas por umbral", inicio: "Sí", equipo: "Sí", corporativo: "Sí" },
  {
    caracteristica: "Inicio de sesión único (SSO)",
    inicio: "—",
    equipo: "—",
    corporativo: "Sí",
  },
  { caracteristica: "Registro de auditoría", inicio: "—", equipo: "—", corporativo: "Sí" },
  {
    caracteristica: "Tiempo de respuesta de soporte",
    inicio: "48 h",
    equipo: "8 h",
    corporativo: "4 h",
  },
];

// Las celdas de si/no se colorean; las de dato suelto se dejan neutras.
const clase = (valor: string) => {
  if (valor === "—") return "no";
  if (valor === "Sí" || valor === "Incluido") return "si";
  return undefined;
};

const FAQ = [
  {
    pregunta: "¿Puedo cambiar de plan a mitad de mes?",
    respuesta:
      "Sí. El cambio se prorratea sobre los días restantes y se refleja en la siguiente factura, tanto si subes como si bajas.",
  },
  {
    pregunta: "¿Qué pasa si supero el número de usuarios?",
    respuesta:
      "Nada se bloquea. Te avisamos al llegar al 90 % y acordamos el salto de plan en la siguiente renovación.",
  },
  {
    pregunta: "¿La implantación se cobra aparte?",
    respuesta:
      "En Inicio y Equipo está incluida. En Corporativo se presupuesta según el número de sedes y sistemas a conectar.",
  },
  {
    pregunta: "¿Hay permanencia?",
    respuesta:
      "En mensual no. En anual el compromiso es de doce meses a cambio del 20 % de descuento.",
  },
];

export default function Precios() {
  return (
    <>
      <Planes />

      <section className="seccion">
        <div className="contenedor">
          <header className="seccion__cabecera" data-revelar>
            <p className="antetitulo">Comparativa</p>
            <h2>Todo lo que incluye cada plan</h2>
          </header>

          <div className="tabla-envoltorio" data-revelar>
            <table className="tabla">
              <caption className="visualmente-oculto">
                Comparativa de características entre los planes Inicio, Equipo y Corporativo
              </caption>
              <thead>
                <tr>
                  <th scope="col">Característica</th>
                  <th scope="col">Inicio</th>
                  <th scope="col">Equipo</th>
                  <th scope="col">Corporativo</th>
                </tr>
              </thead>
              <tbody>
                {COMPARATIVA.map((fila) => (
                  <tr key={fila.caracteristica}>
                    <th scope="row">{fila.caracteristica}</th>
                    <td className={clase(fila.inicio)}>{fila.inicio}</td>
                    <td className={clase(fila.equipo)}>{fila.equipo}</td>
                    <td className={clase(fila.corporativo)}>{fila.corporativo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="seccion seccion--alterna">
        <div className="contenedor contenedor--estrecho">
          <header className="seccion__cabecera" data-revelar>
            <p className="antetitulo">Dudas habituales</p>
            <h2>Sobre la facturación</h2>
          </header>

          <div className="faq" data-revelar>
            {FAQ.map((entrada) => (
              <details key={entrada.pregunta}>
                <summary>{entrada.pregunta}</summary>
                <p>{entrada.respuesta}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="contenedor cta__interior" data-revelar>
          <div>
            <h2>Prueba 14 días con tus datos</h2>
            <p>Sin tarjeta y sin llamada obligatoria de ventas.</p>
          </div>
          <Link className="boton boton--claro" href="/contacto">
            Empezar ahora
          </Link>
        </div>
      </section>
    </>
  );
}
