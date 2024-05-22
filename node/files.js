const fs = require('fs');


//reading files
// fs.readFile('./docs/blogs1.txt',(err,data) =>{
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// });

// console.log('last line');


//writing files
// fs.writeFile('./docs/blogs1.txt','hello, world',() => {
//     console.log('file was written');
// });

// fs.writeFile('./docs/blogs12.txt','hello, world',() => {
//     console.log('file was written');
// });



//directories
if(!fs.existsSync('./assets'))
fs.mkdir('./assets',(err) => {
    if(err){
        console.log(err);
    }
    console.log('folder created');
});
else{
    fs.rmdir('./assets',(err) =>{
        if(err){
            console.log(err);
        }
        console.log('folder deleted');
    });
}



//deleting files

if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt',(err) =>{
        if(err){
            console.lof(err);
        }
        console.log('file deleted');
    });
}