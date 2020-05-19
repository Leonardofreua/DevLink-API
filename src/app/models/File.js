import mongoose from 'mongoose';

const FileSchema = new mongoose.Schema(
  {
    name: String,
    path: String,
  },
  {
    toJSON: {
      virtuals: true,
    },
  },
  {
    timestamps: true,
  }
);

FileSchema.virtual('file_url').get(function() {
  return `${process.env.APP_URL}/files/${this.path}`;
});

export default mongoose.model('File', FileSchema);
