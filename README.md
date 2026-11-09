# nextjs-github-actions

Sitio estático de demostración hecho con **Next.js** (export estático) y publicado en
**GitHub Pages** mediante GitHub Actions.

Es la web de *Cauce*, una empresa ficticia de analítica operativa: cinco páginas
(inicio, servicios, precios, casos y contacto) más una 404, con menú responsive,
conmutador de precios, formulario validado en el navegador y animaciones de
aparición al hacer scroll. Todo el contenido y las cifras son inventados.

## Tecnologías

- Next.js 16 (App Router, `output: "export"`)
- React 19
- TypeScript
- pnpm
- GitHub Pages y GitHub Actions

## Requisitos

- Node.js 24 (la versión está fijada en `.nvmrc`; Next.js 16 admite desde Node 20.9)
- pnpm (la versión exacta está en el campo `packageManager` de `package.json`;
  con `corepack enable` se usa esa automáticamente)
- Una cuenta de GitHub

## Desarrollo local

```bash
pnpm install
pnpm dev
```

Ojo: como hay `basePath`, el sitio en desarrollo vive en
http://localhost:3000/nextjs-github-actions/ (la raíz devuelve 404).

| Comando | Qué hace |
| --- | --- |
| `pnpm dev` | Servidor de desarrollo con recarga en caliente |
| `pnpm build` | Genera el sitio estático en `out/` |
| `pnpm lint` | Revisa el código con ESLint (también corre en CI) |

## Páginas

| Ruta | Contenido |
| --- | --- |
| `/` | Hero con un panel decorativo, ventajas, proceso, métricas y testimonio |
| `/servicios` | Cuatro bloques de servicio, integraciones y alcance |
| `/precios` | Conmutador mensual/anual, planes, tabla comparativa y FAQ de facturación |
| `/casos` | Tres casos de éxito (contexto, solución y resultado) |
| `/contacto` | Formulario validado en el navegador, datos de la oficina y FAQ |
| `404.html` | Se genera desde `src/app/not-found.tsx`; GitHub Pages lo sirve ante rutas desconocidas |

## Estructura

```
├── next.config.ts            # export estático + basePath (¡edítalo antes de publicar!)
├── src/
│   ├── app/                  # cada carpeta con page.tsx = una ruta
│   │   ├── layout.tsx        # <html>, cabecera, pie y metadatos comunes
│   │   ├── page.tsx          # /
│   │   ├── servicios/        # /servicios
│   │   ├── precios/          # /precios
│   │   ├── casos/            # /casos
│   │   ├── contacto/         # /contacto
│   │   ├── not-found.tsx     # out/404.html
│   │   ├── globals.css       # hoja única: tokens, layout y componentes
│   │   └── icon.svg          # favicon
│   └── components/
│       ├── cabecera.tsx      # menú + marca del enlace activo     ("use client")
│       ├── revelado.tsx      # aparición progresiva al hacer scroll ("use client")
│       ├── planes.tsx        # conmutador mensual / anual          ("use client")
│       ├── formulario-contacto.tsx  # validación del contacto      ("use client")
│       ├── anio.tsx          # año del pie, leído en el navegador  ("use client")
│       ├── marca.tsx         # logotipo + nombre
│       └── pie.tsx
├── pnpm-workspace.yaml       # ajustes de pnpm (dependencias opcionales, overrides)
├── .nvmrc                    # versión de Node (la usa también el workflow)
└── .github/
    ├── workflows/nextjs.yml
    └── dependabot.yml        # actualizaciones mensuales de dependencias y Actions
```

Las páginas son componentes de servidor: se renderizan una vez al construir. Solo los
componentes marcados con `"use client"` envían JavaScript al navegador.

### El formulario de contacto

GitHub Pages es hosting estático: no hay servidor que reciba el POST. El formulario valida
y confirma en el navegador, a modo de demostración. Para recibir los mensajes de verdad,
apunta el `action` a un servicio externo (Formspree, Basin, Getform…) y quita el
`preventDefault()` de [src/components/formulario-contacto.tsx](src/components/formulario-contacto.tsx).

## Publicar en GitHub Pages

### 1. Ajusta `next.config.ts`

```ts
const nextConfig: NextConfig = {
  output: "export",
  basePath: "/nextjs-github-actions", // = nombre del repositorio
  trailingSlash: true,
  images: { unoptimized: true },
};
```

- `output: "export"` genera HTML estático en `out/`.
- `basePath` prefija rutas y assets (`/_next/…`). Debe coincidir con el nombre del
  repositorio. Si el repo se llama `<usuario>.github.io`, quítalo.
- `trailingSlash` genera `precios/index.html`, que Pages sirve como `/precios/`.
- `images.unoptimized` es obligatorio: la optimización de imágenes necesita un servidor.

### 2. Sube el repositorio

```bash
git init -b main
git add .
git commit -m "Sitio estático con Next.js"
git remote add origin https://github.com/TU-USUARIO/nextjs-github-actions.git
git push -u origin main
```

### 3. Activa Pages

En GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

GitHub ofrece ahí una plantilla de workflow para Next.js; **no hace falta usarla**, el
repositorio ya incluye [.github/workflows/nextjs.yml](.github/workflows/nextjs.yml). En
cada `push` a `main` instala las dependencias con pnpm, ejecuta `pnpm lint`, construye el
export estático y lo despliega. En los pull requests solo hace lint y build, sin desplegar.

## Licencia

[MIT](LICENSE)
