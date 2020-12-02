const express = require("express");
const user_task_models = require("../models/user_task_models.js");
const router=express.Router();
const UserTaskModel=require("../models/user_task_models.js");
router.post("/createUserTask", async (req, res)=>{
   const userTask= UserTaskModel({
       taskTitle: req.body.myTaskTitle,
       taskDescription: req.body.myTaskDescription,
   });   
   try {
       const newUserTask = await userTask.save();
       res.status(201).json(newUserTask);
   } catch (error) {
       res.status(400).json({msssssg: error});
   }
});

//getting all userTasks
router.get("/getUserTask", async(req,res)=>{
       try{
         let userTask=await UserTask.find();
         res.json(userTask);
       } catch(e) {
          res.json({msg: e });
       }
})
module.exports= router;