import mongoose from 'mongoose';

const projectCategorySchema = new mongoose.Schema({
  name: String,
  description: String,
  projects: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Projects'
  }]
});

const ProjectCategory =
mongoose.models.ProjectCategory ||  mongoose.model('ProjectCategory', projectCategorySchema);

export default ProjectCategory;
