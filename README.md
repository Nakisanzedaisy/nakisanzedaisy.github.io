# Nakisanze Deziranta - Modern Portfolio

A modern, responsive portfolio website showcasing backend development skills, featured projects, technical expertise, and professional experience. Built with React, TypeScript, Material-UI, and deployed via GitHub Pages.

## ✨ Features

- 🎨 **Modern Design** - Clean, dark theme with Material-UI components
- 📱 **Responsive** - Fully responsive design that works on all devices
- ⚡ **Fast Performance** - Built with Vite for optimal performance
- 🔧 **Type-Safe** - Full TypeScript implementation
- 🚀 **Auto-Deploy** - Automatic deployment via GitHub Actions
- 🎯 **SEO Optimized** - Proper meta tags and semantic HTML

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **UI Framework**: Material-UI (MUI)
- **Build Tool**: Vite
- **Styling**: Emotion (CSS-in-JS)
- **Font**: Inter (Google Fonts)
- **Icons**: Material-UI Icons
- **Deployment**: GitHub Pages

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/nakisanzedaisy/nakisanzedaisy.github.io.git
cd nakisanzedaisy.github.io
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start the development server:**
```bash
npm run dev
```

The portfolio will be available at `http://localhost:3000`

## 📋 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run start` | Start production preview server |
| `npm run deploy` | Build and deploy to GitHub Pages |
| `npm run lint` | Lint React/TypeScript files |
| `npm run format` | Format all code files |
| `npm run type-check` | Run TypeScript type checking |
| `npm run optimize-images` | Optimize images for web |

## 🏗️ Project Structure

```
├── public/
│   └── assets/                 # Static assets
├── src/
│   ├── components/
│   │   └── PortfolioTemplate/
│   │       ├── NakisanzePortfolio.tsx  # Main portfolio component
│   │       ├── PortfolioTemplate.tsx   # Template wrapper
│   │       └── PortfolioPreview.tsx    # Preview component
│   ├── theme/
│   │   └── theme.ts           # Material-UI theme configuration
│   └── main.tsx               # React application entry point
├── .github/
│   └── workflows/
│       └── deploy.yml         # GitHub Actions deployment
├── App.portfoliotemplate.tsx  # Main App component
├── index.html                 # HTML template
├── vite.config.ts            # Vite configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Project dependencies
```

## 🎨 Design System

### Theme
- **Primary Color**: Custom dark theme
- **Typography**: Inter font family with responsive sizing
- **Spacing**: Material-UI's 8px grid system
- **Border Radius**: 48px for modern rounded corners
- **Dark Mode**: Optimized for dark theme aesthetics

### Components
- **Hero Section**: Full-screen introduction with profile image
- **Skills Grid**: Interactive skill cards with hover effects
- **Project Cards**: Showcase projects with images and tech stacks
- **Experience Timeline**: Professional experience with detailed descriptions
- **Contact Section**: Multiple contact methods with call-to-action

## 🚀 Deployment

### Automatic Deployment (GitHub Actions)
The portfolio automatically deploys to GitHub Pages when you push to the `main` branch.

### Manual Deployment
```bash
npm run build
npm run deploy
```

### Local Production Test
```bash
npm run build
npm run preview
```

## 🔧 Development

### Code Quality
This project uses industry-standard tools:

- **ESLint** - Code linting with React and TypeScript rules
- **Prettier** - Code formatting
- **TypeScript** - Static type checking
- **Material-UI** - Consistent component library

### Adding New Content
1. Update the `NakisanzePortfolio.tsx` component
2. Add new images to the `public/assets/` directory
3. Update the theme in `src/theme/theme.ts` if needed

### Customizing the Design
- Modify theme colors in `src/theme/theme.ts`
- Update component styles using Material-UI's `sx` prop or `styled` components
- Add new sections by creating new React components

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 600px
- **Tablet**: 600px - 900px
- **Desktop**: > 900px

All components adapt seamlessly across devices.

## 🔮 Future Enhancements

The architecture is designed for easy expansion:

- **Admin Panel**: Ready for headless CMS integration
- **Blog Section**: Can be added as a new route
- **Contact Form**: Integration with form services
- **Analytics**: Google Analytics or similar
- **PWA**: Progressive Web App capabilities

## 📞 Contact

**Nakisanze Deziranta**
- Email: nakisanzedaisy@gmail.com
- Phone: +256 786 191 990
- Location: Kampala, Uganda
- LinkedIn: [Profile Link]

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**Built with ❤️ using React, TypeScript, and Material-UI**
