# parse-kv-file
Pare a kv file, return an object. Zero dependencies.

### install
```shell
npm install parse-kv-file
```

### hello parse-kv-file
If we have a file follow follwing format:
```shell
foo=xxx
bar=xxx
```
Then we can parse it to an object.
```js
const parseKvFile = require('parse-kv-file');

const fileStr = `foo=xxx
bar=xxx`

console.log(parseKvFile(fileStr));
// { foo: 'xxx', bar: 'xxx' }
```