/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          teal: '#0ea5a4',
          violet: '#7c3aed',
        },
        accent: '#ffb86b',
        dark: {
          bg: '#020617',
          card: 'rgba(255, 255, 255, 0.04)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Sora', 'Poppins', 'sans-serif'],
      },
      borderRadius: {
        card: '16px',
        button: '10px',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #0ea5a4 0%, #7c3aed 100%)',
        'gradient-radial': 'radial-gradient(circle at 50% 50%, rgba(14, 165, 164, 0.1) 0%, rgba(124, 58, 237, 0.05) 50%, transparent 100%)',
      },
      backdropBlur: {
        glass: '20px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(14, 165, 164, 0.5)' },
          '100%': { boxShadow: '0 0 30px rgba(124, 58, 237, 0.8)' },
        }
      }
    },
  },
  plugins: [],
}

