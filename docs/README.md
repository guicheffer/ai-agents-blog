# AI Agents Blog - Static Build

This directory (`/dist`) contains the static build of the AI Agents Blog.

## 🚀 Quick Start

1. **Point your web server** to this `/dist` directory
2. **Access the site** at `http://your-domain.com/dist/` or configure your server to serve from `/dist` as root
3. **Main page** is at `index.html`

## 📁 Directory Structure

```
/dist/
├── index.html          # Main homepage
├── about.html          # About page
├── styles.css          # Main stylesheet
├── README.md           # This file
└── (other static assets will be generated here)
```

## 🔧 Build Process

The static site is built automatically by GitHub Actions on every push to the `main` branch.

### Manual Build (if needed):
```bash
npm run build:dist
```

This command:
1. Cleans the `/dist` directory
2. Builds the Next.js application
3. Exports static files to `/dist`

## ⚙️ GitHub Actions Workflow

The `.github/workflows/deploy-dist.yml` workflow:
- Runs on every push to `main`
- Installs dependencies
- Builds the static site to `/dist`
- Uploads `/dist` as an artifact
- Optionally deploys to GitHub Pages

## 🎯 Serving Options

### Option 1: Direct File Serving
Simply point your web server (nginx, Apache, etc.) to the `/dist` directory.

### Option 2: GitHub Pages
The workflow can automatically deploy to GitHub Pages from the `/dist` directory.

### Option 3: CDN/Static Hosting
Upload the contents of `/dist` to services like:
- Vercel
- Netlify
- Cloudflare Pages
- AWS S3 + CloudFront

## 📝 Adding Content

To add new blog posts or pages:
1. Add content to the main Next.js application
2. Push to `main` branch
3. GitHub Actions will rebuild `/dist` automatically

## 🐛 Troubleshooting

### No index.html in /dist
- Check GitHub Actions workflow status
- Ensure `npm run build:dist` completes successfully
- Verify Next.js configuration has `output: 'export'`

### Styles not loading
- Check that `styles.css` is in `/dist`
- Verify CSS paths in HTML files

### Build failing
- Check Node.js version (requires Node 18+)
- Verify all dependencies are installed
- Check Next.js configuration

## 🔄 Automatic Updates

The `/dist` directory is automatically updated whenever:
- New posts are added
- Configuration changes
- Code updates are pushed to `main`

No manual intervention required!

---

**Last built:** March 11, 2026  
**Build command:** `npm run build:dist`  
**Output directory:** `/dist`