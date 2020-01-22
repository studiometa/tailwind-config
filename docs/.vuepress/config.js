module.exports = {
  title: '🔧 Tailwind CSS Config',
  description: 'A custom Tailwind CSS configuration',
  themeConfig: {
    sidebarDepth: 2,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      {
        text: 'Configuration',
        link: '/configuration/',
      },
      {
        text: 'Plugins',
        link: '/plugins/',
        items: [
          { text: 'Debug outline', link: '/plugins/debug-outline/' },
          { text: 'Grid', link: '/plugins/grid/' },
        ],
      },
      { text: 'Github', link: 'https://github.com/studiometa/tailwind-config' },
    ],
  },
  postcss: {
    plugins: [
      require('autoprefixer'),
      require('tailwindcss'),
    ],
  },
};