const express = require("express")
var bodyParser = require('body-parser')
const connectToDB = require("./config/connection")
const dotenv = require('dotenv')
dotenv.config({path:__dirname+'/.env'});
const employeeRouter = require("./route/employeeRoute");

const PORT = process.env.PORT || 5000

const app = express()
connectToDB()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
  res.send("Hi This application is running")
})

app.use("/employee", employeeRouter);


app.listen(PORT, ()=> console.log("Server is listening at port : ", process.env.PORT))
  