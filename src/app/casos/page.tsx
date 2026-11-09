import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Casos de éxito",
  description:
    "Tres implantaciones de ejemplo con su contexto, su solución y sus resultados. Empresas y cifras ficticias.",
};

export default function Casos() {
  return (
    <>
      <section className="portada">
        <div className="contenedor contenedor--estrecho">
          <p className="antetitulo">Casos de éxito</p>
          <h1>Tres implantaciones contadas de principio a fin</h1>
          <p className="entradilla">
            Empresas, personas y cifras inventadas para esta demostración. La estructura sí es la
            que usaríamos en un caso real: contexto, problema, solución y resultado.
          </p>
        </div>
      </section>

      <section className="seccion">
        <div className="contenedor">
          <article className="caso" data-revelar>
            <div className="caso__lateral">
              <p className="caso__sector">Logística · 340 empleados</p>
              <h2>Nordvia</h2>
              <p className="caso__resumen">
                Reduce un 32 % las incidencias de entrega tras unificar cuatro sistemas de
                seguimiento en un solo panel.
              </p>
              <dl className="caso__metricas">
                <div>
                  <dt>Incidencias</dt>
                  <dd>-32 %</dd>
                </div>
                <div>
                  <dt>Puesta en marcha</dt>
                  <dd>11 días</dd>
                </div>
                <div>
                  <dt>Horas/semana ahorradas</dt>
                  <dd>24</dd>
                </div>
              </dl>
            </div>
            <div className="caso__cuerpo">
              <h3>El punto de partida</h3>
              <p>
                Cada delegación llevaba su propio registro de entregas. Las cifras de la reunión
                del lunes nunca cuadraban y el debate se iba en discutir la fuente en vez de la
                causa.
              </p>
              <h3>Que hicimos</h3>
              <p>
                Conectamos los cuatro sistemas de seguimiento y acordamos una única definición de{" "}
                <em>entrega a tiempo</em>, firmada por operaciones y por atención al cliente.
                Sobre esa base montamos alertas por ruta con aviso al responsable de turno.
              </p>
              <h3>Resultado</h3>
              <p>
                A los tres meses las incidencias bajaron un 32 % y el comité pasó de revisar cifras
                a revisar decisiones. La reunión del lunes dura ahora la mitad.
              </p>
            </div>
          </article>

          <article className="caso" data-revelar>
            <div className="caso__lateral">
              <p className="caso__sector">Industria · 120 empleados</p>
              <h2>Talleres Bruma</h2>
              <p className="caso__resumen">
                Pasa de un cierre de mes de nueve días a uno de dos, eliminando la consolidación
                manual entre plantas.
              </p>
              <dl className="caso__metricas">
                <div>
                  <dt>Cierre de mes</dt>
                  <dd>9 → 2 días</dd>
                </div>
                <div>
                  <dt>Ficheros eliminados</dt>
                  <dd>17</dd>
                </div>
                <div>
                  <dt>Retorno estimado</dt>
                  <dd>7 meses</dd>
                </div>
              </dl>
            </div>
            <div className="caso__cuerpo">
              <h3>El punto de partida</h3>
              <p>
                Dos plantas, dos maneras de contar la producción y diecisiete hojas de cálculo
                enlazadas entre sí. Cuando alguien renombraba una pestaña, el cierre se caía.
              </p>
              <h3>Que hicimos</h3>
              <p>
                Sustituimos la cadena de ficheros por cargas programadas desde el sistema de planta
                y dejamos las reglas de cálculo versionadas, con historial de quién cambia qué.
              </p>
              <h3>Resultado</h3>
              <p>
                El cierre bajo de nueve días a dos. El equipo de administración dedica ese tiempo a
                analizar desviaciones en lugar de a copiar celdas.
              </p>
            </div>
          </article>

          <article className="caso" data-revelar>
            <div className="caso__lateral">
              <p className="caso__sector">Retail · 90 tiendas</p>
              <h2>Onda Verde</h2>
              <p className="caso__resumen">
                Detecta roturas de stock el mismo día en lugar de la semana siguiente, con alertas
                por tienda.
              </p>
              <dl className="caso__metricas">
                <div>
                  <dt>Roturas de stock</dt>
                  <dd>-41 %</dd>
                </div>
                <div>
                  <dt>Aviso</dt>
                  <dd>Mismo día</dd>
                </div>
                <div>
                  <dt>Tiendas conectadas</dt>
                  <dd>90</dd>
                </div>
              </dl>
            </div>
            <div className="caso__cuerpo">
              <h3>El punto de partida</h3>
              <p>
                El informe de stock llegaba los martes con datos del viernes anterior. Para cuando
                alguien reaccionaba, la venta perdida ya no se recuperaba.
              </p>
              <h3>Que hicimos</h3>
              <p>
                Carga horaria desde el sistema de tienda y un umbral por referencia y ubicación.
                Cuando se cruza, el encargado recibe el aviso en el móvil con el pedido sugerido.
              </p>
              <h3>Resultado</h3>
              <p>
                Las roturas de stock cayeron un 41 % en el primer trimestre y la reposición dejó de
                depender de que alguien mirase el informe a tiempo.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="seccion seccion--alterna">
        <div className="contenedor contenedor--estrecho">
          <figure className="cita" data-revelar>
            <blockquote>
              Lo que más valoramos no fue el panel, sino que por fin nos obligaran a ponernos de
              acuerdo en cómo se calcula cada cosa.
            </blockquote>
            <figcaption>
              <span className="cita__avatar" aria-hidden="true">
                JD
              </span>
              <span>
                <strong>Julio Deniz</strong>
                Responsable de planta, Talleres Bruma
              </span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="cta">
        <div className="contenedor cta__interior" data-revelar>
          <div>
            <h2>¿Tu caso se parece a alguno de estos?</h2>
            <p>Te contamos en 30 minutos cómo lo abordaríamos.</p>
          </div>
          <Link className="boton boton--claro" href="/contacto">
            Pedir una demo
          </Link>
        </div>
      </section>
    </>
  );
}
