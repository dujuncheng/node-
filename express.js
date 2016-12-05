

var express=require("express");

var app=express();

app.get("/", function (req,res) {
	res.send("nihao");
} )

app.listen(8087, function afterListen(){
	console.log("express is running")
});