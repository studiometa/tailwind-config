const resolveConfig = require('tailwindcss/resolveConfig');
const config = require('../../tailwind.config.js');
const resolvedConfig = resolveConfig(config);

// Use the function's name for plugins which are not exposing an object
resolvedConfig.plugins = resolvedConfig.plugins.map((plugin) => {
  if (typeof plugin === 'function' && plugin.name) {
    return plugin.name;
  }

  return plugin;
});

module.exports = (options, context) => ({
  define: {
    TAILWIND_CONFIG: JSON.stringify(resolvedConfig),
  },
});
