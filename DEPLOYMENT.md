# Deployment to GitHub Pages

This document explains how to deploy your Next.js application to GitHub Pages.

## Prerequisites

1. Make sure you have a GitHub repository for your project
2. Ensure the repository name matches the `basePath` in your `next.config.mjs` file

## Deployment Steps

1. Build and export your Next.js application:
   ```bash
   npm run build
   ```

2. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

This will automatically build your application, export it as a static site, and deploy it to the `gh-pages` branch of your repository.

## GitHub Repository Settings

1. Go to your repository settings on GitHub
2. Scroll down to the "Pages" section
3. Under "Source", select "Deploy from a branch"
4. Choose "gh-pages" as the branch and "/ (root)" as the folder
5. Click "Save"

## Configuration Details

The deployment is configured with the following settings in `next.config.mjs`:

- `basePath`: '/Traozom' - This should match your repository name
- `assetPrefix`: '/Traozom/' - This ensures assets are loaded correctly
- `output`: 'export' - This enables static export
- `distDir`: 'out' - This specifies the output directory

## Custom Domain (Optional)

If you want to use a custom domain:

1. Add a `CNAME` file to your `public` directory with your domain name
2. Configure your domain's DNS settings to point to your GitHub Pages site

## Troubleshooting

If you encounter issues with deployment:

1. Make sure all dependencies are installed: `pnpm install`
2. Check that the `gh-pages` package is installed as a dev dependency
3. Verify that the `basePath` in `next.config.mjs` matches your repository name
4. Ensure your repository settings are configured correctly for GitHub Pages