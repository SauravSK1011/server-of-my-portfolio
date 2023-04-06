const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ProjectSchema = new Schema({
  lang: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  star: {
    type: Number,
    required: true,
  },
  githuburl: {
    type: String,
    required: true,
  },
  otherurl: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Projects", ProjectSchema);
