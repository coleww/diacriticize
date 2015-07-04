diacriticize
----------------

randomly add some stackable unicode to a string

`npm install diacriticize`

### example

```
var diacriticize = require('diacriticize')
diacriticize('Puff Daddy')
=>  ͉P̿̃u̖͐f̘̦f̤ͣ ̠̈́D̬̒a̋ͯd̽̒dͭ͜y͑
```

### api

`diacriticize(text, level=0.5)`
- text: string to transform
- level: optional float between 0-1 to compare Math.random() to when deciding whether or not to add a mark. higher => more marks

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