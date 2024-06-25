import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  title: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  published: {
    type: Boolean,
    default: false
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  categories: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  }]
});

const Post =mongoose.models.Post || mongoose.model('Post', postSchema);

export default Post;
