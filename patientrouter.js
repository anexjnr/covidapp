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

router.post("/search",async(req,res)=>
{
    let input = req.body
    let data = await patientmodel.find(input)
    res.json(data)
})

module.exports=router