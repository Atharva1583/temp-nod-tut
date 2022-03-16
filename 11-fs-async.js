const {readFile, writeFile}=require('fs')
// if we don't pass utf-8 here like this we'll get an error
console.log('start')
readFile('./content/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    const first=result;
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        
    })
    const second=result;
   writeFile('./content/result-sync.txt',
   `Here is the result: ${first},${second}`,
   (err,result)=>{
       if(err){
           console.log(err);
           return;
       }
       console.log('done with this task')
   })
})
console.log('starting next one')
// in asynchronous approach at the moment we start our task we just offload our task and start with code
// so that multiple tasks can run