const express = require("express")
const app = express();
const cors = require("cors")
const dotenv = require("dotenv")
const mailRoute = require("./routes/mailRoutes")

const PORT = process.env.PORT || 4000


app.use(express.json());
app.use(cors({
    origin:"http://localhost:3000",
    methods: "GET,POST,PUT,DELETE", 
    credentials:true
}))

app.use("/portfolio",mailRoute)


app.get("/",(req,res)=>{
    return res.json({
        success:true,
        message:"your server is up and running....."
    })
})

app.listen(PORT,()=>{
    console.log(`app is running at port : ${PORT}`)
})
