//winnerSchema.js
import mongoose from "mongoose"

const winnersSchema=mongoose.Schema({
  eventname: { type: String },
  ImgUrl: { type: String },
  team:[
    {
      name:{type:String}
    }
  ]
});

const winnersModel= mongoose.model("winners",winnersSchema)
export default winnersModel
