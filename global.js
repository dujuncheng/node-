var a=10;
exports.ad=a;
var name=require("./person.js")

process.on("exit",function () {
	console.log("quedingma?");
})

console.log(a);