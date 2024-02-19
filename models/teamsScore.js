// scoreboard model.js
import mongoose from "mongoose";

const teamScoreSchema = mongoose.Schema({
    name: { type: String },
    score: { type: Number, default: 0 }
});

const teamScore = mongoose.model('teamScore', teamScoreSchema);

export default teamScore;