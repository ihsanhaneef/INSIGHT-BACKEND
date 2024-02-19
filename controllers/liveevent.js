// liveevent controller.js
import liveEventModel from "../models/liveevent.js";

const controller = {};

// Get all live events
export const getlive = async (req, res) => {
  try {
    const livedata = await liveEventModel.find();
    return res.status(200).json(livedata);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: `Failed to fetch live events: ${error}`,
    });
  }
};

// Update event color by ID
export const updateColorById = async (req, res) => {
  const { id } = req.params;
  const { color } = req.body;

  try {
    const updatedEvent = await liveEventModel.findByIdAndUpdate(id, { color }, { new: true });
    res.status(200).json({ message: 'Event color updated successfully', data: updatedEvent });
  } catch (error) {
    console.error('Error updating event color:', error);
    res.status(500).json({ error: 'Failed to update event color' });
  }
};

export default controller;
