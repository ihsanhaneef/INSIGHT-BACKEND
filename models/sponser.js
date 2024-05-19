
// sponser model.js
import mongoose from "mongoose"

const sponserSchema=mongoose.Schema({
  // eventname: { type: String },
  imgUrl: { type: String }
});

const sponserModel= mongoose.model("sponser",sponserSchema)
export default sponserModel
//dddd