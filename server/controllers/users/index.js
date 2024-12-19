import express from "express";
import userModel from "../../models/Users/Users.js";

const router = express.Router();

router.get("/getallusers", (req, res) => {
  try {
    res.status(200).json({ msg: "get all users" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
});

//now im doing the apis in the steps

//1. getting all users

router.get("/getall", async (req, res) => {
  try {
    let allUsers = await userModel.find({});
    console.log(allUsers);
    res.status(200).json(allUsers);
  } catch (error) {
    console.log(error);
  }
});

//2. getting a specific user

router.get("/getone", async (req, res) => {
  try {
    let user = await userModel.find({ firstName: "Saad" });
    console.log(user);
    res.status(200).json({ user: user });
  } catch (error) {
    console.log(error);
  }
});

//3. registering a user

router.post("/register", async (req, res) => {
  try {
    let userInput = req.body;
    console.log(userInput);
    await userModel.create(userInput);
    res.status(200).json({ msg: "Registered! 💻" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
});

//4. updating a key of the user ; using a unique key (here i used phone number to update phone number itself, but i can update anything rlly{i think})

router.put("/update/:phone", async (req, res) => {
  try {
    let userPhone = req.params.phone;
    let userUpdate = req.body;
    console.log(userPhone);
    await userModel.findOneAndUpdate(
      { phone: userPhone },
      { $set: userUpdate },
      { new: true }
    );
    res.status(201).json({ msg: "User Updated Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
});

//5. deleting a user (one)
router.delete("/delete/:phone", async (req, res) => {
  try {
    let userPhone = req.params.phone;
    console.log(userPhone);
    await userModel.deleteOne({ phone: userPhone });
    res.status(500).json({ msg: "User deleted succesfully!" });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

//6. deleting many users (2 scenarios)

router.delete("/deleteall", async (req, res) => {
  try {
    await userModel.deleteMany({}); //deletes all documents in database
    //or await userModel.deleteMany({firstName: "Saad"}); => deletes all documents with firstName Saad
    res.status(200).json({ msg: "All documents deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
});

//this i did on my own

router.get("/count", async (req, res) => {
  try {
    let result = await userModel.countDocuments({});
    console.log(result);
    res.status(200).json({ count: result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
});

export default router;
