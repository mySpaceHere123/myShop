import express from "express";

const router = express.Router();
import {} from "dotenv";
import {
  getProductById,
  getProducts,
} from "../controllers/productController.js";

//@description Fetch all products
//@route GET /api/products
//@access Public
router.route("/").get(getProducts);

//@description Fetch a single products
//@route GET /api/products/:id
//@access Public
router.route("/:id").get(getProductById);

export default router;
