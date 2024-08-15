const express = require("express");
const app = express();
const router = express.Router();
const cors = require("cors");
const Job = require("../models/job");

app.use(express.json());
app.use(cors());

router.post("/upload", async (req, res) => {
  const newJobData = req.body;
  console.log(newJobData);

  try {
    const newJob = new Job(newJobData);
    const result = await newJob.save();
    console.log(result);
    res.status(200).send({ code: 200, message: "Job saved in the database", result });
  } catch (err) {
    console.error("Error saving job:", err);
    res.status(500).send({ code: 500, message: "Technical issue", error: err.message });
  }
});

module.exports = router;
