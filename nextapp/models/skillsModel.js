import mongoose from "mongoose";

const skillsSchema = new mongoose.Schema({
  name: String,
  icon: String,
  level: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Level",
  },
  description: String,
  certificates: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Certificates",
    },
  ],
  projects: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Projects",
    },
  ],
});

const Skills = mongoose.models.Skills || mongoose.model("Skills", skillsSchema);

export default Skills;
