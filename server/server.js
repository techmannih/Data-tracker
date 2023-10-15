const express = require("express")
const cookieParser = require('cookie-parser')
const authRoutes = require('./routes/routes');
const cors = require('cors');

require('dotenv').config();
const mongoose = require('mongoose')

const app= express()
// middlewares
app.use(express.json())
app.use(cookieParser())
app.use(cors())
// variables
const HOST = 'localhost'
const PORT= process.env.PORT || 2344
const dbURI = "mongodb://127.0.0.1:27017/"

app.listen(PORT, () => console.log("server running at port:" + PORT))
console.log("trying to connect with database...")
mongoose.connect(dbURI , { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
        console.log("database connected")
    })
    .catch((err) => 
    console.log(err))


// routes
app.get('/', (req, res) => {
    res.send("server running")
})

app.use(authRoutes)