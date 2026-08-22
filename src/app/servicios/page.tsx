import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Implantacion, modelado de indicadores, integraciones y soporte continuo. Contenido ficticio de demostracion.",
};

const INTEGRACIONES = [
  "Sistema ERP",
  "CRM comercial",
  "Gestor de almacen",
  "Plataforma de envios",
  "Facturacion",
  "PostgreSQL",
  "MySQL",
  "BigQuery",
  "Hojas de calculo",
  "Slack",
  "Microsoft Teams",
  "API propia",
];

export default function Servicios() {
  return (
    <>
      <section className="portada">
        <div className="contenedor contenedor--estrecho">
          <p className="antetitulo">Servicios</p>
          <h1>Lo que hacemos, sin letra pequena</h1>
          <p className="entradilla">
            Cuatro bloques de trabajo. Puedes contratarlos juntos o empezar solo por el primero
            y decidir despues.
          </p>
        </div>
      </section>

      <section className="seccion">
        <div className="contenedor">
          <div className="rejilla rejilla--2">
            <article className="tarjeta tarjeta--detalle" data-revelar>
              <p className="etiqueta">01</p>
              <h2>Implantacion guiada</h2>
              <p>
                Nos sentamos con tu equipo, mapeamos procesos y dejamos la plataforma funcionando
                sobre datos reales. No entregamos un entorno vacio con un manual en PDF.
              </p>
              <ul className="lista-marcas">
                <li>Auditoria de fuentes y calidad de datos</li>
                <li>Configuracion de entornos y permisos</li>
                <li>Migracion de los informes que ya usas</li>
                <li>Dos sesiones de formacion por equipo</li>
              </ul>
              <p className="tarjeta__meta">Duracion tipica: 2 a 4 semanas</p>
            </article>

            <article className="tarjeta tarjeta--detalle" data-revelar>
              <p className="etiqueta">02</p>
              <h2>Modelado de indicadores</h2>
              <p>
                La parte que casi nadie hace bien. Definimos cada metrica con su formula, su duena
                y su margen de tolerancia, y lo dejamos escrito donde todos puedan consultarlo.
              </p>
              <ul className="lista-marcas">
                <li>Diccionario de metricas en lenguaje de negocio</li>
                <li>Reglas de calculo versionadas</li>
                <li>Alertas por umbral y por tendencia</li>
                <li>Revision trimestral de definiciones</li>
              </ul>
              <p className="tarjeta__meta">Incluido desde el plan Equipo</p>
            </article>

            <article className="tarjeta tarjeta--detalle" data-revelar id="integraciones">
              <p className="etiqueta">03</p>
              <h2>Integraciones</h2>
              <p>
                Conectores mantenidos por nosotros. Si tu sistema es propietario o antiguo,
                construimos la carga y nos hacemos cargo de que siga funcionando.
              </p>
              <ul className="lista-marcas">
                <li>ERP, CRM, TMS, almacen y facturacion</li>
                <li>Bases SQL, S3 y ficheros en carpeta compartida</li>
                <li>Webhooks y API abierta para lo tuyo</li>
                <li>Monitorizacion de cargas fallidas</li>
              </ul>
              <p className="tarjeta__meta">Mas de 40 conectores disponibles</p>
            </article>

            <article className="tarjeta tarjeta--detalle" data-revelar>
              <p className="etiqueta">04</p>
              <h2>Soporte y evolucion</h2>
              <p>
                Un canal directo con quien conoce tu implantacion, no un formulario que acaba en
                un ticket generico. Y una revision periodica de que sigue sobrando y que falta.
              </p>
              <ul className="lista-marcas">
                <li>Canal compartido en Slack o Teams</li>
                <li>Acuerdo de respuesta segun plan</li>
                <li>Revision trimestral de uso real</li>
                <li>Nuevos paneles bajo demanda</li>
              </ul>
              <p className="tarjeta__meta">Respuesta desde 4 horas habiles</p>
            </article>
          </div>
        </div>
      </section>

      <section className="seccion seccion--alterna">
        <div className="contenedor">
          <header className="seccion__cabecera" data-revelar>
            <p className="antetitulo">Integraciones</p>
            <h2>Se conecta con lo que ya tienes</h2>
            <p className="entradilla">Nombres ficticios, a modo de ejemplo del tipo de sistema.</p>
          </header>

          <ul className="rejilla-integraciones">
            {INTEGRACIONES.map((integracion) => (
              <li key={integracion}>
                <span aria-hidden="true">◆</span> {integracion}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="seccion">
        <div className="contenedor contenedor--estrecho">
          <header className="seccion__cabecera" data-revelar>
            <p className="antetitulo">Alcance</p>
            <h2>Que entra y que no</h2>
          </header>

          <div className="rejilla rejilla--2">
            <div className="cuadro cuadro--si" data-revelar>
              <h3>Entra en el servicio</h3>
              <ul className="lista-marcas">
                <li>Conectores y su mantenimiento</li>
                <li>Modelado de indicadores</li>
                <li>Paneles y alertas ilimitados</li>
                <li>Formacion del equipo</li>
                <li>Actualizaciones de plataforma</li>
              </ul>
            </div>
            <div className="cuadro cuadro--no" data-revelar>
              <h3>No entra</h3>
              <ul className="lista-cruces">
                <li>Desarrollo a medida de tu ERP</li>
                <li>Limpieza historica de mas de 5 anos</li>
                <li>Licencias de terceros</li>
                <li>Soporte a usuarios finales de otros sistemas</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="contenedor cta__interior" data-revelar>
          <div>
            <h2>Cuentanos tu caso</h2>
            <p>Te decimos en la primera llamada si tiene sentido o no. Tambien si no lo tiene.</p>
          </div>
          <Link className="boton boton--claro" href="/contacto">
            Hablar con el equipo
          </Link>
        </div>
      </section>
    </>
  );
}
