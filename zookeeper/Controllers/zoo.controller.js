const router = require("express").Router();
const User = require("../models/zoo.models");

router.post("/create", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = new User({ username: username, password: password });
    const newUser = await user.save();
    res.json({ message: "user created", user: newUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
