/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
      card: '#000000', // or whatever tone you want
      'muted-foreground': '#888888', // optional
      background: '#0d0d0d', 
      foreground: '#ffffff', 
      'text-secondary': '#bbbbbb',
      border: '#333333',
      primary: '#10b981', // emerald-500 as example 
      accent: '#6366f1',  // indigo-500 as example 
      muted: '#1f2937'    // slate-800 as example 
    }
    },
  },
  plugins: [],
}
