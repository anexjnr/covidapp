const mongoose = require("mongoose")

const patiententryschema = new mongoose.Schema(
    {
        name:String,
        symptomes:String,
        mobile:String,
        status:String
    }
)

module.exports=mongoose.model("patientss",patiententryschema)

