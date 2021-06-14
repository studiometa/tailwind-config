module.exports = {
  presets: ['tailwindcss'],
  src: ['./src/*.scss'],
  dist: 'dist',
  public: '/',
  webpackProd(config) {
    config.cache = false;
    config.optimization.minimize = false;
  },
};
