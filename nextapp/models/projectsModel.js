import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  technologies: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Skills",
    },
  ],
  startDate: Date,
  endDate: Date,
  url: String,
  githubRepo: String,
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company",
  },
  duration: String,
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ProjectCategory",
  },
});

const Projects =
  mongoose.models.Projects || mongoose.model("Projects", projectSchema);

export default Projects;
