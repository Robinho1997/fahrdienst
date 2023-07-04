const User = require("../models/User");

const createUser = async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    if (!userName || !email || !password) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    await User.findOne({ email: req.body.email }).then((user) => {
      if (user) {
        return res
          .status(400)
          .json({ email: "A user has already registered with this email" });
      } else {
        const newUser = new User({
          userName: req.body.userName,
          email: req.body.email,
          password: req.body.password,
        });
        newUser.save();
        console.log("New user created", newUser);
        return res.status(200).json({ msg: newUser });
      }
    });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(400).json({ msg: error });
  }
};

module.exports = { createUser };
