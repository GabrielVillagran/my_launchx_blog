---
title: "A first unit test with Jest"
description: "Create a small JavaScript test, run it, and understand what the result does and does not tell you."
published: 2022-04-20
revised: 2026-09-27
category: "Testing"
readingMinutes: 5
---

A unit test checks a small piece of behavior in isolation. It is useful when you want fast feedback about a function or module, especially while changing its implementation. A passing test is evidence for the cases you wrote down; it is not a guarantee that the whole application is correct.

Here is a small example using Jest and Node.js. The code is text you can copy, adapt, and version with the rest of your project.

## Set up a project

Create a directory and initialize npm:

```bash
mkdir ajolonauta
cd ajolonauta
npm init -y
npm install --save-dev jest
npm pkg set scripts.test="jest"
```

Add `node_modules/` to a `.gitignore` file. Commit the package manifest and lockfile, but let npm install dependencies on each machine.

## Write one function and one test

Create `sum.js`:

```js
function sum(a, b) {
  return a + b;
}

module.exports = sum;
```

Create `sum.test.js`:

```js
const sum = require('./sum');

test('adds two numbers', () => {
  expect(sum(2, 3)).toBe(5);
});
```

Then run `npm test`. Jest discovers the test file and reports whether the assertion passed. Try changing the expected value to `6` and run it again: reading a failure is part of learning what your test actually checks.

## What to test next

One example is rarely enough. Consider the function's boundaries: zero, negative values, invalid input, and any behavior the caller relies on. Keep the test name specific so a failure tells you what changed. If you use a different module setup, such as native ES modules or TypeScript, consult the current Jest configuration guide rather than copying this CommonJS example unchanged.

Tests help you change code with more confidence when they cover meaningful behavior. They are one part of quality alongside review, integration testing, and observing the software in use.

### Further reading

- [Jest: Getting started](https://jestjs.io/docs/getting-started)
