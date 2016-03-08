# spawn-mochas

Spawn separate processes to run mochas, for when you can't run them in a single process.

## Install

```js
npm install spawn-mochas
```

## Usage

```js
var mochas = require("spawn-mochas");

mochas([
  "test1.js",
  "test2.js"
]);
```

## License

BSD 2 Clause
