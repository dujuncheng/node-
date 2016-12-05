var fs=require("fs");
var http=require("http");
var path=require("path");
var mime = require("mime");
var url=require("url");


var server=http.createServer(fn);
function fn(req,res){
	var urlobj=url.parse(req.url,true);
	console.log(urlobj.query.name,urlobj.query.age);
	var pathname=urlobj.pathname;
    if (urlobj.pathname=="/") {
            res.statusCode=200;
             res.setHeader("name","zhufeng");
             res.setHeader("Content-Type","text/html;charset=utf-8");
             fs.readFile("index.html",(err,data)=>{
             if(err){console.log("wrong")};
                 res.write(data);
                 res.end();
        })
    } else if(pathname=="/clock"){

    }else {
         res.setHeader('Content-Type',mime.lookup(urlobj.pathname)+";charset=utf-8");
         fs.readFile(req.url.slice(1),(err,data)=>{
             res.write(data);
             res.end();
         })
    }
}

server.listen(8089);

