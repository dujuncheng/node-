var express=require("express");

var app=express();

app.get("/", function (req,res) {
	res.send("nihao");
} )

var router=express.Router();
router.get('/second1',(req,res)=>{
	res.send("second1");
});
router.get('/second2',(req,res)=>{
	res.send("second2");
})

app.use("/first",router);
app.route("/aticle")
	.get((req,res)=>{
		res.send("这是用route方法，监听来自get方法的路由")
	})
	.post((req,res)=>{
		res.send("这是用route方法，监听来自post方法的路由")
	})


app.listen(8087, function afterListen(){
	console.log("express is running")
});