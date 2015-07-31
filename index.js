
var marks = '̴̵̶̷̸̡̢̧̨̛̖̗̘̙̜̝̞̟̠̣̤̥̦̩̪̫̬̭̮̯̰̱̲̳̹̺̻̼͇͈͉͍͎͓͔͕͖͙͚̀́̂̃̄̅̆̇̈̉̊̋̌̍̎̏̐̑̒̓̔̽̾̿̀́͂̓̈́͆͊͋͌͐͑͒͗͛ͣͤͥͦͧͨͩͪͫͬͭͮͯ̕̚͘͜͟͢͝͞͠͡ͅ͏'.split('')

module.exports = function (text, lev) {
  var level = lev !== undefined ? lev : 0.5
  return text.split('').map(function (character) {
    var first = Math.random() < level ? marks[~~(Math.random() * marks.length)] : ''
    var last = Math.random() < level ? marks[~~(Math.random() * marks.length)] : ''
    return first + character + last
  }).join('')
}

module.exports.marks = marks
