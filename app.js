const express =require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(express.urlencoded({extended:true}));
const port =8080;

app.listen(port,()=>{
    console.log(`listing on the port ${port}`);
});

app.post("/register",(req,res) =>{
    let user = req.body;
    console.log(req.body);
    res.send(`Welcome ${user}`);
}); 