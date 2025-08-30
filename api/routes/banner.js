import express from "express";
import Banner from "../models/bannerModel.js";

const router = express.Router();

router.get("/banners", async (req, res) => {
  try {
    const banners = await Banner.find();
    res.status(200).json({ success: true, banners });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

router.post("/banners", async (req, res) => {
  try {
    const { img, title, heading, subtitle } = req.body;
    const newBanner = new Banner({ img, title, heading, subtitle });
    await newBanner.save();
    res.status(200).json({ success: true, newBanner });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
