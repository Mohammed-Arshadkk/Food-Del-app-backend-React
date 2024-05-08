import mongoose  from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://mohammedarshad62820:e80FX562iSmuF8aZ@cluster0.iy6lpyw.mongodb.net/food-del').then(()=> console.log("DB Connected"));
}