import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Casos de exito",
  description:
    "Tres implantaciones de ejemplo con su contexto, su solucion y sus resultados. Empresas y cifras ficticias.",
};

export default function Casos() {
  return (
    <>
      <section className="portada">
        <div className="contenedor contenedor--estrecho">
          <p className="antetitulo">Casos de exito</p>
          <h1>Tres implantaciones contadas de principio a fin</h1>
          <p className="entradilla">
            Empresas, personas y cifras inventadas para esta demostracion. La estructura si es la
            que usariamos en un caso real: contexto, problema, solucion y resultado.
          </p>
        </div>
      </section>

      <section className="seccion">
        <div className="contenedor">
          <article className="caso" data-revelar>
            <div className="caso__lateral">
              <p className="caso__sector">Logistica · 340 empleados</p>
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
                  <dd>11 dias</dd>
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
                Cada delegacion llevaba su propio registro de entregas. Las cifras de la reunion
                del lunes nunca cuadraban y el debate se iba en discutir la fuente en vez de la
                causa.
              </p>
              <h3>Que hicimos</h3>
              <p>
                Conectamos los cuatro sistemas de seguimiento y acordamos una unica definicion de{" "}
                <em>entrega a tiempo</em>, firmada por operaciones y por atencion al cliente.
                Sobre esa base montamos alertas por ruta con aviso al responsable de turno.
              </p>
              <h3>Resultado</h3>
              <p>
                A los tres meses las incidencias bajaron un 32 % y el comite paso de revisar cifras
                a revisar decisiones. La reunion del lunes dura ahora la mitad.
              </p>
            </div>
          </article>

          <article className="caso" data-revelar>
            <div className="caso__lateral">
              <p className="caso__sector">Industria · 120 empleados</p>
              <h2>Talleres Bruma</h2>
              <p className="caso__resumen">
                Pasa de un cierre de mes de nueve dias a uno de dos, eliminando la consolidacion
                manual entre plantas.
              </p>
              <dl className="caso__metricas">
                <div>
                  <dt>Cierre de mes</dt>
                  <dd>9 → 2 dias</dd>
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
                Dos plantas, dos maneras de contar la produccion y diecisiete hojas de calculo
                enlazadas entre si. Cuando alguien renombraba una pestana, el cierre se caia.
              </p>
              <h3>Que hicimos</h3>
              <p>
                Sustituimos la cadena de ficheros por cargas programadas desde el sistema de planta
                y dejamos las reglas de calculo versionadas, con historial de quien cambia que.
              </p>
              <h3>Resultado</h3>
              <p>
                El cierre bajo de nueve dias a dos. El equipo de administracion dedica ese tiempo a
                analizar desviaciones en lugar de a copiar celdas.
              </p>
            </div>
          </article>

          <article className="caso" data-revelar>
            <div className="caso__lateral">
              <p className="caso__sector">Retail · 90 tiendas</p>
              <h2>Onda Verde</h2>
              <p className="caso__resumen">
                Detecta roturas de stock el mismo dia en lugar de la semana siguiente, con alertas
                por tienda.
              </p>
              <dl className="caso__metricas">
                <div>
                  <dt>Roturas de stock</dt>
                  <dd>-41 %</dd>
                </div>
                <div>
                  <dt>Aviso</dt>
                  <dd>Mismo dia</dd>
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
                Carga horaria desde el sistema de tienda y un umbral por referencia y ubicacion.
                Cuando se cruza, el encargado recibe el aviso en el movil con el pedido sugerido.
              </p>
              <h3>Resultado</h3>
              <p>
                Las roturas de stock cayeron un 41 % en el primer trimestre y la reposicion dejo de
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
              Lo que mas valoramos no fue el panel, sino que por fin nos obligaran a ponernos de
              acuerdo en como se calcula cada cosa.
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
            <h2>Tu caso se parece a alguno de estos?</h2>
            <p>Te contamos en 30 minutos como lo abordariamos.</p>
          </div>
          <Link className="boton boton--claro" href="/contacto">
            Pedir una demo
          </Link>
        </div>
      </section>
    </>
  );
}
