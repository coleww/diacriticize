var tap = require('tape')
var dia = require('./')

tap.test('adds stuff randomly to things', function(t){
  t.ok(dia('foo').length > 3)
  t.end()
})

tap.test('adds nothing based on zeroed level param', function(t){
  t.equal(dia('foo', 0), 'foo')
  t.end()
})

tap.test('adds always the things based on max level param', function(t){
  // for each char, Math.randomly adds 1 mark to front/back
  t.equal(dia('foo', 1).length, 9)
  t.end()
})