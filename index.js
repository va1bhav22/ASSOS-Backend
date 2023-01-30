const express = require('express')
require('dotenv').config()
const cors = require('cors')


const app = express()
app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.send("Welcome in Home Page")
}) 

const connection = require('./config')
const CrudRouter = require('./Routes/Crud.route')
app.use('/assos',CrudRouter)

const PORT = process.env.PORT || 8080

app.listen(PORT,async()=>{
    try{
       await connection
       console.log('db connected')
    }
    catch(err){
        console.log('check config',err)
    }
    console.log(`listening on the port ${PORT}`)
})