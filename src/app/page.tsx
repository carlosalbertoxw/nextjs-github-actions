import type { CSSProperties } from "react";
import Link from "next/link";

// Alturas de las barras del panel decorativo del hero.
const BARRAS = [42, 58, 51, 73, 66, 88, 79, 96];

export default function Inicio() {
  return (
    <>
      <section className="hero">
        <div className="contenedor hero__interior">
          <div className="hero__texto" data-revelar>
            <p className="antetitulo">Plataforma de analitica operativa</p>
            <h1>Tus datos dejan de vivir en hojas de calculo.</h1>
            <p className="entradilla">
              Cauce conecta tus sistemas, normaliza los eventos y entrega paneles que tu equipo
              entiende sin necesitar a nadie de ingenieria. Puesta en marcha en dos semanas.
            </p>
            <div className="hero__acciones">
              <Link className="boton boton--primario" href="/contacto">
                Pedir una demo
              </Link>
              <Link className="boton boton--fantasma" href="/precios">
                Ver precios
              </Link>
            </div>
            <p className="hero__nota">Sin tarjeta. Prueba de 14 dias con tus propios datos.</p>
          </div>

          <div className="hero__visual" data-revelar aria-hidden="true">
            <div className="panel">
              <div className="panel__barra">
                <span />
                <span />
                <span />
                <p className="panel__titulo">Operaciones · ultimos 30 dias</p>
              </div>
              <div className="panel__cuerpo">
                <div className="panel__kpis">
                  <div>
                    <span className="panel__kpi">98,4 %</span>
                    <span className="panel__kpi-etiqueta">Entregas a tiempo</span>
                  </div>
                  <div>
                    <span className="panel__kpi">1,9 h</span>
                    <span className="panel__kpi-etiqueta">Tiempo de ciclo</span>
                  </div>
                  <div>
                    <span className="panel__kpi">-32 %</span>
                    <span className="panel__kpi-etiqueta">Incidencias</span>
                  </div>
                </div>
                <div className="grafico">
                  {BARRAS.map((altura, indice) => (
                    <div
                      key={altura}
                      className={
                        indice === BARRAS.length - 1
                          ? "grafico__barra grafico__barra--activa"
                          : "grafico__barra"
                      }
                      style={{ "--altura": `${altura}%` } as CSSProperties}
                    />
                  ))}
                </div>
                <div className="grafico__pie">
                  <span>Sem 1</span>
                  <span>Sem 4</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="franja" id="confianza">
        <div className="contenedor">
          <p className="franja__titulo">Equipos ficticios que ya lo usan en esta demo</p>
          <ul className="franja__logos">
            <li>Nordvia</li>
            <li>Talleres Bruma</li>
            <li>Kaptur</li>
            <li>Grupo Aleda</li>
            <li>Onda Verde</li>
            <li>Petra Logistics</li>
          </ul>
        </div>
      </section>

      <section className="seccion">
        <div className="contenedor">
          <header className="seccion__cabecera" data-revelar>
            <p className="antetitulo">Por que Cauce</p>
            <h2>Tres problemas que resolvemos el primer mes</h2>
            <p className="entradilla">
              No vendemos un lienzo en blanco. Llegamos con los indicadores del sector ya
              modelados y los ajustamos a como trabaja tu equipo.
            </p>
          </header>

          <div className="rejilla rejilla--3">
            <article className="tarjeta" data-revelar>
              <div className="tarjeta__icono">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4 7h16M4 12h16M4 17h9" />
                </svg>
              </div>
              <h3>Una sola fuente de verdad</h3>
              <p>
                Conectores para ERP, CRM, almacen y hojas de calculo. Los datos se unifican con
                el mismo criterio, asi que ventas y operaciones dejan de discutir sobre las cifras.
              </p>
            </article>

            <article className="tarjeta" data-revelar>
              <div className="tarjeta__icono">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
                  <circle cx="12" cy="12" r="3.5" />
                </svg>
              </div>
              <h3>Alertas que llegan a tiempo</h3>
              <p>
                Umbrales por proceso y aviso en Slack o correo cuando algo se desvia. El turno de
                noche se entera del problema sin esperar al informe de la manana.
              </p>
            </article>

            <article className="tarjeta" data-revelar>
              <div className="tarjeta__icono">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4 19V9M10 19V5M16 19v-6M22 19H2" />
                </svg>
              </div>
              <h3>Informes sin trabajo manual</h3>
              <p>
                El comite recibe el mismo panel cada lunes, generado solo. Se acabo el becario
                copiando celdas entre siete ficheros distintos.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="seccion seccion--alterna">
        <div className="contenedor">
          <header className="seccion__cabecera" data-revelar>
            <p className="antetitulo">Como funciona</p>
            <h2>De la primera llamada al primer panel</h2>
          </header>

          <ol className="pasos">
            <li className="paso" data-revelar>
              <span className="paso__numero">1</span>
              <h3>Diagnostico</h3>
              <p>Una sesion de 90 minutos para mapear procesos, fuentes y quien decide que.</p>
            </li>
            <li className="paso" data-revelar>
              <span className="paso__numero">2</span>
              <h3>Conexion</h3>
              <p>
                Enchufamos tus sistemas. Si algo no tiene API, lo resolvemos con carga programada.
              </p>
            </li>
            <li className="paso" data-revelar>
              <span className="paso__numero">3</span>
              <h3>Modelado</h3>
              <p>
                Definimos indicadores con tu equipo y los dejamos documentados en lenguaje claro.
              </p>
            </li>
            <li className="paso" data-revelar>
              <span className="paso__numero">4</span>
              <h3>Adopcion</h3>
              <p>
                Formacion, plantillas y acompanamiento durante los dos primeros cierres de mes.
              </p>
            </li>
          </ol>
        </div>
      </section>

      <section className="seccion">
        <div className="contenedor">
          <div className="metricas">
            <div className="metrica" data-revelar>
              <span className="metrica__valor">14 dias</span>
              <span className="metrica__etiqueta">Puesta en marcha media</span>
            </div>
            <div className="metrica" data-revelar>
              <span className="metrica__valor">120+</span>
              <span className="metrica__etiqueta">Equipos ficticios activos</span>
            </div>
            <div className="metrica" data-revelar>
              <span className="metrica__valor">6 h</span>
              <span className="metrica__etiqueta">Ahorradas por persona y semana</span>
            </div>
            <div className="metrica" data-revelar>
              <span className="metrica__valor">99,95 %</span>
              <span className="metrica__etiqueta">Disponibilidad del servicio</span>
            </div>
          </div>
        </div>
      </section>

      <section className="seccion seccion--alterna">
        <div className="contenedor contenedor--estrecho">
          <figure className="cita" data-revelar>
            <blockquote>
              Llevabamos dos anos intentando montar esto por dentro. Con Cauce tuvimos el primer
              panel util en once dias y, sobre todo, dejamos de discutir de donde salia cada numero.
            </blockquote>
            <figcaption>
              <span className="cita__avatar" aria-hidden="true">
                MR
              </span>
              <span>
                <strong>Marta Rivas</strong>
                Directora de operaciones, Nordvia
              </span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="cta">
        <div className="contenedor cta__interior" data-revelar>
          <div>
            <h2>Vemos tus datos en una llamada de 30 minutos</h2>
            <p>Sin presentacion generica: trabajamos sobre un proceso real tuyo.</p>
          </div>
          <Link className="boton boton--claro" href="/contacto">
            Reservar una demo
          </Link>
        </div>
      </section>
    </>
  );
}
