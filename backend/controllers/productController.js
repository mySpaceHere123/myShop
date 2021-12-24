import Product from "../models/productModel.js";

//@description Fetch all products
//@route GET /api/products
//@access Public
const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.log(error);
  }
};

//@description Fetch a single products
//@route GET /api/products/:id
//@access Public
const getProductById = async (req, res) => {
  try {
    console.log("yes");
    const product = await Product.findById(req.params.id);
    // console.log(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error("Product not found");
      // res.send("yo");
    }
  } catch (error) {
    res.send(error);
  }
};

export { getProductById, getProducts };
