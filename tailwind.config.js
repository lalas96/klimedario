module.exports = {
content: [
  './*.html',
  './*.js', 
],
  theme: {
    screens: {
      sm: '480px',
      break600: '600px',
      md: '768px',
      lg: '976px',
      break1100: '1100px',
      xl: '1440px',
    },
    extend: {
     colors: {
    dark: '#232323',
    white: '#ffffff',
    gray: 'rgb(237, 237, 240)',
    grayDark: 'rgba(97, 97, 120, 0.808)',
    blue: 'rgb(39, 46, 90)',
  },
      fontFamily: {
        sans: ['Josefin Sans', 'sans-serif'],
        alata: ['Alata'],
      },
      letterSpacing: {
        widest: '.3em',
      },
    },
  },
  plugins: [],
}
