import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Cabecera } from "@/components/cabecera";
import { Pie } from "@/components/pie";
import { Revelado } from "@/components/revelado";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Cauce — Analitica operativa para equipos que deciden a diario",
    template: "%s — Cauce",
  },
  description:
    "Cauce conecta tus fuentes de datos y entrega metricas de operacion listas para usar. Sitio de demostracion con contenido ficticio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // La clase va en <html>: --fuente se declara en :root y ahi tiene que poder
    // resolver var(--font-inter).
    <html lang="es" className={inter.variable}>
      <body>
        <Cabecera />
        <main id="contenido">{children}</main>
        <Pie />
        <Revelado />
      </body>
    </html>
  );
}
