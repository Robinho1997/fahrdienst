const Ride = require("../models/Ride");

const getAllRides = async (req, res) => {
  try {
    const ride = await Ride.find({});
    res.status(201).json({ ride });
  } catch (error) {
    res.status(402).json({ msg: error });
  }
};

const createRide = async (req, res) => {
  try {
    const ride = await Ride.create(req.body);
    res.status(201).json({ ride });
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};

const deleteRide = async (req, res) => {
  try {
    const {name: rideName} = req.params;
    const ride = await Ride.findOneAndDelete({ name: rideName });
    res.status(201).json({ ride });
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};

module.exports = { getAllRides, createRide, deleteRide };
