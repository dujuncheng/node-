



setTimeout(function () {
	console.log("a");
},0)
process.nextTick(function () {
	console.log("b");
})
console.log("c");
console.log("d");
console.log("e");