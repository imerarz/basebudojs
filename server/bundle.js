const fs = require('fs')
const path = require('path')
const browserify = require('browserify')

const input = path.join(__dirname, '../src/js/index.js')
const output = path.join(__dirname, '../app/js/bundle.js')

const b = browserify(input)
b.transform('babelify', { "presets": ["es2015"] })

b.bundle(function (err, buf) {
  if (err) return console.log(err)
  fs.writeFile(output, buf, function (err) {
    if (err) return console.log(err)
  })
})
