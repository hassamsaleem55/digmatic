const { Schema, model } = require("mongoose");

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
module.exports = BannerModel;