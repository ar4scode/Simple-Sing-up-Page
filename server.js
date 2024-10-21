const express = require("express");
const path = require("path");
const app = express();

// Serve static files from the "style" and root directories
app.use(express.static(path.join(__dirname)));

// Serve the index.html file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Listen on port 8000
const port = 8000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
