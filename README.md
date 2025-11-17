# Taraka Nadh Portfolio

A modern, next-level portfolio website built with React, TailwindCSS, and Framer Motion. Features a stunning dark mode design with glassmorphism effects, smooth animations, and a unique skills showcase with no percentage bars.

## 🚀 Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library

## ✨ Features

- **Modern Design**: Glassmorphism panels, neon-accent gradients, smooth animations
- **Dark Mode**: Default dark theme with soft radial gradients and noise background
- **Responsive**: Fully responsive design for all devices
- **Skills Showcase**: Three unique views (Orbital Map, Badge Grid, Carousel) - NO percentages
- **Smooth Animations**: Micro-interactions and entrance animations throughout
- **Netlify Ready**: Pre-configured for Netlify deployment with forms integration

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd Tarakanadh-s-Portfolio-main
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## 🌐 Netlify Deployment

### Option 1: Deploy via Netlify UI

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [Netlify](https://app.netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click "Deploy site"

### Option 2: Deploy via Netlify CLI

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Login to Netlify:
```bash
netlify login
```

3. Deploy:
```bash
netlify deploy --prod
```

### Netlify Forms Setup

The contact form is already configured for Netlify Forms. To enable it:

1. Make sure your form has `data-netlify="true"` attribute (already added)
2. Add a hidden input with `name="form-name"` (already added)
3. Deploy to Netlify - forms will work automatically
4. View submissions in Netlify dashboard under "Forms"

## 📁 Project Structure

```
├── public/
│   ├── _redirects          # Netlify SPA redirects
│   └── static/             # Static assets (images, etc.)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx      # Navigation with sticky blur
│   │   ├── Hero.jsx        # Hero section with dynamic subtitle
│   │   ├── About.jsx       # About section with timeline
│   │   ├── SkillsShowcase.jsx  # Skills with 3 view modes
│   │   ├── Projects.jsx    # Projects grid
│   │   ├── Certifications.jsx  # Certifications grid
│   │   └── Contact.jsx     # Contact form with Netlify Forms
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles and Tailwind
├── index.html              # HTML template
├── package.json            # Dependencies
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind configuration
├── netlify.toml            # Netlify configuration
└── README.md               # This file
```

## 🎨 Design System

### Colors
- **Primary Gradient**: Teal (#0ea5a4) → Violet (#7c3aed)
- **Accent**: Warm Orange (#ffb86b)
- **Background**: Dark (#020617) with radial gradients
- **Glass Cards**: rgba(255,255,255,0.04) with blur

### Typography
- **UI Font**: Inter
- **Headings**: Sora / Poppins

### Spacing & Radius
- **Card Radius**: 16px
- **Button Radius**: 10px
- **Section Padding**: 80px vertical

## 🎯 Skills Showcase

The skills section features three unique view modes:

1. **Orbital Skill Map** (Default): Central node with orbiting skill clusters
2. **Badge Grid**: Compact grid of skill cards with tags
3. **Carousel**: Category-based slides with key skills

**Important**: No percentages or progress bars - skills are represented through tags (Expert, Advanced, Proficient) and visual hierarchy.

## 🔧 Configuration

### Update Personal Information

Edit the following files to update your information:
- `src/components/Hero.jsx` - Hero section content
- `src/components/About.jsx` - Experience and education
- `src/components/SkillsShowcase.jsx` - Skills data
- `src/components/Projects.jsx` - Projects list
- `src/components/Certifications.jsx` - Certifications
- `src/components/Contact.jsx` - Contact information

### Update Images

Place your images in `public/static/img/` and update image paths in components.

## 📝 License

This project is open source and available under the MIT License.

## 🙏 Credits

- Design inspiration from modern tech portfolios
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Fonts from [Google Fonts](https://fonts.google.com/)

---

Built with ❤️ by Taraka Nadh

