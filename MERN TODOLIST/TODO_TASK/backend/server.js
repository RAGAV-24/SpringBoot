const connectDb =require("./config/db")
const express=require("express")
const cors=require("cors")
require("dotenv").config()
const app=express()
app.use(cors());
app.use(express.json())
connectDb();
const route=require("./routes/route")
app.use("/api",route);
app.listen(process.env.PORT,()=>
{
  console.log("Server is running at port ");
})