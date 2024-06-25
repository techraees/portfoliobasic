import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
  name: String,
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post'
  }]
});

const Category = mongoose.models.Category || mongoose.model('Category', categorySchema);

export default Category;
