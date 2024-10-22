const express=require('express');
const router=express.Router();
router.use(express.json());
router.use(express.urlencoded({extended:true}));
const employeModel=require('../model/employeeData');
//get operation
router.get('/',async (req,res)=>{
    try {
        const data=await employeModel.find();
        res.status(200).send(data);  
    } catch (error) {
        res.status(404) .send('data not found')
    }

})
router.post('/addemploye',async (req,res)=>{
    try {
        var item=req.body;
        const data1=new employeModel(item);
        const saveddata=await data1.save();
        res.status(200).send('post successful')
    } catch (error) {
        res.status(404) .send('post unsuccessful')
    }
})
router.put('/edit/:id',async (req,res)=>{
    try {
      const id=req.params.id;
      const data=await employeModel.findByIdAndUpdate(id,req.body)
      res.status(200).send('upadate successful')
    } catch (error) {
      res.status(404).send('upadate unsuccessful')
    }
})
//delete
router.delete('/delete/:id',async (req,res)=>{
  try {
    const id=req.params.id;
    const data=await employeModel.findByIdAndDelete(id)
    res.status(200).send('delete successful')
  } catch (error) {
    res.status(404).send('delete unsuccessful')
  }
})

module.exports=router;