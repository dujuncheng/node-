


process.on("exit",function () {
	process.nextTick(
			function () {
				console.log("will not run")
			}		
		)
	console.log("will run");
})