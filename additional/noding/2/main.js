var fs = require('fs');

textStore = fs.readFileSync('text1.txt');

console.log(textStore.toString());

console.log('program ended');