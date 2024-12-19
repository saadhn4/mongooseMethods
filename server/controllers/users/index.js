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

//now im doing the apis in the steps

router.get("/getall", async (req, res) => {
  try {
    let allUsers = await userModel.find({});
    console.log(allUsers);
    res.status(200).json(allUsers);
  } catch (error) {
    console.log(error);
  }
});

router.get("/getone", async (req, res) => {
  try {
    let user = await userModel.find({ firstName: "Saad" });
    console.log(user);
    res.status(200).json({ user: user });
  } catch (error) {
    console.log(error);
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
