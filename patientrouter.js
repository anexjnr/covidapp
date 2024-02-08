const express=require("express")
const router = express.Router()

const patientmodel = require("./model")

router.get("/viewall",async(req,res)=>{
    let data = await patientmodel.find()
res.json(data)
})

router.post("/add",async (req,res)=>
{
let data = req.body
let patient = new patientmodel(data)
let result = await patient.save()
res.json(
    {
        status:"success"
    }
)
})

module.exports=router