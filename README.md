# Tree Shaking Bug?

This repo reproduces an issue observed when compiling a much larger project with `spack`.

To build run `yarn install` and `npx spack`.

The compiled bundle does not include the code for the `memoize` library which is imported in `src/util.js`, se the output in `dist/main.js`.

This in turn leads to a `ReferenceError` at runtime:

```
Uncaught ReferenceError: memoize is not defined
```

I suspect this is a bug in the tree shaking algorithm.
