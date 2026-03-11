const express = require("express")
const app = express()
const cors = require("cors")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

let username = "safin"
let password = "123"

app.get("/", (req,res)=>{
    res.send("Backend deployed successfully 🚀")
})

app.post("/login", function(req, res){

    console.log(req.body.username)

    if(req.body.username == username && req.body.password == password){
        res.send(true)
    }
    else{
        res.send(false)
    }

})

app.listen(5000, function(){
    console.log("server running in port 5000")
})