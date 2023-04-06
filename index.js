require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const Projects = require("./models/Projects");

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.set("strictQuery", false);
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

app.get("/", (req, res) => {
  res.send({ title: "My Portfolio" });
});
app.get("/Projects", async (req, res) => {
  const Project = await Projects.find();

  if (Project) {
    res.json(Project);
  } else {
    res.send("Something went wrong.");
  }
});

app.get("/add-Project", async (req, res) => {
  try {
    await Projects.insertMany([
      {
        lang: "Flutter",
        title: "Agroscan",
        description: "An Application For Farmer to Pridict of crop deisease",
        star:3,
        githuburl:"https://github.com/SauravSK1011/agroscanapp",
        otherurl:""
      },
      {
        lang: "Flutter",
        title: "AI Translator",
        description: "This is a Translator App Which is Build using Flutter, Speech To Text, Google ML Kit, Google Translator and Text To Speech.",
        star:5,
        githuburl:"https://github.com/SauravSK1011/AI_Translator",
        otherurl:""
      },
      
    ]);
    res.json({ Data: "Added" });
  } catch (error) {
    console.log("err", +error);
  }
});

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("listening for requests");
  });
});
