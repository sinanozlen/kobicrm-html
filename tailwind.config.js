module.exports = {
  content: ['./*.html'],
  darkMode: 'media',
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        brightBlue: 'hsl(210, 88%, 59%)', // Canlı mavi
        brightBlueLight: 'hsl(210, 88%, 69%)', // Daha açık mavi
        brightBlueSupLight: 'hsl(210, 88%, 95%)', // Çok açık mavi
        darkBlue: 'hsl(228, 39%, 23%)', // Koyu mavi
        darkGrayishBlue: 'hsl(227, 12%, 61%)', // Griye çalan mavi
        veryDarkBlue: 'hsl(233, 12%, 13%)', // Çok koyu mavi
        veryPaleBlue: 'hsl(210, 100%, 96%)', // Soluk mavi
        veryLightGray: 'hsl(0, 0%, 98%)', // Çok açık gri
      },
    },
  },
  plugins: [],
};
