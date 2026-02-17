const os=require('os');

console.log('System:',os.platform());
console.log('user info',os.userInfo());
console.log('cpu', os.arch());
console.log('free memory', os.freemem());
console.log('total', os.totalmem());
console.log('uptime', os.uptime());
console.log('home dir', os.homedir());
console.log('host name', os.hostname());
// const fs=require('fs');/


// fs.writeFile('./a1','A1',()=>{ });
// fs.writeFile('./b1','B1',()=>{ });
// fs.writeFile('./c1','C1',()=>{ });
// fs.writeFileSync('./d1','D1');
// fs.writeFileSync('./e1','E1');


// const result=fs.readFileSync('./abes.txt','utf-8');
// console.log(result);


// fs.readFile('./a1','utf-8',(err,result2)=>{
//     if(err){
//         console.log('Error',err);
//     }
//     else{
//         console.log(result2);
//     }
// });

// fs.readFile('./b1','utf-8',(err,result3)=>{
//     if(err){
//         console.log('Error',err);
//     }
//     else{
//         console.log(result3);
//     }
// });

// fs.readFile('./c1','utf-8',(err,result4)=>{
//     if(err){
//         console.log('Error',err);       
//     }
//     else{
//         console.log(result4);
//     }
// });

// fs.readFileSync('./d1','utf-8');
// const result5=fs.readFileSync('./d1','utf-8');
// console.log(result5);

// fs.readFileSync('./e1','utf-8');
// const result6=fs.readFileSync('./e1','utf-8');
// console.log(result6);

//  fs.appendFile('./a1','\n pranav',(err)=>{
//     if(err){
//         console.log('Error',err);
//     }   
//     else{
//         console.log('Data appended successfully');
//     }
// });

// fs.copyFile('./a1','./a2',(err)=>{
//     if(err){
//         console.log('Error',err);
//     }
//     else{
//         console.log('File copied successfully');
//     }
// });

// fs.unlink('./a2',(err)=>{
//     if(err){
//         console.log('Error',err);
//     }
//     else{
//         console.log('File deleted successfully');
//     }   
// });

