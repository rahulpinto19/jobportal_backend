const express = require("express");
const app = express();
const router = express.Router();
app.use(express.json());
const cors = require("cors");
const job = require("../models/job");

app.use(cors());
router.post("/upload", async (req, res) => {
  const newjob = req.body;
  console.log(newjob);
  try {
    const newJob = new job(newjob);
    const result = await newJob.save();
    
    if (result) {

      res.send({ code: 200, message: "job saved in the database" });
    } else {
      res.send({ code: 200, message: "Technical issue",result:result });
    }
  } catch (err) {
    console.log(err)
    res.send({ code: 200, message: "Technical issue",err:err });
  }
});

module.exports = router;
