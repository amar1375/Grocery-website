import express from "express";
import Coupon from "../models/Coupon.js";

const router = express.Router();

// Create a new coupon
router.post("/", async (req, res) => {
  try {
    const { code, discountPercentage, expiresAt } = req.body;

    const existingCoupon = await Coupon.findOne({ code });
    if (existingCoupon) {
      return res.status(400).json({ message: "Coupon code already exists" });
    }

    const newCoupon = new Coupon({ code, discountPercentage, expiresAt });
    await newCoupon.save();

    res.status(201).json(newCoupon);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all coupons
router.get("/", async (req, res) => {
  try {
    const coupons = await Coupon.find();
    res.json(coupons);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Apply a coupon (check validity)
router.post("/apply", async (req, res) => {
  try {
    const { code } = req.body;

    const coupon = await Coupon.findOne({ code, isActive: true });
    if (!coupon) return res.status(404).json({ message: "Invalid or expired coupon" });

    if (coupon.expiresAt < new Date()) {
      return res.status(400).json({ message: "Coupon has expired" });
    }

    res.json({
      message: "Coupon applied successfully",
      discountPercentage: coupon.discountPercentage,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
