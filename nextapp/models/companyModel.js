import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
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

const Company =
  mongoose.models.Company || mongoose.model("Company", companySchema);

export default Company;
