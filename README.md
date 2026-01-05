# Kowshik B C - Data Scientist Portfolio

A modern, responsive portfolio website built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- 🎨 **Modern Design** - Clean, professional UI with dark/light mode support
- 📱 **Fully Responsive** - Optimized for all devices and screen sizes
- ⚡ **Fast Performance** - Built with Vite for lightning-fast builds
- 🎭 **Smooth Animations** - Framer Motion for beautiful entrance animations
- 🌓 **Theme Toggle** - Seamless dark/light mode switching
- 📄 **Multi-tab Layout** - Home, About, Experience, Projects, and Contact sections

## Technologies Used

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Deployment to GitHub Pages

### Option 1: Using gh-pages (Recommended)

1. **Update the base path in `vite.config.ts`**:
   - If your repo name is `portfolio`, keep it as is
   - If your repo name is different, update the base path:
   ```ts
   base: process.env.NODE_ENV === 'production' ? '/your-repo-name/' : '/',
   ```

2. **Configure GitHub repository**:
   - Go to your GitHub repository settings
   - Navigate to Pages section
   - Select source as "gh-pages" branch
   - Save

3. **Deploy**:
   ```bash
   npm run deploy
   ```

   This will:
   - Build the production version
   - Create/update the `gh-pages` branch
   - Push it to GitHub

4. **Access your site**:
   - Your site will be available at: `https://yourusername.github.io/portfolio/`

### Option 2: Using GitHub Actions

1. Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm install
        
      - name: Build
        run: npm run build
        
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

2. Push to GitHub and the action will automatically deploy on every push to main.

## Project Structure

```
portfolio/
├── public/           # Static assets
├── src/
│   ├── components/   # Reusable components (Navbar, Footer)
│   ├── sections/     # Page sections (Home, About, Experience, etc.)
│   ├── context/      # React contexts (ThemeContext)
│   ├── App.tsx       # Main app component
│   ├── main.tsx      # Entry point
│   └── index.css     # Global styles
├── index.html
├── vite.config.ts
└── package.json
```

## Customization

### Updating Personal Information

- **About Section**: Edit `src/sections/About.tsx`
- **Experience**: Edit `src/sections/Experience.tsx`
- **Projects**: Edit `src/sections/Projects.tsx`
- **Contact Info**: Edit `src/sections/Contact.tsx`

### Changing Colors

Update the color scheme in `tailwind.config.js`:

```js
colors: {
  primary: {
    DEFAULT: '#1e40af',  // Change this
    // ...
  },
  accent: {
    DEFAULT: '#06b6d4',  // Change this
    // ...
  },
}
```

### Adding Resume PDF

1. Place your resume PDF in the `public/` folder
2. Update the filename in `src/sections/Home.tsx` if different:
   ```tsx
   window.open('/your-resume.pdf', '_blank');
   ```

## License

This project is open source and available under the MIT License.

## Contact

- **Email**: koushikoushik17@gmail.com
- **LinkedIn**: [kowshik-b-c-b62a62226](https://www.linkedin.com/in/kowshik-b-c-b62a62226)
- **GitHub**: [kowshikBC](https://github.com/kowshikBC)

---

Built with ❤️ by Kowshik B C
