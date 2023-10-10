const express = require("express")
const app= express()
const port= process.env.PORT || 2345


app.listen(port,()=>{
    console.log(`server start at ${port}`)
})

app.get('/', (req, res)=>{
    res.send("server start !")
})