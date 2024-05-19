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

};
export const addSponser = async (req, res) => {
  const { imgUrl } = req.body;
  try {
    const newSponser = new Sponser({ ImgUrl: imgUrl });
    await newSponser.save();
    res.redirect('/sponser'); // Redirect to the page to show updated image list
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `Failed to save image URL due to internal server error: ${error.message}` });
  }
};
