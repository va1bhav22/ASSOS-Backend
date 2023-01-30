const express = require("express")

const app = express()

app.use(express.json())

app.use((req,res,next)=>{
    console.log("Hello MiddleWare")
    next()
    console.log("Hello MiddleWare again")
})

app.get("/",(req,res)=>{
    console.log("Home Page")
res.send("Home page")
})


app.get("/bike",(req,res)=>{
    console.log("This is bike page")
    res.send("This is Bike Page")

})
app.listen(7000,()=>{
   console.log("Listening on port localhost 7000") 
})