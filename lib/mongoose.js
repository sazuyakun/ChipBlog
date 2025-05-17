import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 0) {
      const uri = process.env.MONGODB_URI
      await mongoose.connect(uri, {
        dbName: "Blog-Post"
      });
      
      console.log("MongoDB connected!");
    }
  } catch (error) {
    console.log(error);
  }
};
