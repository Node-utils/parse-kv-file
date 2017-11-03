module.exports = fileStr => {
  const obj = {};
  const lines = fileStr.split('\n');
  for (let line of lines) {
    if (line.startsWith('#')) continue;
    const i = line.indexOf('=');
    obj[line.slice(0, i)] = line.slice(i + 1);
  }
  return obj;
};
