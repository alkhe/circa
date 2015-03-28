# unitex

Unitex is a unit and number formatter that has wide coverage over unit formatting operations.

# Usage

```js
var unit = require('unitex');

unit.format(1234); // '1.234k'
unit.format(1024, { unit: 'B', base: 1024, atomic: true }), // '1 KB'
```

# API

### unit.format(number[, options])
```
options:
base - unit increment - default: 1000
prefix - current base exponent - default: 0
precision - output precision - default: 3
unit - unit symbol - default: '' (if not provided, there will be no space between the number and the unit prefix, override with '')
atomic - whether to use granular IEC units - default: false (for countable values, like bytes)
round - whether to round towards zero when atomic - default: false
trailing - whether output should have trailing zeros - default: false
```

```js
unit.format(1234); // '1.234k'
unit.format(1024, { unit: 'B', base: 1024, atomic: true }); // '1 KB'
unit.format(5555, { precision: 1 }); // '5.5k'
```

### unit.formatter(options)
Uses the same options as unit.format, but caches the options for better performance.
```js
var fmt = unit.formatter({ unit: 'B', base: 1024, atomic: true });
fmt(1024); // '1 KB'
```

# Todo
- Parse and expand units to numbers
- Comma/dot separated numbers
