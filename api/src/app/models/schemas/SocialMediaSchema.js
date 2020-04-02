import mongoose from 'mongoose';

const SocialMediaSchema = new mongoose.Schema(
  {
    website_url: String,
    linkedin_url: String,
    youtube_url: String,
    medium_url: String,
    twitter_url: String,
    github_url: String,
  },
  {
    timestamps: true,
  }
);

export default SocialMediaSchema;
