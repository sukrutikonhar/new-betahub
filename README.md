# BetaHub - AI Enterprise Solutions

A modern, responsive website for BetaHub, showcasing AI enterprise solutions and services. Built with React, TypeScript, Vite, and Tailwind CSS v4.

## 🚀 Features

- **Modern Design**: Clean, professional UI with brand-consistent styling
- **Responsive Layout**: Mobile-first design that works on all devices
- **AI Agent Showcase**: Interactive sections highlighting AI workforce capabilities
- **Tailwind CSS v4**: Latest version with custom theme configuration
- **React Router**: Multi-page navigation with clean routing
- **TypeScript**: Full type safety throughout the application

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **Routing**: React Router v6
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Outfit, Poppins, Roboto, Inter)

## 🎨 Design System

- **Brand Colors**: Purple, Pink, Blue gradient palette
- **Typography**: Multiple font families for hierarchy
- **Components**: Reusable, accessible UI components
- **Animations**: Smooth transitions and hover effects

## 🚀 Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/sukrutikonhar/new-betahub.git
   cd new-betahub
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

## 📱 Pages

- **Home**: Hero section, client logos, problem statement, AI agents showcase
- **About**: Company information, team, vision, and mission
- **Agents**: AI workforce and capabilities
- **Services**: Custom development and advisory services
- **Pricing**: Service packages and plans
- **Resources**: Blogs, documentation, and resources
- **Get Started**: Contact and onboarding

## 🎯 Deployment

This project is optimized for deployment on Vercel, Netlify, or any static hosting platform.

## 📄 License

This project is proprietary to BetaHub.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is currently not compatible with SWC. See [this issue](https://github.com/vitejs/vite-plugin-react/issues/428) for tracking the progress.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
