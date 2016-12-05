

// process.on("uncaughtException",function (err) {
	
// })

// setTimeout(function (argument) {
// 	console.log("will run")
// }, 500);

// fun();
// console.log("will not run");


// try {
// 	console.log(a);
// } catch(e) {	
// 	console.log(e);
// }


process.on("uncaughtException",function (e) {
	console.log(e)
})
console.log(b);