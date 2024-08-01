import mongoose from "mongoose";

export const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log(" MongoDB ye bağlandı");
  } catch (error) {
    console.log("Bağlanamadı: ", error);
  }
};
