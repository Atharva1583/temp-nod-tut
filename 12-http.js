const http=require('http')
// req is request we get from an user and res is the response we are sending back    
const server=http.createServer((req,res)=>{
//console.log(req);
if(req.url==='/'){
    res.end('Welcome to our home page')
}
if(req.url==='/about'){
    res.end('Here is the our short story')
}

res.end(`
<h1>Oops !</h1>
<p> We can't seem to find the page you are looking for</p>
<a href="/"> back home</a>
`)
})

server.listen(5000)