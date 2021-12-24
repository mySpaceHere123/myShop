import jwt, { decode } from "jsonwebtoken";
import User from "../models/userModel.js";

const protect = async (req, res, next) => {
  try {
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select("-password");

      next();
    }
    if (!token) {
      throw new Error("Not authorised, no token.");
    }
  } catch (error) {
    console.log(error);
    res.status(401).send(error);
  }
};

export { protect };
