# Resume Website - Sheena Mae Arquillo

A modern, interactive resume website built with Next.js, React, and Framer Motion, designed for deployment on Vercel.

## Features

- 🎨 **Beautiful Modern Design** - Gradient backgrounds, smooth animations, and interactive elements
- ✨ **Interactive Animations** - Hover effects, scroll animations, and color transitions
- 📱 **Responsive** - Works perfectly on all devices (desktop, tablet, mobile)
- 🚀 **Fast & Optimized** - Built with Next.js for optimal performance
- 🎯 **Smooth Scrolling** - Elegant navigation between sections

## Tech Stack

- **Next.js 14** - React framework for production
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library

## Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

Build the production version:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Deployment to Vercel

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new).

1. Push your code to GitHub
2. Import your repository on Vercel
3. Vercel will automatically detect it's a Next.js app and configure the build settings
4. Click Deploy!

Alternatively, you can use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Hero.tsx             # Hero section
│   ├── ProfessionalSummary.tsx
│   ├── Education.tsx
│   ├── TechnicalSkills.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Leadership.tsx
│   ├── Strengths.tsx
│   └── Footer.tsx
├── public/                  # Static assets
└── package.json
```

## Customization

All resume content is located in the component files within the `components/` directory. Simply edit the relevant component to update your information.

## License

MIT

