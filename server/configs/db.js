import mongoose from "mongoose";




const connectDB = async () => {
  try {
    mongoose.connection.on('connected', () => console.log("Database conected"));
    await mongoose.connect(`${process.env.MONGODB_URI}/blognow`)
    
  } catch (error) {
    console.log(error.message);
    
  }
}

export default connectDB;