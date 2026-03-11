# GitHub Pages Deployment Guide

This guide explains how to deploy this Next.js blog to GitHub Pages directly from the `main` branch.

## 🚀 Simple Deployment

The site is fully configured for GitHub Pages deployment. Everything works from the `main` branch - no `gh-pages` branch needed!

### Steps for Deployment:

1. **Push your code to GitHub (main branch):**
   ```bash
   git add .
   git commit -m "Your changes"
   git push origin main
   ```

2. **Configure GitHub Pages (first time only):**
   - Go to your repository: `https://github.com/guicheffer/ai-agents-blog`
   - Click **Settings** → **Pages**
   - Under **Source**, select **Deploy from a branch**
   - Choose `main` branch
   - Select `/ (root)` folder
   - Click **Save**

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

### GitHub Pages Not Working
If GitHub Pages doesn't work:
1. Wait a few minutes after saving settings (deployment takes time)
2. Check the GitHub Pages settings page for deployment status
3. Make sure you selected `main` branch and `/ (root)` folder

## 🌐 Custom Domain
To use a custom domain with GitHub Pages:
1. Add a `CNAME` file to the `public/` folder with your domain
2. Configure DNS settings with your domain provider
3. Update the `basePath` in `next.config.js` if needed

## 📚 Support
For issues with GitHub Pages deployment, check:
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Next.js Static Export Documentation](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)