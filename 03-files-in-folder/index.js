const fs = require('node:fs');
const path = require('node:path');
const dirPath = path.join(__dirname, 'secret-folder');

fs.readdir(dirPath, (err, files) => { 
  if (err) {
    console.log(err);
  } else { 
    console.log("\nCurrent directory filenames:"); 
    files.forEach(file => { 
      console.log(file); 
    }) 
  } 
}) 

fs.readdir(dirPath, { withFileTypes: true }, (err, files) => { 
  console.log("\nInformation about files in a folder 'secret-folder':"); 
  if (err) {
    console.log(err); 
  } else {
    files.forEach((file) => { 
      if (file.isFile()) {
        const extFile = path.join(file.path, file.name);
        const stats = fs.statSync(extFile);
        const size = stats.size;
        console.log(`file name: ${file.name.replace(path.extname(extFile), '')};  extension: ${path.extname(extFile).slice(1)};  size: ${size}`); 
      }
    }) 
  } 
}) 