const budo = require('budo');

budo('./src/js/index.js', {
  serve: 'js/bundle.js',
  live: true,
  stream: process.stdout,
  port: 8000,
  open: true,
  debug: true,
  dir: './app',
  browserify: {
    "transform": [
        ["babelify", { "presets": ["es2015"] }]
        ]
  }
}).on('connect', function(ev) {
  console.log('Budo is started...');
});
