# tao-js
Javascript algorithms implementation

Run `npm ci` and `npm run build` to check TypeScript sources and regenerate the
JavaScript bundles in `build/`. The generator accepts JavaScript and TypeScript
algorithm files. The lab loads the generated JavaScript.

See [book coverage](BOOK_COVERAGE.md) for the source references and catalog audit.


### Lab tooltips

For each new TypeScript algorithm, write a short description in both languages
above the definition. Use `// Doc (es): …` and `// Doc (en): …`. Describe the
operation, what it returns, and any precondition that is important to a caller.
Run `npm run build` to include both descriptions and the signature in the lab.
