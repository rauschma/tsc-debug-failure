# tsc bug

Steps to reproduce:

```
npm install
npm run build
```

Result:

```
Error: Debug Failure.
    at getTypeOfVariableOrParameterOrPropertyWorker (/usr/local/lib/node_modules/typescript/lib/tsc.js:53005:11)
    at getTypeOfVariableOrParameterOrProperty (/usr/local/lib/node_modules/typescript/lib/tsc.js:52974:20)
    at getTypeOfSymbol (/usr/local/lib/node_modules/typescript/lib/tsc.js:53306:14)
    at getTypeOfAlias (/usr/local/lib/node_modules/typescript/lib/tsc.js:53226:358)
    at getTypeOfSymbol (/usr/local/lib/node_modules/typescript/lib/tsc.js:53318:14)
    at getNarrowedTypeOfSymbol (/usr/local/lib/node_modules/typescript/lib/tsc.js:67681:18)
    at checkIdentifier (/usr/local/lib/node_modules/typescript/lib/tsc.js:67808:16)
    at checkExpressionWorker (/usr/local/lib/node_modules/typescript/lib/tsc.js:76261:16)
    at checkExpression (/usr/local/lib/node_modules/typescript/lib/tsc.js:76216:32)
    at checkNonNullExpression (/usr/local/lib/node_modules/typescript/lib/tsc.js:70497:29)
```

Possibly helpful:

* I initially couldn’t tell what the problem was (in my rather large repo) but Nathan Shively-Sanders suggested I change line `tsc.js:53005` as follows. That told me that this problem was about `AssertionError`.

```diff
- Debug.assertIsDefined(symbol.valueDeclaration);
+ Debug.assertIsDefined(symbol.valueDeclaration, Debug.formatSymbol(symbol));
```
