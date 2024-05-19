import Winners from "../models/winners.js";

export const getWinner = async (req, res) => {
  try {
    const imgUrl = await Winners.find();
    if (!imgUrl) {
      return res.status(404).json({ error: 'Image not found' });
    }
    return res.json(imgUrl);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `Failed due to internal server error: ${error.message}` });
  }
};

export const createTeam = async (req, res) => {
  try {
    const { eventname, imgUrl, team } = req.body;
    if (!eventname || !imgUrl || !team) {
      return res.status(400).json({ message: "Please provide all required fields: eventname, imgUrl, and team." });
    }
    const newWinner = new Winners({ eventname, ImgUrl: imgUrl, team });
    const savedWinner = await newWinner.save();
    return res.status(201).json(savedWinner);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `Failed due to internal server error: ${error.message}` });
  }
};
