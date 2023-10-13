require('dotenv').config();
const mongoose = require('mongoose')



// variables
const HOST = 'localhost'
const PORT= process.env.PORT || 2344
const dbURI = "mongodb://127.0.0.1:27017/"

app.listen(PORT, () => console.log("server running at port:" + PORT))
console.log("trying to connect with database...")
mongoose.connect(dbURI + dbname, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
        console.log("database connected")
    })
    .catch((err) => 
    console.log("connection not successful"),
    console.log(err))