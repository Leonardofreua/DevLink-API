import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

import PointSchema from './utils/PointSchema';

const SALT_WORK_FACTOR = 8;

const DevSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
    website_url: String,
    linkedin_url: String,
    medium_username: String,
    twitter_username: String,
    github_username: String,
    company: String,
    github_location: String,
    bio: String,
    avatar_url: String,
    techs: [String],
    location: {
      type: PointSchema,
      index: '2dsphere',
    },
    login_with_github: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

DevSchema.pre('save', async function save(next) {
  if (!this.isModified('password')) return next();
  try {
    const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
    this.password = await bcrypt.hash(this.password, salt);
    return next();
  } catch (err) {
    return next(err);
  }
});

DevSchema.methods.checkPassword = function checkPassword(password) {
  return bcrypt.compare(password, this.password);
};

export default mongoose.model('Dev', DevSchema);
