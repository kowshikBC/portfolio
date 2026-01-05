import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
// Update the base path to match your GitHub repository name
// If your repo is named "portfolio", keep it as '/portfolio/'
// If your repo is named differently, change it to '/YOUR_REPO_NAME/'
// For custom domain, use '/'
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/portfolio/' : '/',
});
