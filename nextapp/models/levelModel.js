import mongoose from "mongoose";

const levelSchema = new mongoose.Schema({
  level: String,
  skills: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Skills",
  },
});

const Level = mongoose.models.Level || mongoose.model("Level", levelSchema);

export default Level;
