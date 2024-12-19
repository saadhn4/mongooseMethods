import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    maxlength: 50,
    minlength: 2,
  },
  lastName: {
    type: String,
    required: true,
    maxlength: 50,
    minlength: 2,
  },
  phone: {
    type: Number,
    required: true,
    unique: true,
  },
});

const userModel = mongoose.model("Users", userSchema, "Users");
export default userModel;
