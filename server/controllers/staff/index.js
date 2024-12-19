import express from "express";

const router = express.Router();

router.get("/getallstaff", (req, res) => {
  try {
    res.status(200).json({ msg: "get all staff" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
});

export default router;
