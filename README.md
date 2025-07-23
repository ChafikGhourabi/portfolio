# Portfolio Website

A modern, responsive portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and shadcn/ui components. This project showcases a professional portfolio with sections for projects, skills, experience, education, testimonials, and contact information.

## 🚀 Features

- **Modern Stack**: Built with Next.js 15, TypeScript, and Tailwind CSS
- **Responsive Design**: Mobile-first approach with beautiful UI components
- **AI Integration**: Powered by Google AI Genkit for enhanced functionality
- **Component Library**: Uses shadcn/ui and Radix UI components
- **Database**: Supabase integration for data management
- **Performance**: Optimized with Turbopack for fast development

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **Node.js** (version 18.0 or higher) - [Download here](https://nodejs.org/)
- **npm** or **yarn** package manager
- **Git** - [Download here](https://git-scm.com/)

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
# Clone the repository
git clone https://github.com/your-username/portfolio.git

# Navigate to the project directory
cd portfolio
```

### 2. Install Dependencies

```bash
# Install all required packages
npm install

# Or if you prefer yarn
yarn install
```

### 3. Run the Development Server

```bash
# Start the development server with Turbopack (faster)
npm run dev

# Or with yarn
yarn dev
```

The application will be available at [http://localhost:9002](http://localhost:9002)

### 4. Open in Browser

Open your web browser and navigate to `http://localhost:9002` to see your portfolio website.

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Starts development server with Turbopack on port 9002 |
| `npm run build` | Creates production build |
| `npm run start` | Starts production server |
| `npm run lint` | Runs ESLint for code quality |
| `npm run typecheck` | Runs TypeScript type checking |
| `npm run genkit:dev` | Starts Genkit AI development server |
| `npm run genkit:watch` | Starts Genkit AI with watch mode |

## 📁 Project Structure

```
portfolio/
├── 📁 src/                    # Source code
│   ├── 📁 app/                # Next.js App Router
│   │   ├── favicon.ico        # Website favicon
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout component
│   │   └── page.tsx           # Home page component
│   ├── 📁 ai/                 # AI/Genkit integration
│   ├── 📁 components/         # Reusable UI components
│   │   ├── intro.tsx          # Introduction section
│   │   ├── projects.tsx       # Projects showcase
│   │   ├── skills.tsx         # Skills section
│   │   ├── experience.tsx     # Work experience
│   │   ├── education.tsx      # Education section
│   │   ├── testimonials.tsx   # Client testimonials
│   │   ├── contact.tsx        # Contact form
│   │   ├── header.tsx         # Navigation header
│   │   ├── footer.tsx         # Website footer
│   │   └── ui/                # shadcn/ui components
│   ├── 📁 hooks/              # Custom React hooks
│   ├── 📁 lib/                # Utility functions
│   └── 📁 types/              # TypeScript type definitions
├── 📁 docs/                   # Documentation
├── 📄 components.json         # shadcn/ui configuration
├── 📄 next.config.ts          # Next.js configuration
├── 📄 package.json            # Dependencies and scripts
├── 📄 tailwind.config.ts      # Tailwind CSS configuration
├── 📄 tsconfig.json           # TypeScript configuration
├── 📄 postcss.config.mjs      # PostCSS configuration
├── 📄 apphosting.yaml         # Firebase hosting config
└── 📄 README.md               # This file
```

## 🎨 Key Technologies

- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Beautiful UI components
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives
- **[Supabase](https://supabase.com/)** - Backend as a Service
- **[Google AI Genkit](https://firebase.google.com/docs/genkit)** - AI integration
- **[Lucide React](https://lucide.dev/)** - Beautiful icons

## 🔧 Development Tips for Beginners

### Understanding the File Structure

1. **`src/app/`** - Contains your main pages using Next.js App Router
2. **`src/components/`** - Reusable UI components for different sections
3. **`src/components/ui/`** - Base UI components from shadcn/ui
4. **`package.json`** - Lists all dependencies and scripts

### Making Changes

1. **Edit Content**: Modify components in `src/components/` to update content
2. **Styling**: Use Tailwind CSS classes for styling
3. **Add Pages**: Create new files in `src/app/` for additional pages
4. **Components**: Build reusable components in `src/components/`

### Common Next.js Concepts

- **Components**: Reusable pieces of UI (like LEGO blocks)
- **Props**: Data passed between components
- **State**: Data that can change in your app
- **Routing**: Navigation between different pages

## 🚀 Deployment

This project is configured for Firebase hosting:

```bash
# Build the project
npm run build

# Deploy to Firebase (requires Firebase CLI)
firebase deploy
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Customization

To customize this portfolio for your own use:

1. **Personal Information**: Update content in component files
2. **Styling**: Modify Tailwind classes or `globals.css`
3. **Components**: Add or remove sections by editing `src/app/page.tsx`
4. **Colors**: Update theme in `tailwind.config.ts`

## 🐛 Troubleshooting

### Common Issues:

1. **Port already in use**: The app runs on port 9002. If busy, kill the process or change the port
2. **Module not found**: Run `npm install` to ensure all dependencies are installed
3. **TypeScript errors**: Run `npm run typecheck` to identify type issues

### Getting Help:

- Check the [Next.js documentation](https://nextjs.org/docs)
- Visit [Tailwind CSS docs](https://tailwindcss.com/docs)
- Explore [shadcn/ui components](https://ui.shadcn.com/docs)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Happy coding! 🎉**

If you're new to web development, take your time to explore each file and understand how they work together. Start by making small changes and see how they affect the website.
