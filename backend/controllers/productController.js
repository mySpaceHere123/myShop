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

//@description Delete a product
//@route DELETE /api/products/:id
//@access Private/Admin
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    // console.log(req.params.id);
    if (product) {
      await product.remove();
      res.json({ message: "Removed" });
    } else {
      res.status(404);
      throw new Error("Product not found");
      // res.send("yo");
    }
  } catch (error) {
    res.send(error);
  }
};

//@description Create a product
//@route POST /api/products/:id
//@access Private/Admin
const createProduct = async (req, res) => {
  try {
    const product = new Product({
      name: "Sample name",
      price: 0,
      user: req.user._id,
      image: "/images/sample.jpg",
      brand: "Sample brand",
      category: "Sample category",
      countInStock: 0,
      numReviews: 0,
      description: "Sample description",
    });
  } catch (error) {
    res.send(error);
  }
};

export { getProductById, getProducts, deleteProduct };
