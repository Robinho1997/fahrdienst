const User = require("../models/User");

const createUser = async (req, res) => {
  try {
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
        return res.status(200).json({ msg: newUser });
      }
    });
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};

module.exports = { createUser };
