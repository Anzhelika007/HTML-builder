const fs = require('node:fs');
const path = require('node:path');
const readline = require('readline');
const dirPath = path.join(__dirname, 'text.txt');
const writeableStream = fs.createWriteStream(dirPath);
const greetings = 'Hello! How are you?\n';
const farewell = 'The file has been recorded. Goodbye!';
let rl = readline.createInterface(process.stdin, process.stdout);

writeableStream.write(greetings);

rl.setPrompt(greetings);
rl.prompt();

function writeFile() {
  rl.question(greetings, (answer) => {
    if (answer == 'exit') {
      console.log(`${farewell}`);
      rl.close();
    } else {
      writeableStream.write(`${answer}\n`);
    writeFile();
    }
  });
}

writeFile();
