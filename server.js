const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const app = express();
// Setting port server//
const PORT = process.env.PORT || 3001;

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/Tap_out_db",
    { useNewUrlParser: true,useUnifiedTopology: true }
  );
//   Link to the routes//

app.listen(PORT, () => {
  console.log("App running on port!"+PORT);
});
