# parse-kv-file
Pare a kv file, return an object.

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
const pareseKvFile = require("../index.js");

const fileStr = `foo=xxx
bar=xxx`

console.log(pareseKvFile(fileStr));
// { foo: 'xxx', bar: 'xxx' }
```