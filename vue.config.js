module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/scss/_variables.scss";`
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/resume/'
    : '/'
};
