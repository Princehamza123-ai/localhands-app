import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f3fbfa',
          100: '#dff7f4',
          500: '#2ec4b6',
          600: '#1ea99d',
          900: '#16324f'
        },
        accent: '#f59e0b',
        highlight: '#f97316'
      },
      boxShadow: {
        soft: '0 10px 30px rgba(22,50,79,0.08)'
      }
    }
  },
  plugins: []
};

export default config;
