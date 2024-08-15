const express = require("express");
const app = express();
const port = 3002;
app.use(express.json());
const cors = require("cors");
// app.use(cors())
app.use(
  cors({
    origin: ["https://jobportal-kk6v.vercel.app"],
    credentials: true,
    sameSite: "none",
  })
);
const connectToMongo = require("./db");
const upload = require("./routes/uploadjob");
const fetchjob = require("./routes/fetchjobs");

// Define a basic route
app.get("/", (req, res) => {
  res.send({ message: working });
});
app.use("/", upload);
app.use("/", fetchjob);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
