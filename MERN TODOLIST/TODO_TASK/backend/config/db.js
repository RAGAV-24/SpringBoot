const mongoose =require("mongoose");
const connectDb =async()=>{
  try {
    await mongoose.connect(process.env.MongoDB_URL)
    console.log("Database successfully connected");

  } catch (error) {
    console.log("Error occured in connecting Database",error);
  }
}
module.exports=connectDb;