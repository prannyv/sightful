const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/message", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.post("/process-url", (req, res) => {
  const userURL = req.body.url; // Assuming the URL is sent in the request body

  // Process the URL here (e.g., fetch the content, analyze it, etc.)

  // Send a response back to the frontend
  res.json({ message: "URL received and processed successfully" });
});

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});
