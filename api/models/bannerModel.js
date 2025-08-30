import mongoose from "mongoose";

const { Schema, model } = mongoose;

const BannerSchema = new Schema({
  img: {
    type: String,
    required: true,
  },
  title: {
    type: String,
  },
  heading: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const BannerModel = model("Banner", BannerSchema);
export default BannerModel;
