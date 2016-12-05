

function printHello () {
	console.log("hello world");
}
var t=setTimeout(printHello,3000);

clearTimeout(t);