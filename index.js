const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let dev = {
  name: "Vaishnavi",
  mission: "Sakala Mission",
  day: 5,
  skills: ["Node.js", "Git", "JavaScript", "Express", "POST"],
  isShipping: true
};

app.get('/profile', (req, res) => {
  res.json(dev);
});

app.post('/profile', (req, res) => {
  dev = { ...dev, ...req.body, day: 5 };
  res.json({ message: "Profile updated", data: dev });
});

app.get('/', (req, res) => {
  res.send('Sakala Mission Day 5: API can now SAVE data');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:3000`);
});
