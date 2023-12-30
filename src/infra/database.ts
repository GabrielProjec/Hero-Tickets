import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://GabrielRodrigues:Abc123456@cluster0.zb2q2pv.mongodb.net/hero-tickets"
    );
    console.log("Connect DB  Success");
  } catch (error) {
    console.log("Error connect in database: ", error);
  }
}
