diacriticize
----------------

[![NPM](https://nodei.co/npm/diacriticize.png)](https://nodei.co/npm/diacriticize/)
[![Build Status](https://secure.travis-ci.org/coleww/diacriticize.png)](http://travis-ci.org/coleww/diacriticize)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)


randomly add some stackable unicode to a string

`npm install diacriticize`

### example

![example](example.png)

Or Perhaps Try [A Very Broken Demo](http://coleww.github.io/diacriticize/) ? !

### api

`diacriticize(text, level=0.5)`
- text: string to transform
- level: optional float between 0-1 to compare Math.random() to when deciding whether or not to add a mark. higher => more marks

`diacriticize.marks`
- returns array of diacritic marks

### cli

```
randomly add diacritic unicode to a string

Options:
  -l, --level  floating point frequency at which to add marks. higher =>
               more marks
  -f, --file   path to file containing text to diacriticize
  -h, --help   Show help                                           [boolean]

Examples:
  diacriticize lol cool whatever
  diacriticize -l 0.1 oh yeah, wow so
  subtle
  diacriticize -l 1 -f resume.txt
  echo "WOW SO PRETTY" | diacriticize
```