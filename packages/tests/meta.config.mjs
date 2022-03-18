import { defineConfig } from '@studiometa/webpack-config';

export default defineConfig({
  presets: ['tailwindcss'],
  src: ['./src/*.scss'],
  dist: 'dist',
  public: '/',
  webpackProd(config) {
    config.cache = false;
    config.optimization.minimize = false;
  },
});
