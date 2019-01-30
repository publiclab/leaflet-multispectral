next-pow-2
==========
Round a nonnegative integer up to the next power of 2.

# Example

```javascript
var np2 = require('next-pow-2')

for(var i=0; i<=10; ++i) {
  console.log(i + ' rounds to ' + np2(i))
}
```

#### Output

```
0 rounds to 1
1 rounds to 1
2 rounds to 2
3 rounds to 4
4 rounds to 4
5 rounds to 8
6 rounds to 8
7 rounds to 8
8 rounds to 8
9 rounds to 16
10 rounds to 16
```

# Install

```
npm i next-pow-2
```

# API

#### `require('next-pow-2')(x)`
Rounds `x` to the next power of 2

* `x` is a nonnegative integer less than 2^32

**Returns** the next power of 2 after `x`

# License
(c) 2015 Mikola Lysenko. MIT License
