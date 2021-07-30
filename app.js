const express = require("express");
const mongoose = require("mongoose");

const { PORT = 3000, HOST = "localhost" } = process.env;

const app = express();

mongoose.connect(`mongodb://${HOST}:27017/mestodb`, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use("/users", require("./routes/users"));

app.use("/cards", require("./routes/cards"));

app.listen(PORT, () => console.log(`API listening on http://${HOST}:${PORT}`));
