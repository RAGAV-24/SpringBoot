const model=require("../model/Model")
const express=require("express")
const router=express.Router();
router.post("/",async (req,res)=>{
  try
  {
    const data= req.body;
    console.log("Data in the post api",req.body);
    const sa=new model(data);
    await sa.save();
    // console.log("data saved successfully");
    res.status(200).json(sa);

  }
  catch(error)
  {
    console.log("Error in post api ",error);
    res.status(400).json(sa);
  }
});
router.get("/",async (req,res)=>{
  try {
    console.log("Datas in the Database");
    const data=await model.find();
    console.log(data);
    res.status(200).json(data);

  }
  catch(err)
  {
    console.log("Error in the get api ",err);
    res.status(401).json(data)
  }
});
router.delete("/", async (req, res) => {
  try {
    const { id } = req.body;
    console.log("ID to delete:", id);

    const deletedData = await model.findByIdAndDelete(id);

    if (!deletedData) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json({ message: "Task deleted successfully", data: deletedData });
  } catch (err) {
    console.log("Error in the delete API", err);
    res.status(500).json({ message: "Internal server error" });
  }
});
router.put("/",async (req,res)=>{
  try{
    const {id,name,Task,Time}=req.body;
    console.log("Data in the backend put api",req.body);
    const data=await model.findByIdAndUpdate(id,{name:name,Task:Task,Time:Time},{new:true});
    console.log("Data updated successfuly at the backend",data);
    res.status(200).json({message:"Data updated successfuly at the backend"})
  }
  catch(err)
  {
    console.log("Error in the put api",err);
    res.status(400).json({message:"Error in the put api"});
  }
})

module.exports=router;