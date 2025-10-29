import { defineConfig } from '@studiometa/webpack-config';
import { tailwindcss } from '@studiometa/webpack-config-preset-tailwindcss-4';

export default defineConfig({
  presets: [tailwindcss()],
  src: ['./src/*.css'],
  dist: 'dist',
  public: '/',
  webpackProd(config) {
    config.cache = false;
    config.optimization.minimize = false;
  },
});
