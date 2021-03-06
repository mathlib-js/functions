# @mathlib/functions
Mathematical functions

[![Build & Test](https://github.com/mathlib-js/functions/actions/workflows/node.js.yml/badge.svg)](https://github.com/mathlib-js/functions/actions/workflows/node.js.yml)

## Installation
```
npm install @mathlib/functions
```

## Usage
```javascript
const { factorial } = require("@mathlib/functions");

console.log(factorial(5)); // 120
```

Using ES6 imports
```javascript
import { factorial } from "@mathlib/functions";

console.log(factorial(5)); // 120
```

## Available Functions
| Function ▼ | Description | Parameters | Returns |
| --- | --- | --- | --- |
| `factorial(n)` | Factorial of given number | n -> Input number | number |
| `isEven(n)` | Check if given number is even | n -> Input number | boolean |
| `isOdd(n)` | Check if given number is odd | n -> Input number | boolean |
| `mod(a, n)` | Modulo function. Returns *"a mod n"* | a -> dividend <br> n -> divisor | number |
| <br> |
| *Native Math Methods* |
| `abs` | Returns built-in `Math.abs` |
| `acos` | Returns built-in `Math.acos` |
| `acosh` | Returns built-in `Math.acosh` |
| `asin` | Returns built-in `Math.asin` |
| `asinh` | Returns built-in `Math.asinh` |
| `atan` | Returns built-in `Math.atan` |
| `atan2` | Returns built-in `Math.atan2` |
| `atanh` | Returns built-in `Math.atanh` |
| `cbrt` | Returns built-in `Math.cbrt` |
| `ceil` | Returns built-in `Math.ceil` |
| `clz32` | Returns built-in `Math.clz32` |
| `cos` | Returns built-in `Math.cos` |
| `cosh` | Returns built-in `Math.cosh` |
| `exp` | Returns built-in `Math.exp` |
| `expm1` | Returns built-in `Math.expm1` |
| `floor` | Returns built-in `Math.floor` |
| `fround` | Returns built-in `Math.fround` |
| `hypot` | Returns built-in `Math.hypot` |
| `imul` | Returns built-in `Math.imul` |
| `log` | Returns built-in `Math.log` |
| `log10` | Returns built-in `Math.log10` |
| `log1p` | Returns built-in `Math.log1p` |
| `log2` | Returns built-in `Math.log2` |
| `max` | Returns built-in `Math.max` |
| `min` | Returns built-in `Math.min` |
| `pow` | Returns built-in `Math.pow` |
| `random` | Returns built-in `Math.random` |
| `round` | Returns built-in `Math.round` |
| `sign` | Returns built-in `Math.sign` |
| `sin` | Returns built-in `Math.sin` |
| `sinh` | Returns built-in `Math.sinh` |
| `sqrt` | Returns built-in `Math.sqrt` |
| `tan` | Returns built-in `Math.tan` |
| `tanh` | Returns built-in `Math.tanh` |
| `trunc` | Returns built-in `Math.trunc` |

## Examples
Modulo of negative numbers
```javascript
const { mod } = require("@mathlib/functions");

console.log(11 % 7); // 4
console.log(mod(11, 7)); // 4

console.log(-11 % 7); // -4
console.log(mod(-11, 7)); // 3

console.log(11 % -7); // 4
console.log(mod(11, -7)); // -3

console.log(-11 % -7); // -4
console.log(mod(-11, -7)); // -4
```
