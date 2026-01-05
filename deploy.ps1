# GitHub Deployment Script
# This script will create a GitHub repository and deploy your portfolio

param(
    [Parameter(Mandatory=$true)]
    [string]$GitHubToken,
    
    [Parameter(Mandatory=$false)]
    [string]$RepoName = "portfolio",
    
    [Parameter(Mandatory=$false)]
    [string]$Username = ""
)

Write-Host "🚀 Starting deployment process..." -ForegroundColor Green

# Step 1: Get GitHub username from token or use provided
if ([string]::IsNullOrEmpty($Username)) {
    Write-Host "📡 Fetching GitHub username..." -ForegroundColor Yellow
    $headers = @{
        "Authorization" = "token $GitHubToken"
        "Accept" = "application/vnd.github.v3+json"
    }
    
    try {
        $userResponse = Invoke-RestMethod -Uri "https://api.github.com/user" -Headers $headers -Method Get
        $Username = $userResponse.login
        Write-Host "✅ Found username: $Username" -ForegroundColor Green
    } catch {
        Write-Host "❌ Error fetching username. Please provide -Username parameter" -ForegroundColor Red
        exit 1
    }
}

# Step 2: Create GitHub repository
Write-Host "📦 Creating GitHub repository: $RepoName..." -ForegroundColor Yellow
$repoBody = @{
    name = $RepoName
    description = "Professional portfolio website - Kowshik B C"
    private = $false
    auto_init = $false
} | ConvertTo-Json

$headers = @{
    "Authorization" = "token $GitHubToken"
    "Accept" = "application/vnd.github.v3+json"
    "Content-Type" = "application/json"
}

try {
    $repoResponse = Invoke-RestMethod -Uri "https://api.github.com/user/repos" -Headers $headers -Method Post -Body $repoBody
    Write-Host "✅ Repository created: $($repoResponse.html_url)" -ForegroundColor Green
} catch {
    $errorMessage = $_.ErrorDetails.Message | ConvertFrom-Json
    if ($errorMessage.message -like "*already exists*") {
        Write-Host "⚠️  Repository already exists. Continuing..." -ForegroundColor Yellow
    } else {
        Write-Host "❌ Error creating repository: $($errorMessage.message)" -ForegroundColor Red
        exit 1
    }
}

# Step 3: Add remote and push
Write-Host "🔄 Setting up Git remote..." -ForegroundColor Yellow
$remoteUrl = "https://$($GitHubToken)@github.com/$Username/$RepoName.git"

# Remove existing remote if any
git remote remove origin 2>$null

# Add new remote
git remote add origin $remoteUrl

# Rename branch to main if on master
$currentBranch = git branch --show-current
if ($currentBranch -eq "master") {
    Write-Host "🔄 Renaming branch to main..." -ForegroundColor Yellow
    git branch -M main
}

# Push to GitHub
Write-Host "📤 Pushing code to GitHub..." -ForegroundColor Yellow
git push -u origin main --force

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Code pushed successfully!" -ForegroundColor Green
} else {
    Write-Host "❌ Error pushing code. Trying with master branch..." -ForegroundColor Yellow
    git push -u origin master --force
}

# Step 4: Update vite.config.ts with correct base path
Write-Host "⚙️  Updating base path in vite.config.ts..." -ForegroundColor Yellow
$viteConfigPath = "vite.config.ts"
$viteConfig = Get-Content $viteConfigPath -Raw
$viteConfig = $viteConfig -replace "'/portfolio/'", "'/$RepoName/'"
Set-Content -Path $viteConfigPath -Value $viteConfig

# Step 5: Enable GitHub Pages via API
Write-Host "🌐 Enabling GitHub Pages..." -ForegroundColor Yellow
$pagesBody = @{
    source = @{
        branch = "gh-pages"
        path = "/"
    }
} | ConvertTo-Json

try {
    # First, trigger the GitHub Actions workflow by making a dummy commit or push
    Write-Host "📝 Making initial commit for workflow trigger..." -ForegroundColor Yellow
    git add vite.config.ts
    git commit -m "Update base path for deployment" 2>$null
    git push origin main 2>$null
    
    Write-Host "⏳ Waiting for GitHub Actions to deploy (this may take a few minutes)..." -ForegroundColor Yellow
    Write-Host "🔗 Your site will be available at: https://$Username.github.io/$RepoName/" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "✅ Deployment initiated!" -ForegroundColor Green
    Write-Host "📋 Next steps:" -ForegroundColor Yellow
    Write-Host "   1. Go to: https://github.com/$Username/$RepoName/settings/pages" -ForegroundColor White
    Write-Host "   2. Select 'GitHub Actions' as the source" -ForegroundColor White
    Write-Host "   3. Wait for the deployment to complete (check Actions tab)" -ForegroundColor White
} catch {
    Write-Host "⚠️  Could not auto-configure Pages. Please enable it manually:" -ForegroundColor Yellow
    Write-Host "   https://github.com/$Username/$RepoName/settings/pages" -ForegroundColor White
}

Write-Host ""
Write-Host "🎉 Deployment process complete!" -ForegroundColor Green
Write-Host "🌐 Live URL: https://$Username.github.io/$RepoName/" -ForegroundColor Cyan

