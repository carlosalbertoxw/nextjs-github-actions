import type { Metadata } from "next";
import { Cabecera } from "@/components/cabecera";
import { Pie } from "@/components/pie";
import { Revelado } from "@/components/revelado";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Cauce — Analítica operativa para equipos que deciden a diario",
    template: "%s — Cauce",
  },
  description:
    "Cauce conecta tus fuentes de datos y entrega métricas de operación listas para usar. Sitio de demostración con contenido ficticio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <Cabecera />
        <main id="contenido">{children}</main>
        <Pie />
        <Revelado />
      </body>
    </html>
  );
}
