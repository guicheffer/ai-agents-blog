# GitHub Actions Setup for /docs Builds

Since the GitHub token doesn't have workflow scope, here's how to set up the GitHub Actions workflow manually:

## Step 1: Create the Workflow File on GitHub

1. Go to your repository: `https://github.com/guicheffer/ai-agents-blog`
2. Click "Add file" → "Create new file"
3. Enter path: `.github/workflows/deploy-docs.yml`
4. Paste the following content:

```yaml
name: Deploy to /docs

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]
  workflow_dispatch: # Permits manual execution

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout repository
      uses: actions/checkout@v4
      
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '20'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build for /docs
      run: npm run build:docs
      
    - name: List files in /docs
      run: ls -la docs/
      
    - name: Verify index.html exists
      run: |
        if [ -f "docs/index.html" ]; then
          echo "✅ index.html found in /docs"
          echo "First lines of index.html:"
          head -20 docs/index.html
        else
          echo "❌ index.html NOT found in /dist"
          exit 1
        fi
        
    - name: Upload /dist as artifact
      uses: actions/upload-artifact@v4
      with:
        name: dist-files
        path: dist/
        retention-days: 7
        
    - name: Deploy to GitHub Pages (optional)
      if: github.event_name == 'push' && github.ref == 'refs/heads/main'
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
        publish_branch: gh-pages
        force_orphan: true
```

5. Click "Commit changes"

## Step 2: Configure GitHub Pages (Optional)

If you want automatic deployment to GitHub Pages:

1. Go to repository Settings → Pages
2. Source: GitHub Actions
3. Or configure manually:
   - Source: Deploy from a branch
   - Branch: `gh-pages`
   - Folder: `/ (root)`
   - Save

## Step 3: Test the Workflow

1. Make any change to the repository
2. Go to Actions tab
3. You should see "Deploy to /dist" workflow running
4. Check the artifacts for the `/dist` files

## Manual Build Commands

If you want to build locally:

```bash
# Install dependencies (if not already)
npm install

# Build to /docs
npm run build:docs

# Check the generated files
ls -la docs/
```

## What This Workflow Does

1. **Triggers** on every push to main branch
2. **Builds** the Next.js static site to `/docs` directory
3. **Verifies** `index.html` exists
4. **Uploads** `/docs` as downloadable artifact
5. **Optionally deploys** to GitHub Pages

## Artifact Access

After workflow runs:
1. Go to Actions → Latest workflow run
2. Scroll to "Artifacts" section
3. Download "docs-files" to get the `/docs` directory

## Notes

- The workflow uses `npm run build:docs` which:
  - Cleans `/docs` directory
  - Builds Next.js app
  - Exports static files to `/docs`
- GitHub Pages deployment is optional
- You can run the workflow manually via "Run workflow" button
- Artifacts are kept for 7 days

## Troubleshooting

If build fails:
1. Check Node.js version (requires 18+)
2. Verify `package.json` has correct scripts
3. Check `next.config.js` has `output: 'export'`
4. Ensure no syntax errors in posts

---

**Next Steps:**
1. Set up the workflow as described above
2. Push a change to trigger first build
3. Download artifacts to verify `/dist` contents
4. Configure your web server to serve from `/dist`