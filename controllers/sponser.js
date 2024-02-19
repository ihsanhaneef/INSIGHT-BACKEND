// sponsercontroller.js
import Sponser from "../models/sponser.js";

export const getSponser = async (req, res) =>{
  try {
    const imgUrl = await Sponser.find();
    if(!imgUrl){
      return res.status(404).json({ error: 'Image not found' });
    }
    return res.json(imgUrl)
  }catch(error){
    console.log(error);
        res.status(500).json({ message: `Registration failed due to internal server error : ${error.response}` });
  }
}
