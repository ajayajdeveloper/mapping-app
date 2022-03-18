const express = require("express")
const mongoose = require("mongoose")
const dotenv =  require("dotenv")
const app = express();
const pinRoute = require("./routes/pins")
const userRoute = require("./routes/users")
const cors = require("cors")

dotenv.config()

app.use(express.json())
app.use(cors())
 
mongoose.connect(process.env.Mongo_URL,{useNewUrlParser:true})
.then( () => {
    console.log("MongoDB Connected")
})
.catch((err) => console.log(err))
 
app.use("/api/users",userRoute)
app.use("/api/pins",pinRoute)

if(process.env.NODE_ENV == 'production')
{
    app.use('/' , express.static('client/build'))

    app.get("*", (req, res) => {

        res.sendFile(path.resolve(__dirname, 'client/build/index.html'));
      
    });
}
 
app.listen(5000 , () =>{
    console.log("backend is running on port 5000")
}
) 