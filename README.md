# Next.js GitHub Actions

## Overview
This simple example demonstrates how to deploy a static website using Next.js with GitHub Actions.

## Purpose
The purpose of this project is to provide a clear example of how to publish a Next.js website using GitHub Actions.

## Technologies Used
- Next.js
- GitHub Pages
- GitHub Actions

## Creating a New Project from Scratch
- Create a new Next.js project: Choose a name for your project (e.g., nextjs-github-actions) and create the project using the following command:
```
npx create-next-app nextjs-github-actions
```
- Open the project folder: Use a text editor or console to navigate to the application folder.
- Configure static export: Edit the next.config.js file to configure static export. You can refer to this example:
```
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Use the prefix for GitHub Pages
  basePath: '/nextjs-github-actions',
  assetPrefix: '/nextjs-github-actions/',
  // Enable static export
  trailingSlash: true,
  images: {
    unoptimized: true
  },
}

module.exports = nextConfig
```
- Add an export script: In the package.json file, add the following export script:
```
"scripts": {
  ...
  "export": "next build && next export"
}
```
- Test static export: Run the following command:
```
npm run export
```
- Create a GitHub repository: Create a new GitHub repository named nextjs-github-actions (or any other name you prefer).
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
- The previous step creates a commit with the YML configuration file to automatically deploy the static website generated with Next.js.
- After creating the commit, you only need to wait a few seconds for the actions to execute successfully and deploy the static website.