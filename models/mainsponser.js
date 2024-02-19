
// sponser model.js
import mongoose from "mongoose"

const msponserSchema=mongoose.Schema({
  // eventname: { type: String },
  ImgUrl: { type: String }
});

const msponserModel= mongoose.model("msponser",msponserSchema)
export default msponserModel
