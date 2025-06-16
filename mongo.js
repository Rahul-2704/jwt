import mongoose from "mongoose";
const MONGO_URI='mongodb+srv://rahulruke35:rahul_270204@cluster0.cdiqksn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ MongoDB Connected');
  } catch (error) {
    console.error('❌ MongoDB Connection Error:', error);
    process.exit(1); // stop the app if DB is not connected
  }
};

export default connectDB;