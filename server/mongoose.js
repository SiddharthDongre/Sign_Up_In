import mongoose from "mongoose";

let db, suiSchema, suiModel;

mongoose.connect("mongodb://127.0.0.1:27017/Sign-Up-In");

db = mongoose.connection;

db.on("error", () => {
  console.error.bind(console, "Connection Error");
});

db.once('open', () => {
  console.log("We are connected");
});

suiSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

suiModel = mongoose.model("model", suiSchema);

export { suiModel };