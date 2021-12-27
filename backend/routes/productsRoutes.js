import express from "express";

const router = express.Router();
import {} from "dotenv";
import {
  deleteProduct,
  getProductById,
  getProducts,
} from "../controllers/productController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").get(getProducts);
router.route("/:id").get(getProductById).delete(protect, admin, deleteProduct);

export default router;
