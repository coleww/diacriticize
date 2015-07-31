#!/usr/bin/env node

var diacriticize = require('./')
var fs = require('fs')
var argv = require('yargs')
  .alias('h', 'help')
  .help('help')
  .usage('randomly add diacritic unicode to a string')
  .example('diacriticize lol cool whatever')
  .example('diacriticize -l 0.1 oh yeah, wow so subtle')
  .example('diacriticize -l 1 -f resume.txt')
  .example('echo WOW SO PRETTY | diacriticize')
  .alias('l', 'level')
  .alias('f', 'file')
  .describe('l', 'floating point frequency at which to add marks. higher => more marks')
  .describe('f', 'path to file containing text to diacriticize')
  .argv

if (process.stdin.isTTY) {
  var text = argv.f ? fs.readFileSync(argv.f).toString() : argv._.join(' ')

  process.stdout.write(diacriticize(text, argv.l))
  process.stdout.write('\n')
} else {
  var data = ''
  process.stdin.resume()
  process.stdin.setEncoding('utf8')
  process.stdin.on('data', function (chunk) {
    data += chunk
  })

  process.stdin.on('end', function () {
    process.stdout.write(diacriticize(data, argv.l))
    process.stdout.write('\n')
  })
}
