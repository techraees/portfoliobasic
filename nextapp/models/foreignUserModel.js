import mongoose from "mongoose";

const ForeignUserSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  address: {
    street: String,
    city: String,
    state: String,
    zip: String,
    country: String,
    company: String,
    companyId: String,
  },
  contact: [
    {
      phone: String,
      email: String,
    },
  ],
  socialLinks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SocialLinks",
    },
  ],
  projects: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Projects",
    },
  ],
});

const ForeignUser =
  mongoose.models.ForeignUser ||
  mongoose.model("ForeignUser", ForeignUserSchema);

export default ForeignUser;
