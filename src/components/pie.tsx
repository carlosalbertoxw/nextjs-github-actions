import Link from "next/link";
import { Anio } from "./anio";
import { Marca } from "./marca";

export function Pie() {
  return (
    <footer className="pie">
      <div className="contenedor">
        <div className="pie__rejilla">
          <div className="pie__marca">
            <Marca />
            <p className="pie__lema">
              Analitica operativa para equipos que toman decisiones cada dia, no cada trimestre.
            </p>
          </div>

          <div>
            <h3 className="pie__titulo">Producto</h3>
            <ul className="pie__lista">
              <li>
                <Link href="/servicios">Servicios</Link>
              </li>
              <li>
                <Link href="/precios">Precios</Link>
              </li>
              <li>
                <Link href="/casos">Casos de exito</Link>
              </li>
              <li>
                <Link href="/servicios#integraciones">Integraciones</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="pie__titulo">Compania</h3>
            <ul className="pie__lista">
              <li>
                <Link href="/#confianza">Clientes</Link>
              </li>
              <li>
                <Link href="/contacto">Contacto</Link>
              </li>
              <li>
                <Link href="/contacto#faq">Preguntas frecuentes</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="pie__titulo">Contacto</h3>
            <ul className="pie__lista">
              <li>
                <a href="mailto:hola@cauce.example">hola@cauce.example</a>
              </li>
              <li>
                <a href="tel:+34900000000">+34 900 000 000</a>
              </li>
              <li>Calle Ejemplo 000, Madrid</li>
            </ul>
          </div>
        </div>

        <div className="pie__legal">
          <p>
            &copy; <Anio /> Cauce. Empresa ficticia, contenido de relleno para una demo.
          </p>
          <p>Hecho con Next.js y publicado en GitHub Pages.</p>
        </div>
      </div>
    </footer>
  );
}
