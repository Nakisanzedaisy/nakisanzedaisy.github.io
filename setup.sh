#!/bin/bash

# Nakisanze Deziranta Portfolio - React Setup Script
echo "🚀 Setting up Nakisanze Deziranta React Portfolio..."
echo "======================================================"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js (v14 or higher) first."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 14 ]; then
    echo "❌ Node.js version 14 or higher is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"
echo "✅ npm version: $(npm -v)"

# Install dependencies
echo ""
echo "📦 Installing React, Material-UI, and development dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully!"
    echo "   📚 Installed packages:"
    echo "     - React 18 with TypeScript"
    echo "     - Material-UI (MUI) components"
    echo "     - Vite for fast development"
    echo "     - ESLint, Prettier, and code quality tools"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

# Run type checking
echo ""
echo "🔍 Running TypeScript type checking..."
npm run type-check

# Run initial linting
echo ""
echo "🔍 Running initial code quality checks..."
echo "Running Prettier..."
npm run format

echo "Running ESLint..."
npm run lint

# Create optimized images directory
echo ""
echo "📸 Setting up image optimization..."
mkdir -p images/optimized

echo ""
echo "🎉 Setup complete!"
echo ""
echo "Available commands:"
echo "  npm run dev      - Start development server (Vite)"
echo "  npm run build    - Build for production"
echo "  npm run preview  - Preview production build"
echo "  npm run start    - Start production preview"
echo "  npm run lint     - Lint React/TypeScript files"
echo "  npm run format   - Format all code files"
echo "  npm run type-check - Run TypeScript type checking"
echo "  npm run deploy   - Build and deploy to GitHub Pages"
echo ""
echo "🚀 To start development:"
echo "   npm run dev"
echo ""
echo "Your React portfolio will be available at: http://localhost:3000"
