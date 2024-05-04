import mongoose from "mongoose";

export const connectMongoDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/genc-ortagim");
    console.log(" MongoDB ye bağlandı");
  } catch (error) {
    console.log("Bağlanamadı: ", error);
  }
};
