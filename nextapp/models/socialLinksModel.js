import mongoose from 'mongoose';

const socialLinksSchema = new mongoose.Schema({
  name: String,
  icon: String,
  url: String,
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company'
  }
});

const SocialLinks =mongoose.models.SocialLinks || mongoose.model('SocialLinks', socialLinksSchema);

export default SocialLinks;
