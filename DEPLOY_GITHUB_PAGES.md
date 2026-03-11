# GitHub Pages Deployment Guide

This guide explains how to deploy this Next.js blog to GitHub Pages using automated GitHub Actions.

## 🚀 Automated Deployment (Recommended)

The repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically deploys to GitHub Pages when you push to the `main` branch.

### Steps for Automatic Deployment:

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit with GitHub Pages setup"
   git push origin main
   ```

2. **Enable GitHub Pages (first time only):**
   - Go to your repository on GitHub: `https://github.com/guicheffer/ai-agents-blog`
   - Click on **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - The workflow will automatically run and deploy your site

3. **Your site will be available at:**
   ```
   https://guicheffer.github.io/ai-agents-blog
   ```

## 🔧 Manual Build (Optional)

If you want to build the site locally:

```bash
# Install dependencies
npm install

# Build and export static site
npm run export

# The static files will be in the `out/` directory
```

## ⚙️ Configuration Details

### Base Path Configuration
The site is configured to use `/ai-agents-blog` as the base path for GitHub Pages. This means:
- Local development: `http://localhost:3000`
- GitHub Pages: `https://guicheffer.github.io/ai-agents-blog`

### `.nojekyll` File
The `.nojekyll` file tells GitHub Pages not to use Jekyll processing, which is required for Next.js static exports.

### Image Optimization
For GitHub Pages, image optimization is disabled (`unoptimized: true` in next.config.js) because Next.js image optimization requires a Node.js server.

## 🐛 Troubleshooting

### 404 Errors
If you see 404 errors:
1. Make sure the `.nojekyll` file exists in the root
2. Check that `trailingSlash: true` is set in next.config.js
3. Verify the basePath is correctly set to `/ai-agents-blog`

### Build Failures
If the GitHub Actions workflow fails:
1. Check the Actions tab for error details
2. Ensure all dependencies are correctly installed
3. Verify Node.js version compatibility

## 🌐 Custom Domain
To use a custom domain with GitHub Pages:
1. Add a `CNAME` file to the `public/` folder with your domain
2. Configure DNS settings with your domain provider
3. Update the `basePath` in `next.config.js` if needed

## 📚 Support
For issues with GitHub Pages deployment, check:
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Next.js Static Export Documentation](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)