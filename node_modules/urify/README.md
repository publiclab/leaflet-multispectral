# urify

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

A simple module to synchronously return a DataURI for the given file path.

This also includes a browserify transform to statically analyze the expression, inlining the URI during the bundle step. This allows you to do the following in the browser:

```js
var path = require('path');
var urify = require('urify');
var uri = urify(path.join(__dirname, 'icon.png'));

var img = new Image()
img.onload = function() {
  console.log("Image loaded!")
}
img.src = uri
```

While bundling, include the `urify/transform` like so:

```browserify -t urify/transform foo.js > bundle.js```

After bundling, the code will look like this:

```js
var uri = "data:image/png;base64,....."

var img = new Image()
img.onload = function() {
  console.log("Image loaded!")
}
img.src = uri
```

## API Usage

[![NPM](https://nodei.co/npm/urify.png)](https://nodei.co/npm/urify/)

### `urify = require('urify')`
#### `uri = urify(file)`

Synchronously grabs a file's DataURI string, with the following format:

```js
"data:image/png;base64,....."
```

### `transform = require('urify/transform')`
#### `stream = transform(file, [opts])`

Returns a through stream inlining `require('urify')` calls to their statically evaluated DataURI strings. 

Optionally, you can set which `opt.vars` will be used in the [static-eval](https://www.npmjs.org/package/static-eval) in addition to `__dirname` and `___filename`. 

## Upgrade from 1.x to 2.x

There was a signficant breaking change between 1.x and 2.x.  Note the following:

### Specifying what should be urified

`datauri` has been replaced with `urify`.

#### 1.x

```javascript
var datauri = require('datauri');
var data = datauri('path/to/file');
```

#### 2.x

```javascript
var urify = require('urify');
var data = urify('path/to/file');
```

### Specifying Transform

Use `urify/transform` instead of `urify`:

#### 1.x

```json
  "browserify": {
    "transform": [
      "urify"
    ]
  }
```

#### 2.x

```json
  //2.x
  "browserify": {
    "transform": [
      "urify/transform"
    ]
  }
```


## License

MIT, see [LICENSE.md](http://github.com/mattdesl/urify/blob/master/LICENSE.md) for details.
