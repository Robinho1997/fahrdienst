require("dotenv").config();
const { createUser } = require("./controllers/user");
const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const port = process.env.PORT;
const cors = require("cors");
const rides = require("./routes/ride");

app.use(express.json());
app.use(cors());
app.use("/api/v1/fahrten", rides);


app.post("/register", createUser);

const start = async () => {
  try {
    await connectDB(process.env.DB_URL);
    app.listen(port, console.log(`Server listens on ${port} ...`));
  } catch (error) {
    console.log(error);
  }
};

start();
