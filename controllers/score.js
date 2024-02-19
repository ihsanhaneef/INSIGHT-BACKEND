// scoreboardcontroller.js?
import teamScore from "../models/teamsScore.js";

export const getScore = async (req, res) => {
  try {
    const allScores = await teamScore.find();
    const sorted = allScores.sort((a, b) => {
      return b.score - a.score;
    });
    return res.status(200).json(sorted);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: `Registration failed due to internal server error : ${error.response}`,
    });
  }
};

export const allScore = async (req, res) => {
  try {
    const allScores = await teamScore.find();
    return res.status(200).json(allScores);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: `Registration failed due to internal server error : ${error.response}`,
    });
  }
};

export const updateAllScores = async (req, res) => {
  try {
    const newScores = req?.body?.newscoreboard;

    newScores?.map(async (ns) => {
      const scoreId = Object.keys(ns)[0];
      await teamScore.findByIdAndUpdate(scoreId, { score: ns[scoreId] });
    });

    return res.status(200).json("allScores");
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: `Registration failed due to internal server error : ${error.response}`,
    });
  }
};

export const createTeam = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name)
      return res.status(400).json({ message: "provide name in request body." });
    const allScores = await teamScore.create({ name });
    return res.status(200).json(allScores);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: `Registration failed due to internal server error : ${error.response}`,
    });
  }
};

export const updateTeam = async (req, res) => {
  try {
    const { id, name, score } = req.body;
    if (!id)
      return res.status(400).json({ message: "provide id in request body." });

    let updateData = {};
    if (name || name?.length) {
      updateData.name = name;
    }

    if (score || score?.length) {
      updateData.score = score;
    }

    const updatedScore = await teamScore.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    return res.status(200).json(updatedScore);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: `Registration failed due to internal server error : ${error.response}`,
    });
  }
};
