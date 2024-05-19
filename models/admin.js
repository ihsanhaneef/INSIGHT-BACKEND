import mongoose from "mongoose"

const adminSchema=mongoose.Schema({
  password: { type: String }, 
});

const adminModel= mongoose.model("admin",adminSchema)
export default adminModel;
//dd