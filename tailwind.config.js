import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: ["var(--font-sans)"],
  			mono: ["var(--font-mono)"]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {}
  	}
  },
  darkMode: ["class", 'class'],
  plugins: [
    require('daisyui'),
    nextui({
      prefix: "nextui", // prefix for themes variables
      defaultTheme: "light", // default theme from the themes object
      defaultExtendTheme: "light", // default theme to extend on custom themes
      themes: {
        dark: {
          extend: 'dark', // <- inherit default values from dark theme
          colors: {
            background: '#18181B',
            foreground: '#ffffff',
            focus: '#F182F6',
          },
        },
        light: {
          extend: 'light',
          colors: {
            background: '#f0f0fb',
            foreground: '#000000',
          },
        },
      },
    }),
      require("tailwindcss-animate")
],
}
