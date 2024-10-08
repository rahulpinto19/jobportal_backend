const mongoose = require("mongoose");

// Define the schema
const jobSchema = new mongoose.Schema(
  {
    jobTitle: {
      type: String,
      required: true,
      trim: true,
    },
    companyName: {
      type: String,
      required: true,
      trim: true,
    },
    location: {
      type: String,
      required: true,
      enum: ["Hyderabad", "Banglore", "Kolkata", "Delhi", "Chennai","Bangalore"],
    },
    jobType: {
      type: String,
      enum: ["Full-time", "Part-time", "Internship", "Contract","Permanent"], // Define the possible job types
      required: true,
    },
    minsalary: {
      type: Number,
      required: true,
    },
    maxsalary: {
      type: Number,
      required: true,
    },
    applicationDeadline: {
      type: Date,
      required: true,
    },
    jobDescription: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true, // Automatically creates `createdAt` and `updatedAt` fields
  }
);

// Create the model from the schema
const job = mongoose.model("Job", jobSchema);

module.exports = job;
