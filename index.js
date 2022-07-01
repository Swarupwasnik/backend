let http =require('http');

let server=http.createServer(function(req,res){
    res.write("<h1>Hello How are you</h1>")
    res.end();
    
})
server.listen(4000);