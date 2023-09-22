/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    fontFamily: {
      jakarta: ['Plus Jakarta Sans, sans-serif'],
    },
    extend: {
      colors: {
        primary: '#3563E9',
        secondary: '#54A6FF',
        body: '#F6F7F9',
        favorite: '#ED3F3F',
        gray: {
          0: 'rgb(195 212 233 / 40%)',
          50: '#90A3BF',
          100: '#596780'
        },
        heading: '#1A202C',
        white: '#FFF',
        footer: 'rgb(19 19 19 / 60%)'
      },
      maxWidth: {
        container: '1312px'
      },
      maxHeight: {
        card: '460px'
      },
      height: {
        360: '360px',
        100: '100px',
        124: '124px'
      },
      width: {
        492: '492px'
      }
    },
  },
  plugins: [],
}

