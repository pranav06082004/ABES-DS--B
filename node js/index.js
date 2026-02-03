const fs=require('fs');

fs.writeFile('./ds-b','Welcome to ds-b',()=>{ });


// const result=fs.readFileSync('./abes.txt','utf-8');
// console.log(result);


fs.readFile('./ds-b','utf-8',(err,result2)=>{
    if(err){
        console.log('Error',err);
    }
    else{
        console.log(result2);
    }
});