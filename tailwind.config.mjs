/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Documentation Theme Colors (Professional Dark Mode)
        docs: {
          bg: '#0F172A',        // slate-900
          sidebar: '#1E293B',   // slate-800
          surface: '#1E293B',   // slate-800
          hover: '#334155',     // slate-700
          border: '#334155',    // slate-700
        },
        text: {
          principal: '#F1F5F9', // slate-100
          secundario: '#CBD5E1', // slate-300
          muted: '#94A3B8',     // slate-400
        },
        primary: {
          azul: '#3B82F6',      // blue-500
          hover: '#2563EB',     // blue-600
          gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        },
        secondary: {
          gold: '#cb9f51',      // User requested gold
        },
        accent: {
          plata: '#94A3B8',     // slate-400
          purple: '#A855F7',    // purple-500
          cyan: '#06B6D4',      // cyan-500
          emerald: '#10B981',   // emerald-500
          amber: '#F59E0B',     // amber-500
        },
        semantic: {
          exito: '#10B981',     // green-500
          alerta: '#F59E0B',    // amber-500
          error: '#EF4444',     // red-500
          info: '#3B82F6',      // blue-500
        },
        // Matrix/Table colors (more vibrant)
        matrix: {
          fortaleza: '#10B981',    // green-500
          oportunidad: '#3B82F6',  // blue-500
          debilidad: '#EF4444',    // red-500
          amenaza: '#F59E0B',      // amber-500
        }
      },
      fontFamily: {
        inter: ['Inter Variable', 'Inter', 'sans-serif'],
        playfair: ['"Playfair Display"', 'serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-in': 'slideIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-10px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}