const mongoose = require("mongoose");

const surveySchema = new Schema({
  name: String,
  gender: String,
  nationality: String,
  email: String,
  phone: String,
  address: String,
  message: String,
});

const Listing = mongoose.model("Listing", surveySchema);

module.exports = Listing;
