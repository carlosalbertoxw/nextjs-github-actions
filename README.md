# Next.js GitHub Actions

## Overview
This simple example demonstrates how to deploy a static website using Next.js with GitHub Actions.

## Purpose
The purpose of this project is to provide a clear example of how to publish a Next.js website using GitHub Actions.

## Technologies Used
- Next.js 16
- pnpm
- GitHub Pages
- GitHub Actions

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
