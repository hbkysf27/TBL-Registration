const express = require("express");
const app = express();
const cors = require("cors");

app.use(
  cors({
    origin: "*",
  })
);

const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://yusuf:Qwerty321@cluster0.7ihia63.mongodb.net/zara-database?retryWrites=true&w=majority"
);

const post_route = require("./routes/post_route");
app.use("/api", post_route);

app.listen(8000, () => {
  console.log("server is running");
});
