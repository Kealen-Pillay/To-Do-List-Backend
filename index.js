const express = require("express");
var cors = require("cors");
const mongoose = require("mongoose");
const tasks = require("./routes/items");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ extended: false }));
app.use("/", tasks);

const CONNECTION_URL =
  "mongodb+srv://test:test@to-do-app.ygzzapa.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  )
  .catch((error) => console.log(error.message));
