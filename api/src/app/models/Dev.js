import mongoose from 'mongoose';

const DevSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
    github_username: String,
    bio: String,
    avatar_url: String,
    techs: [String],
    login_with_github: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Dev', DevSchema);
