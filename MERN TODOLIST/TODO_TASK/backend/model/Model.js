const mongoose = require("mongoose");

const Schema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    Task: { type: String, required: true },
    Time: { type: Date, default: Date.now()},
  }
);

module.exports = mongoose.model("Task", Schema);
