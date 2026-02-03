const fs=require('fs');

// fs.writeFileSync('./ds-b','Hello');
// fs.writeFileSync('./abes.txt','Hello World!');

const result=fs.readFileSync('./abes.txt','utf-8');
console.log(result);

const result2=fs.readFileSync('./ds-b','utf-8');
console.log(result2);