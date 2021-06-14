module.exports = require('./src/index.js');

module.exports.purge = { content: ['./tests/**/*.html'] };
module.exports.theme.debugOutline = true;

module.exports.mode = 'jit';
