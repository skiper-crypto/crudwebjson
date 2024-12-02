const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const studentRoutes = require('./routes/studentRoutes');

const app = express();
const port = 5001;

// Enable CORS
app.use(cors());
app.use(bodyParser.json()); // Parse incoming requests with JSON payloads

app.use('/students', studentRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
