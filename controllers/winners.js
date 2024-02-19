// winnercontroller.js
import Winners from "../models/winners.js";

export const getWinner = async (req, res) =>{
  try {
    const imgUrl = await Winners.find();
    if(!imgUrl){
      return res.status(404).json({ error: 'Image not found' });
    }
    return res.json(imgUrl)
  }catch(error){
    console.log(error);
        res.status(500).json({ message: `Registration failed due to internal server error : ${error.response}` });
  }
}

export const createTeam = async (req, res) => {
  try {

      const {name} = req.body;
      if (!name) return res.status(400).json({ message: "provide name in request body." });
      const allScores = await teamScore.create({name}); 
      return res.status(200).json(allScores);
  } catch (error) {
      console.log(error);
      res.status(500).json({ message: `Registration failed due to internal server error : ${error.response}` });
  }
}
