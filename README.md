# 🌹 ZK Flowers - Premium Flower Export Company

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.11-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

> **Excellence in Every Bloom** - A modern, responsive web platform showcasing premium quality flowers exported worldwide.

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Installation](#-installation)
- [Available Scripts](#-available-scripts)
- [Pages & Routes](#-pages--routes)
- [Components](#-components)
- [Styling](#-styling)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 🌟 Overview

**ZK Flowers** is a comprehensive web application designed for a premium flower export company. The platform showcases the company's extensive flower varieties, production processes, sustainability practices, and global export operations. Built with modern web technologies, it delivers a seamless user experience across all devices.

### Key Highlights

- 🌸 **Premium Flower Showcase** - Detailed product catalogs with high-quality imagery
- 🌍 **Global Export Information** - Comprehensive details about worldwide distribution
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop devices
- ⚡ **Lightning Fast** - Built with Vite for optimal performance
- 🎨 **Modern Design** - Clean, professional UI with Tailwind CSS
- ♿ **Accessible** - WCAG compliant with semantic HTML

---

## ✨ Features

### Core Functionality

- **Product Catalog** - Browse extensive rose varieties and premium flowers
- **About Us** - Company history, mission, and values
- **Production Process** - Transparent view of cultivation methods
- **Sustainability** - Environmental commitment and practices
- **Export Regions** - Global market presence and distribution
- **Partnership Opportunities** - Information for potential business partners
- **Contact System** - Easy communication channels
- **Responsive Navigation** - Seamless navigation across all pages

### Technical Features

- ⚡ Blazing-fast performance with Vite
- 🎨 Utility-first CSS with Tailwind
- 📱 Mobile-first responsive design
- 🔍 SEO optimized structure
- 🎯 Component-based architecture
- 🌐 Cross-browser compatibility
- ♿ Accessibility standards compliant
- 🔄 Smooth page transitions

---

## 🛠️ Tech Stack

### Frontend Framework
- **React 18.3.1** - Modern JavaScript library for building user interfaces
- **React Router DOM 7.1.1** - Declarative routing for React applications

### Build Tool
- **Vite 5.4.11** - Next-generation frontend tooling

### Styling
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **PostCSS 8.4.49** - Tool for transforming CSS with JavaScript

### Icons & Assets
- **Lucide React 0.469.0** - Beautiful & consistent icon toolkit

### Development Tools
- **ESLint** - Code quality and consistency
- **PostCSS Config** - CSS processing configuration
- **Tailwind Config** - Custom design system setup

---

## 📁 Project Structure

```
zk-flower/
├── public/                    # Static assets
├── src/
│   ├── assets/               # Images, logos, and media files
│   ├── components/           # Reusable React components
│   │   ├── Contact.jsx       # Contact form component
│   │   ├── Footer.jsx        # Footer component (tablet-optimized)
│   │   ├── Navbar.jsx        # Navigation bar
│   │   └── ScrollToTop.jsx   # Scroll utility component
│   ├── pages/                # Page components
│   │   ├── about/
│   │   │   ├── components/   # About page specific components
│   │   │   └── about.jsx     # About page
│   │   ├── contact/
│   │   │   ├── components/   # Contact page specific components
│   │   │   └── Contact.jsx   # Contact page
│   │   ├── export-regions/
│   │   │   ├── components/   # Export regions page components
│   │   │   └── ExportRegions.jsx
│   │   ├── home/
│   │   │   ├── components/   # Home page specific components
│   │   │   └── home.jsx      # Landing page
│   │   ├── how-we-work/
│   │   │   ├── components/   # How we work page components
│   │   │   └── HowWeWork.jsx
│   │   ├── partners/
│   │   │   ├── components/   # Partners page components
│   │   │   └── OurPartners.jsx
│   │   └── products/
│   │       ├── components/   # Products page components
│   │       └── WhatWeOffer.jsx
│   ├── styles/               # Global styles
│   │   └── tailwind.css      # Tailwind directives
│   ├── App.jsx               # Main App component with routing
│   ├── main.jsx              # Application entry point
│   └── index.css             # Global CSS imports
├── .eslintrc.js              # ESLint configuration
├── .gitignore                # Git ignore rules
├── index.html                # HTML entry point
├── package.json              # Project dependencies and scripts
├── package-lock.json         # Dependency lock file
├── postcss.config.js         # PostCSS configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── vite.config.js            # Vite configuration
├── vercel.json               # Vercel deployment config
└── README.md                 # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.0.0 or higher) - [Download](https://nodejs.org/)
- **npm** (v9.0.0 or higher) or **yarn** (v1.22.0 or higher)
- **Git** - [Download](https://git-scm.com/)

### Check Your Installation

```bash
node --version
npm --version
git --version
```

---

## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/zk-flower.git
cd zk-flower
```

### 2. Install Dependencies

Using npm:
```bash
npm install
```

Or using yarn:
```bash
yarn install
```

### 3. Environment Setup (Optional)

Create a `.env` file in the root directory if you need environment variables:

```env
VITE_API_URL=your_api_url_here
VITE_CONTACT_EMAIL=zkflowers@gmail.com
```

### 4. Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

---

## 📜 Available Scripts

### Development

```bash
npm run dev
# Starts the development server with hot-reload
# URL: http://localhost:5173
```

### Build

```bash
npm run build
# Creates an optimized production build in the 'dist' folder
# Includes minification, tree-shaking, and asset optimization
```

### Preview

```bash
npm run preview
# Locally preview the production build
# Useful for testing before deployment
```

### Lint

```bash
npm run lint
# Runs ESLint to check code quality
# Automatically fixes fixable issues
```

---

## 🗺️ Pages & Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Landing page with hero section and overview |
| `/about` | About Us | Company history, mission, and values |
| `/products` | Products | Flower varieties and product catalog |
| `/how-we-work` | How We Work | Production process and methodology |
| `/export-regions` | Export Regions | Global market information |
| `/partners` | Partners | Partnership opportunities |
| `/contact` | Contact | Contact form and company information |

---

## 🧩 Components

### Global Components

#### **Navbar.jsx**
- Responsive navigation bar
- Mobile hamburger menu
- Active route highlighting
- Smooth scroll functionality

#### **Footer.jsx**
- Company information and branding
- Contact details with icons
- Quick links to all pages
- Social media integration
- Fully responsive (optimized for tablets: iPad Pro, Nest Hub, Nest Hub Max)

#### **Contact.jsx**
- Contact form with validation
- Direct email and phone links
- Location information

#### **ScrollToTop.jsx**
- Utility component for route changes
- Ensures page scrolls to top on navigation

### Page-Specific Components

Each page folder contains its own `components/` directory with modular, reusable components specific to that page.

---

## 🎨 Styling

### Tailwind CSS Configuration

The project uses a custom Tailwind configuration with:

- **Custom Color Palette** - Brand-specific colors
- **Custom Fonts** - Typography system
- **Responsive Breakpoints** - Mobile, tablet, desktop
- **Custom Utilities** - Project-specific helper classes

### Responsive Breakpoints

```javascript
screens: {
  'sm': '640px',   // Mobile landscape
  'md': '768px',   // Tablet portrait
  'lg': '1024px',  // Tablet landscape
  'xl': '1280px',  // Desktop
  '2xl': '1536px', // Large desktop
}
```

### Design System

- **Primary Green**: `#0A5C2E` - Brand color
- **Secondary Green**: `#14482E` - Accent color
- **White/Light**: For text and backgrounds
- **Gradients**: Subtle background effects

---

## 🚀 Deployment

### Vercel (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Production Deployment**
   ```bash
   vercel --prod
   ```

### Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** via Netlify dashboard or CLI

### Manual Deployment

1. **Build**
   ```bash
   npm run build
   ```

2. **Upload the `dist` folder** to your hosting provider

---

## 🤝 Contributing

We welcome contributions to improve ZK Flowers! Here's how you can help:

### Development Workflow

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

### Coding Standards

- Follow the existing code style
- Write meaningful commit messages
- Add comments for complex logic
- Test responsiveness on multiple devices
- Ensure accessibility standards are met

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 📞 Contact

### ZK Flowers Export

- **Email**: [Zkflowers@gmail.com](mailto:Zkflowers@gmail.com)
- **Phone**: +251911514608, +251936011045
- **Location**: Ethiopia (Global Exports)

### Social Media

- **Facebook**: [ZK Flowers Facebook](https://facebook.com/zkflowers)
- **Instagram**: [@zkflowers](https://instagram.com/zkflowers)
- **LinkedIn**: [ZK Flowers](https://linkedin.com/company/zkflowers)

### Project Links

- **Website**: [zkflowers.com](https://zkflowers.com)
- **Repository**: [GitHub](https://github.com/yourusername/zk-flower)
- **Issues**: [Report a Bug](https://github.com/yourusername/zk-flower/issues)

---

## 🙏 Acknowledgments

- **React Team** - For the amazing framework
- **Vite Team** - For the incredible build tool
- **Tailwind Labs** - For the utility-first CSS framework
- **Lucide** - For the beautiful icon library
- **All Contributors** - Thank you for your contributions!

---

## 📊 Project Status

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

---

<div align="center">

**Made with ❤️ by the ZK Flowers Team**

*Excellence in Every Bloom*

[⬆ Back to Top](#-zk-flowers---premium-flower-export-company)

</div>