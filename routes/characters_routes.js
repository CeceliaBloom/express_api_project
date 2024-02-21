import express from "express";
import * as Characters from "../controllers/characters_controllers"

const router = express.Router();

    //GET 
router.get("/:id?",async (req, res, next)=>{
  try{
    let {id}= req.params;
    let data;

    if(id){
      data = await Characters.findOne(id);
    }else{
      data = await Characters.findAll();
    }
    res.json(data);
  }catch(err){  
    next(err);
  }
});
    //POST
router.post("/", async(req, res, next)=>{
  try{
    let {newCharacter} = req.body;
    const data = await Characters.addOne(newCharacter);
    res.json(data);
  }catch(err){
    next(err);
  }
});
    //PUT 
router.put("/:id",async(req, res, next)=>{
  try{
    const {id} = req.params;
    const updatedCharacter = req.body;
    const data= await Characters.updateOne(id, updatedCharacter);
    res.json(data);
  }catch(err){
    next(err);
  }
});

    //DELETE
router.delete("/:id",async(req, res, next)=>{
  try{
    const {id} = req.params;
    const data= await Characters.removeOne(id);
    res.json(data);
  }catch(err){
    next(err);
  }
});

export default router;