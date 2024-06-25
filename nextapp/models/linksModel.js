import mongoose from "mongoose";

const linksSchema = new mongoose.Schema({
  name: String,
  url: String,
  icon: String,
  description: String,
  profile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Profile",
  },
});

const Links = mongoose.models.Links || mongoose.model("Links", linksSchema);

export default Links;
