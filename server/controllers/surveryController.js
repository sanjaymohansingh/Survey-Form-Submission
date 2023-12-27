const Survey = require("../models/surveyModel");
const { errorHandler } = require("../utils/error");

const create = async (req, res, next) => {
  try {
    const survey = new Survey(req.body);
    await survey.save();
    res
      .status(201)
      .json({ success: true, message: "Survey submitted successfully!" });
  } catch (error) {
    console.error("Error submitting survey", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

const get = async (req, res, next) => {
  try {
    const surveys = await Survey.find();
    res.status(200).json({ success: true, surveys });
  } catch (error) {
    console.error("Error fetching surveys", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

module.exports = { create, get };
