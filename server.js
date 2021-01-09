const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const apiRoutes = require("./routes/apiRoutes.js");
const htmlRoutes = require("./routes/htmlRoutes.js");

const app = express();
// Setting port server//
const PORT = process.env.PORT || 3001;

app.use(morgan("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/Tap_out_db",
    { useNewUrlParser: true,
        useFindAndModify:false
        // useUnifiedTopology: true 
    }
  );
//   Link to the routes//
app.use(htmlRoutes);
// app.use(apiRoutes);
// Parsed in app as a required parameter to the function //
apiRoutes(app)
app.listen(PORT, () => {
    // console.log("App running on port!"+PORT);
    console.log(`App running on port ${PORT}`)
});
