import mongoose from 'mongoose';

const PointSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ['Point'],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
    maxDistance: {
      type: Number,
      required: true,
      default: 10000,
    },
  },
  {
    timestamps: true,
  }
);

export default PointSchema;
