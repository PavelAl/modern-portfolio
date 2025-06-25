# Modern Portfolio

A modern, responsive personal portfolio website built with React, TypeScript, and Vite. This project showcases professional experience, skills, education, and provides contact information in an elegant and interactive design.

## 🚀 Features

- **Responsive Design**: Optimized for all device sizes
- **Modern Tech Stack**: Built with React 19, TypeScript, and Vite
- **Interactive Components**: Animated skills section and smooth navigation
- **Professional Sections**:
  - Introduction with personal branding
  - Skills showcase with icons and animations
  - Work experience timeline
  - Education background
  - Contact information and methods
- **Clean Architecture**: Well-organized component structure with TypeScript types
- **SCSS Modules**: Scoped styling with modern CSS features
- **FontAwesome Icons**: Professional iconography throughout the site

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript
- **Build Tool**: Vite
- **Styling**: SCSS Modules
- **Icons**: FontAwesome
- **Linting**: ESLint with TypeScript support
- **Type Checking**: TypeScript compiler

## 📁 Project Structure

```
src/
├── App/                    # Main application component
├── Introduction/           # Personal introduction section
├── Skills/                # Skills showcase with animations
├── WorkExperience/        # Professional experience timeline
├── Education/             # Educational background
├── Contacts/              # Contact information and methods
├── Layout/                # Header, Footer, and layout components
├── Library/               # Reusable UI components (Icons, etc.)
└── theme/                 # Global styles and theme configuration
```

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed on your system:
- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd modern-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the portfolio

### Available Scripts

- `npm run dev` - Start the development server with hot reload
- `npm run type-check` - Run TypeScript type checking
- `npm run lint` - Run ESLint to check for code issues
- `npm run lint-fix` - Automatically fix ESLint issues where possible

## 🎨 Customization

### Personal Information

Update your personal information in the following files:

1. **Introduction**: Edit `src/App/constants/introduction.ts`
2. **Skills**: Modify `src/App/constants/skills.ts`
3. **Work Experience**: Update `src/App/constants/workExperience.ts`
4. **Contact Methods**: Edit `src/App/constants/contactMethods.ts`

### Styling

- Global styles: `src/theme/theme.css` and `src/theme/theme.scss`
- Component-specific styles: Each component has its own `.styles.module.scss` file
- Fonts: Custom fonts are located in `src/App/assets/fonts/`

### Adding New Sections

1. Create a new folder in `src/` for your section
2. Follow the existing component structure with:
   - `components/` folder for React components
   - `types/` folder for TypeScript interfaces
   - `index.ts` for exports
3. Import and add to `src/App/App.tsx`

## 🔧 Development Guidelines

- **TypeScript**: All components use TypeScript with proper type definitions
- **Component Structure**: Each component has its own folder with:
  - Component file (`.tsx`)
  - Styles file (`.styles.module.scss`)
  - Types file (`.types.ts`)
  - Index file (`index.ts`)
- **Imports**: Use path aliases (`~/`) for cleaner imports
- **Styling**: Use SCSS modules for component-scoped styles

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎯 Deployment

The project can be easily deployed to various platforms:

- **Vercel**: Connect your repository for automatic deployments
- **Netlify**: Drag and drop the `dist` folder after running `npm run build`
- **GitHub Pages**: Use GitHub Actions for automated deployment

To build for production:
```bash
npm run build
```

The built files will be in the `dist/` directory.

## Brand icons

Brand svg icons by <a target="_blank" href="https://icons8.com">Icons8</a>

---

**Made with ❤️ using React, TypeScript, and Vite**
