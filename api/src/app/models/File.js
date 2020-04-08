import mongoose from 'mongoose';

const FileSchema = new mongoose.Schema(
  {
    name: String,
    path: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('File', FileSchema);
