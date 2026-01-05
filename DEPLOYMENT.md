# Deployment Guide

## Deploying to GitHub Pages

### Method 1: Using GitHub Actions (Recommended - Automatic)

1. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - The workflow will automatically deploy on every push to main/master

3. **Update base path** (if needed):
   - If your repository name is NOT "portfolio", update `vite.config.ts`:
   ```ts
   base: process.env.NODE_ENV === 'production' ? '/YOUR_REPO_NAME/' : '/',
   ```

4. **Access your site**:
   - Your site will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

### Method 2: Using gh-pages package (Manual)

1. **Install gh-pages** (already installed):
   ```bash
   npm install -D gh-pages
   ```

2. **Update base path in `vite.config.ts`**:
   ```ts
   base: process.env.NODE_ENV === 'production' ? '/YOUR_REPO_NAME/' : '/',
   ```

3. **Create GitHub repository**:
   - Create a new repository on GitHub (e.g., "portfolio")

4. **Deploy**:
   ```bash
   npm run deploy
   ```

5. **Configure GitHub Pages**:
   - Go to repository **Settings** → **Pages**
   - Select source: **gh-pages branch**
   - Save

6. **Access your site**:
   - `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

### Method 3: Using GitHub CLI with Personal Access Token

1. **Install GitHub CLI** (if not installed):
   - Windows: Download from https://cli.github.com
   - Or use: `winget install GitHub.cli`

2. **Authenticate**:
   ```bash
   gh auth login
   ```
   Or use a token:
   ```bash
   gh auth login --with-token < YOUR_TOKEN
   ```

3. **Create repository**:
   ```bash
   gh repo create YOUR_REPO_NAME --public --source=. --remote=origin --push
   ```

4. **Deploy** (using gh-pages):
   ```bash
   npm run deploy
   ```

## Important Notes

- **Base Path**: Make sure the base path in `vite.config.ts` matches your repository name
- **Custom Domain**: If using a custom domain, set base to `'/'` in production
- **Build Command**: Always run `npm run build` before deploying to ensure latest changes
- **GitHub Token**: For automated deployments, you may need a Personal Access Token with repo permissions

## Troubleshooting

### 404 Error on GitHub Pages
- Check that the base path in `vite.config.ts` matches your repository name
- Ensure you're accessing the correct URL with the repository name

### Assets not loading
- Clear browser cache
- Check that all assets are in the `public/` folder
- Verify the base path configuration

### Build fails
- Ensure all dependencies are installed: `npm install`
- Check for TypeScript errors: `npm run build`
- Verify Node.js version (18 or higher)

## Environment Variables

If you need to use environment variables:

1. Create `.env` file:
   ```
   VITE_API_URL=your_api_url
   ```

2. Access in code:
   ```ts
   import.meta.env.VITE_API_URL
   ```

3. Add `.env` to `.gitignore` (already included)

