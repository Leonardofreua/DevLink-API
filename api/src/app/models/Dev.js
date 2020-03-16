import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const SALT_WORK_FACTOR = 8;

const DevSchema = new mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      unique: true,
    },
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

DevSchema.methods.validatePassword = async function validatePassword(password) {
  return bcrypt.compare(password, this.password);
};

export default mongoose.model('Dev', DevSchema);
