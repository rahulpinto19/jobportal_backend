const express = require("express");
const app = express();
const router = express.Router();
const cors = require("cors");
const job = require("../models/job");

app.use(express.json());
app.use(cors());

// Route to fetch jobs
router.get("/fetchjobs", async (req, res) => {
  const data = req.query;
  const { minsalary, maxsalary, location, jobType, title } = data.credentials;
  const query = {};
  
  if (maxsalary) {
    query.maxsalary = { $lte: Number(maxsalary) * 1000 }; // Filter for salaries less than or equal to the provided value
  }
  if (minsalary) {
    query.minsalary = { $gte: Number(minsalary) * 1000 };
  }
  if (location) query.location = location;
  if (jobType) query.jobType = jobType;
  if (title) query.jobTitle = { $regex: new RegExp(title, "i") }; // Case-insensitive title match
  console.log(query);

  try {
    const results = await job.find(query);
    console.log(results.length);

    res.json(results); // Send the results as JSON
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Technical issue" });
  }
});

module.exports = router;
