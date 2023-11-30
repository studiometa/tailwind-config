const path = require('path');

module.exports = {
  title: '🔧 Tailwind CSS Config',
  description: 'A custom Tailwind CSS configuration',
  themeConfig: {
    sidebarDepth: 2,
    navbar: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      {
        text: 'Configuration',
        link: '/configuration/',
      },
      {
        text: 'Plugins',
        children: [
          { text: 'Breakpoint', link: '/plugins/breakpoint.html' },
          { text: 'Font-Face', link: '/plugins/font-face.html' },
          { text: 'Grid', link: '/plugins/grid.html' },
          { text: 'Variants factory', link: '/plugins/variants-factory.html' },
          { text: 'Typography', link: '/plugins/typography.html' },
        ],
      },
      { text: 'Github', link: 'https://github.com/studiometa/tailwind-config' },
    ],
  },
  plugins: [
    require('./plugins/tailwind-config.js'),
    '@vuepress/plugin-search',
    [
      '@vuepress/plugin-register-components',
      {
        components: {
          Preview: path.resolve(__dirname, './components/Preview.vue'),
          TailwindConfig: path.resolve(__dirname, './components/TailwindConfig.vue'),
        },
      },
    ],
  ],
  bundler: '@vuepress/bundler-webpack',
  bundlerConfig: {
    postcss: {
      postcssOptions: {
        plugins: [require('tailwindcss')],
      }
    },
  },
};
