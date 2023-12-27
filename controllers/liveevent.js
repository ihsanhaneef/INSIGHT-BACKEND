import liveEventModel from "../models/liveevent.js";
// const liveevent = require('../../../models/liveevent');
export const getlive = async (req, res) => {
  try {
    const livedata = await liveEventModel.find();

    return res.status(200).json(livedata);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: `Registration failed due to internal server error : ${error.response}`,
    });
  }
};