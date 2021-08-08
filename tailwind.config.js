module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bms: 
        {
          50: '#edf0fe',
          100: '#ced3e6',
          200: '#afb5d0',
          300: '#8f98bc',
          400: '#707aa8',
          500: '#56618f',
          600: '#434b6f',
          700: '#2b3149',
          800: '#1b2032',
          900: '#050b17',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
