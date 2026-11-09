import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Genera HTML estatico en out/, que es lo unico que GitHub Pages sabe servir.
  output: "export",
  // El sitio vive en https://<usuario>.github.io/<repo>/. basePath tambien prefija
  // los assets de /_next/, asi que no hace falta assetPrefix.
  basePath: "/nextjs-github-actions",
  // /precios/ -> out/precios/index.html, que Pages sirve sin extension.
  trailingSlash: true,
  // La optimizacion de imagenes necesita un servidor; en export estatico no existe.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
