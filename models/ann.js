import mongoose from "mongoose"

const annSchema=mongoose.Schema({
  Anmt: { type: String },
});

const annModel= mongoose.model("ann",annSchema)
export default annModel
