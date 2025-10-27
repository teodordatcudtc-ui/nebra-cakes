/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#184135', // Verde închis - culoare principală
        },
        accent: {
          DEFAULT: '#ffcb3c', // Galben accent pentru CTA
        },
        secondary: {
          DEFAULT: '#207e5d', // Verde mediu
        },
        warm: {
          DEFAULT: '#ed6a3c', // Portocaliu cald
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'], // Titluri elegante
        body: ['Inter', 'sans-serif'], // Text curat și modern
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'reveal': 'reveal 1s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        reveal: {
          '0%': { clipPath: 'inset(0 100% 0 0)', opacity: '0' },
          '100%': { clipPath: 'inset(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

