const fs = require('node:fs');
const path = require('node:path');
const dirPath = path.join(__dirname, 'text.txt');
const readStream = fs.createReadStream(dirPath);
readStream.on('readable', () => {
  console.log(`readable: ${readStream.read()}`);
});
readStream.on('end', () => {
  console.log('end');
});
