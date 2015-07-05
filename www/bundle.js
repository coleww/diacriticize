(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var marks = "̴̵̶̷̸̡̢̧̨̛̖̗̘̙̜̝̞̟̠̣̤̥̦̩̪̫̬̭̮̯̰̱̲̳̹̺̻̼͇͈͉͍͎͓͔͕͖͙͚̀́̂̃̄̅̆̇̈̉̊̋̌̍̎̏̐̑̒̓̔̽̾̿̀́͂̓̈́͆͊͋͌͐͑͒͗͛ͣͤͥͦͧͨͩͪͫͬͭͮͯ̕̚͘͜͟͢͝͞͠͡ͅ͏".split("")

module.exports = function(text, lev){
  var level = lev !== undefined ? lev : 0.5
  return text.split("").map(function(character){
    var first = Math.random() < level ? marks[~~(Math.random() * marks.length)] : ''
    var last = Math.random() < level ? marks[~~(Math.random() * marks.length)] : ''
    return first + character + last
  }).join("")
}

module.exports.marks = marks
},{}],2:[function(require,module,exports){
var diacriticize = require("../")
var lev = 0.5
document.getElementById('level').addEventListener("change", function(e){
  lev = e.target.value  // set level!
  document.getElementById('output').textContent = diacriticize(document.getElementById('input').value, lev)
})
document.getElementById('input').addEventListener("keyup", function(e){
  document.getElementById('output').textContent = diacriticize(document.getElementById('input').value, lev)
})
},{"../":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyIsInd3dy9kZW1vLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgbWFya3MgPSBcIsyAzIHMgsyDzITMhcyGzIfMiMyJzIrMi8yMzI3MjsyPzJDMkcySzJPMlMyVzJbMl8yYzJnMmsybzJzMncyezJ/MoMyhzKLMo8ykzKXMpsynzKjMqcyqzKvMrMytzK7Mr8ywzLHMssyzzLTMtcy2zLfMucy6zLvMvMy9zL7Mv82AzYHNgs2DzYTNhc2GzYfNiM2JzYrNi82MzY3Njs2QzZHNks2TzZTNlc2WzZfNmM2ZzZrNm82czZ3Nns2fzaDNoc2izaPNpM2lzabNp82ozanNqs2rzazNrc2uza/MuM2PXCIuc3BsaXQoXCJcIilcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih0ZXh0LCBsZXYpe1xuICB2YXIgbGV2ZWwgPSBsZXYgIT09IHVuZGVmaW5lZCA/IGxldiA6IDAuNVxuICByZXR1cm4gdGV4dC5zcGxpdChcIlwiKS5tYXAoZnVuY3Rpb24oY2hhcmFjdGVyKXtcbiAgICB2YXIgZmlyc3QgPSBNYXRoLnJhbmRvbSgpIDwgbGV2ZWwgPyBtYXJrc1t+fihNYXRoLnJhbmRvbSgpICogbWFya3MubGVuZ3RoKV0gOiAnJ1xuICAgIHZhciBsYXN0ID0gTWF0aC5yYW5kb20oKSA8IGxldmVsID8gbWFya3Nbfn4oTWF0aC5yYW5kb20oKSAqIG1hcmtzLmxlbmd0aCldIDogJydcbiAgICByZXR1cm4gZmlyc3QgKyBjaGFyYWN0ZXIgKyBsYXN0XG4gIH0pLmpvaW4oXCJcIilcbn1cblxubW9kdWxlLmV4cG9ydHMubWFya3MgPSBtYXJrcyIsInZhciBkaWFjcml0aWNpemUgPSByZXF1aXJlKFwiLi4vXCIpXG52YXIgbGV2ID0gMC41XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGV2ZWwnKS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uKGUpe1xuICBsZXYgPSBlLnRhcmdldC52YWx1ZSAgLy8gc2V0IGxldmVsIVxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3V0cHV0JykudGV4dENvbnRlbnQgPSBkaWFjcml0aWNpemUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0JykudmFsdWUsIGxldilcbn0pXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQnKS5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZnVuY3Rpb24oZSl7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdXRwdXQnKS50ZXh0Q29udGVudCA9IGRpYWNyaXRpY2l6ZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQnKS52YWx1ZSwgbGV2KVxufSkiXX0=
