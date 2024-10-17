const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;

let ideas = []; // In-memory storage for ideas

app.use(cors());
app.use(bodyParser.json());

// Chatbot logic (mock)
app.post("/chat", (req, res) => {
  const { message } = req.body;
  const response = `You said: ${message}`; // Simple echo response
  res.json(response);
});

// Endpoint to get saved ideas
app.get("/ideas", (req, res) => {
  res.json(ideas);
});

// Endpoint to save ideas
app.post("/ideas", (req, res) => {
  const newIdea = req.body.idea;
  ideas.push(newIdea);
  res.json(ideas);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
