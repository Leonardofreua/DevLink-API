import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

import PointSchema from './schemas/PointSchema';
import SocialMediaSchema from './schemas/SocialMediaSchema';

const SALT_WORK_FACTOR = 8;

const DevSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
    github_username: String,
    company: String,
    bio: String,
    avatar_url: String,
    techs: [String],
    reset_password_token: {
      type: String,
      required: false,
    },

    reset_password_expires: {
      type: Date,
      required: false,
    },
    location: {
      type: PointSchema,
      index: '2dsphere',
    },
    socialMedia: {
      type: SocialMediaSchema,
      index: 'hashed',
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

DevSchema.pre('findOneAndUpdate', async function update(next) {
  const modifiedPassword = this.getUpdate().$set.password;

  if (!modifiedPassword) {
    return next();
  }
  try {
    const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
    this.getUpdate().password = await bcrypt.hash(modifiedPassword, salt);
    return next();
  } catch (err) {
    return next(err);
  }
});

DevSchema.methods.checkPassword = function checkPassword(password) {
  return bcrypt.compare(password, this.password);
};

export default mongoose.model('Dev', DevSchema);
