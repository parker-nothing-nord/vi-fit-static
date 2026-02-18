import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'background-light': 'rgb(245, 245, 240)',
        'background-cream': 'rgb(250, 248, 243)',
        'primary-green': 'rgb(170, 195, 165)',
        'secondary-cream': 'rgb(242, 235, 220)',
        'text-dark': 'rgb(40, 40, 40)',
        'text-gray': 'rgb(80, 80, 80)',
        'accent-green': 'rgb(145, 175, 140)',
        'hover-green': 'rgb(155, 185, 150)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        cantarell: ['Cantarell', 'Arial', 'sans-serif'],
      },
      screens: {
        'mobile': {'max': '450px'},
        'tablet': {'min': '451px', 'max': '767px'},
        'desktop': {'min': '768px', 'max': '1023px'},
        'lg-desktop': {'min': '1024px'},
      },
    },
  },
  plugins: [],
};

export default config;

