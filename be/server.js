const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(
  "mongodb+srv://yusuf:Qwerty321@cluster0.7ihia63.mongodb.net/zara-database?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// Define a mongoose schema for the form data
const FormDataSchema = new mongoose.Schema({
  clubname: String,
  cluboruni: String,
  category: String,
  player1: String,
  phone1: String,
  nic1: String,
  email1: String,
  player2: String,
  phone2: String,
  nic2: String,
  email2: String,
});

const FormData = mongoose.model("FormData", FormDataSchema);

app.use(bodyParser.json());

// API route to handle form submissions
app.post("/api/submit-form", async (req, res) => {
  try {
    const formData = new FormData(req.body);
    await formData.save();
    res.status(201).json({ message: "Form data submitted successfully" });
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
