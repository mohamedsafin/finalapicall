const express = require("express")
const app = express()
const cors = require("cors")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

let users = [
    { email: "test@example.com", password: "123" }
]

app.get("/", (req,res)=>{
    res.send("Backend deployed successfully 🚀")
})

app.post("/login", function(req, res){
    console.log("Login attempt for:", req.body.email)

    const user = users.find(u => u.email === req.body.email && u.password === req.body.password)

    if(user){
        res.send(true)
    }
    else{
        res.send(false)
    }
})

app.post("/signup", function(req, res){
    console.log("Signup attempt for:", req.body.email)

    const userExists = users.some(u => u.email === req.body.email)

    if(userExists){
        res.send({ success: false, message: "Email already exists" })
    }
    else{
        users.push({ email: req.body.email, password: req.body.password })
        res.send({ success: true, message: "Signup successful" })
    }
})

app.listen(5000, function(){
    console.log("server running in port 5000")
})

module.exports = app;