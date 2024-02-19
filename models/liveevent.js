// liveevent models.js
import mongoose from "mongoose";

const liveEventSchema = mongoose.Schema({
  eventname: { type: String },
  color: { type: String }
});

const liveEventModel = mongoose.model("liveEvent", liveEventSchema);

export default liveEventModel;
