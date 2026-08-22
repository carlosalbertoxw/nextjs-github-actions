# Next.js GitHub Actions

## Overview
This simple example demonstrates how to deploy a static website using Next.js with GitHub Actions.

## Purpose
The purpose of this project is to provide a clear example of how to publish a Next.js website using GitHub Actions.

## Technologies Used
- Next.js 16 (App Router, static export)
- React 19
- TypeScript
- pnpm
- GitHub Pages
- GitHub Actions

## Demo Site
The deployed site is a fictional multi-page marketing site ("Cauce") used to exercise a
realistic static export: several routes, shared header/footer, and a bit of client-side
interactivity. All companies, people and figures are made up.

| Route | Content |
| --- | --- |
| `/` | Hero with a decorative dashboard, feature cards, process steps, metrics and a testimonial |
| `/servicios` | Four service blocks, integrations grid, scope in/out |
| `/precios` | Monthly/annual price switcher, plan cards, comparison table, billing FAQ |
| `/casos` | Three case studies (context, solution, result) |
| `/contacto` | Client-side validated contact form, office details and FAQ |
| `404.html` | Generated from `src/app/not-found.tsx`; GitHub Pages serves it for unknown routes |

Layout and styling live in a single hand-written stylesheet, [src/app/globals.css](src/app/globals.css),
using CSS custom properties with a light and dark palette. Only four components opt into
`"use client"`: the header menu, the scroll reveal, the price switcher and the contact form.

The contact form has no backend — GitHub Pages serves static files only, so it validates and
confirms in the browser. To receive real messages, point it at an external service
(Formspree, Basin, Getform...) and remove the `preventDefault()` in
[src/components/formulario-contacto.tsx](src/components/formulario-contacto.tsx).

## Local Development
```
pnpm install
pnpm dev
```

To build the static export locally (output goes to the `out/` folder):
```
pnpm build
```

## Creating a New Project from Scratch
- Create a new Next.js project: Choose a name for your project (e.g., nextjs-github-actions) and create the project using the following command:
```
pnpm create next-app@latest nextjs-github-actions
```
- Open the project folder: Use a text editor or console to navigate to the application folder.
- Configure static export: Edit the `next.config.ts` file to configure static export. You can refer to this example:
```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  basePath: "/nextjs-github-actions",
  assetPrefix: "/nextjs-github-actions/",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
```
- Test the static export: Run the following command and check the generated `out/` folder:
```
pnpm build
```
- Create a GitHub repository: Create a new GitHub repository named nextjs-github-actions (or any other name you prefer — remember to keep `basePath` in sync with the repository name).
- Connect the repository: Run the following command to connect your local project to the GitHub repository:
```
git remote add origin https://github.com/yourusername/nextjs-github-actions.git
```
- Commit and push changes: Commit the modified files and push them to the main branch on GitHub:
```
git add .
git commit -m 'First Published Version'
git push origin main
```
- Publish the static website: Go to the Pages option in the settings page, and in the Build and Deployment section, choose the GitHub Actions source.
```
https://github.com/yourusername/nextjs-github-actions/settings/pages
```
- Click on the button in the box displayed to configure the packaging of a Next.js site.
- The previous step prepares a commit with the YML configuration file to automatically deploy the static website generated with Next.js. This repository already includes a ready-to-use workflow at [.github/workflows/nextjs.yml](.github/workflows/nextjs.yml) that installs dependencies with pnpm, builds the static export, and deploys it to GitHub Pages.
- After creating the commit, you only need to wait a few seconds for the actions to execute successfully and deploy the static website.
