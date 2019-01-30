var tape = require('tape')
var np2 = require('../np2')

tape('next pow 2', function(t) {
  for(var i=0; i<31; ++i) {
    if(i !== 1) {
      t.equal(np2((1<<i)-1), 1<<i)
    }
    t.equal(np2((1<<i)), 1<<i)
    if(i < 30) {
      t.equal(np2((1<<i)+1), 1<<(i+1))
    }
  }
  t.end()
})
