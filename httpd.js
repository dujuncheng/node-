
var http=require("http");
function serverfn(req,res){
     console.log(req.method);
     console.log(req.headers);
     console.log(req.url);

     res.statusCode=404;
     res.setHeader("name","zfpx");
     res.setHeader("content-type","text/html;charset=utf-8");
     res.write(new Date().toString());
     res.end();
}
server=http.createServer(serverfn);

server.listen(8089,"localhost");
