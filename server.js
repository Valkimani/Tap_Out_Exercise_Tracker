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

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/tap-out",
    { useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify:false
        // useCreateIndex:true,
    }
  );
  const connection = mongoose.connection;
  connection.on("connected", () => {
      console.log("Mongoose connected successfully.")
  });
  connection.on ("error", (err)=> {
    console.log("Mongoose connection error: " + err);
  });
//   Link to the routes//
app.use(htmlRoutes);
// app.use(apiRoutes);
// Parsed in app as a required parameter to the function//
apiRoutes(app)
app.listen(PORT, () => {
    // console.log("App running on port!"+PORT);
    console.log(`App running on port ${PORT}`)
});
