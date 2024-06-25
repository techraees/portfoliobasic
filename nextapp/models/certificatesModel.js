import mongoose from 'mongoose';

const certificateSchema = new mongoose.Schema({
  title: String,
  organization: String,
  issuedBy: String,
  dateIssued: {
    type: Date,
    default: Date.now
  },
  certificateURL: String,
  skills: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Skills'
  }
});

const Certificates =mongoose.models.Certificates ||  mongoose.model('Certificates', certificateSchema);

export default Certificates;
