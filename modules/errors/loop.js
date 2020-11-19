const fs = require('fs');

const files = ['./loop.js', './try.js'];

files.forEach(file => {
    const data = fs.readFileSync(file);
    console.log('File data is', data)
})