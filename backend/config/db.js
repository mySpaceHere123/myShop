import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`MongoDB Connected: ${con.connection.host}`.green.underline);
  } catch (error) {
    console.error("Error: ", error.message.red.bold);
    process.exit(1);
  }
};

export default connectDB;