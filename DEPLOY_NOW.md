# 🚀 Quick Deployment Guide

## Option 1: Automated Deployment (Recommended)

I've created a PowerShell script to automate everything. You just need your GitHub Personal Access Token.

### Steps:

1. **Create a GitHub Personal Access Token** (if you don't have one):
   - Go to: https://github.com/settings/tokens
   - Click "Generate new token (classic)"
   - Select scopes: `repo` (full control of private repositories)
   - Click "Generate token"
   - **Copy the token** (you won't see it again!)

2. **Run the deployment script**:
   ```powershell
   cd portfolio
   .\deploy.ps1 -GitHubToken "YOUR_TOKEN_HERE"
   ```

   Or specify a custom repository name:
   ```powershell
   .\deploy.ps1 -GitHubToken "YOUR_TOKEN_HERE" -RepoName "my-portfolio"
   ```

The script will:
- ✅ Create the GitHub repository
- ✅ Push your code
- ✅ Configure GitHub Pages
- ✅ Give you the live URL

---

## Option 2: Manual Deployment

If you prefer to do it manually:

### 1. Create GitHub Repository
```bash
# Create a new repository on GitHub named "portfolio" (or your preferred name)
```

### 2. Update Base Path (if repo name is different)
Edit `vite.config.ts` and change `/portfolio/` to `/YOUR_REPO_NAME/`

### 3. Push to GitHub
```bash
cd portfolio
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### 4. Enable GitHub Pages
1. Go to: `https://github.com/YOUR_USERNAME/YOUR_REPO_NAME/settings/pages`
2. Under "Source", select **"GitHub Actions"**
3. Save

### 5. Deploy
```bash
npm run deploy
```

Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

---

## 🔑 Getting Your GitHub Token

1. Visit: https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Name it: "Portfolio Deployment"
4. Expiration: Choose your preference (90 days recommended)
5. Select scopes:
   - ✅ `repo` (Full control of private repositories)
6. Click "Generate token"
7. **Copy the token immediately** (you won't see it again!)

---

## ⚠️ Important Notes

- **Repository Name**: The script defaults to "portfolio". If your repo name is different, update `vite.config.ts` base path accordingly.
- **Base Path**: Must match your repository name for GitHub Pages to work correctly.
- **Token Security**: Never commit your token to Git. The script uses it securely for API calls only.

---

## 🆘 Troubleshooting

**If the script fails:**
- Make sure your token has `repo` permissions
- Check that the repository name is available (or doesn't already exist)
- Verify your internet connection

**If Pages doesn't load:**
- Check the base path in `vite.config.ts` matches your repo name
- Verify GitHub Actions workflow ran successfully (check the Actions tab)
- Wait 1-2 minutes for DNS to propagate

---

**Ready? Just provide your GitHub token and I'll run the script! 🚀**

