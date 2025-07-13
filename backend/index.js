// backend/index.js
const express = require('express');
const cors = require('cors');
// Pastikan Anda mengimpor 'projects' dari data
const { educationHistory, skills, projects } = require('./data'); 
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Endpoint yang sudah ada
app.get('/api/education', (req, res) => res.json(educationHistory));
app.get('/api/skills', (req, res) => res.json(skills));
app.get('/api/projects', (req, res) => res.json(projects));

// Endpoint untuk satu skill
app.get('/api/skills/:slug', (req, res) => {
  const { slug } = req.params;
  const skill = skills.find(s => s.slug === slug);
  
  if (skill) {
    res.json(skill);
  } else {
    res.status(404).json({ message: 'Keahlian tidak ditemukan' });
  }
});

// ### TAMBAHKAN ENDPOINT YANG HILANG INI ###
app.get('/api/projects/:slug', (req, res) => {
  const { slug } = req.params;
  const project = projects.find(p => p.slug === slug);

  if (project) {
    res.json(project);
  } else {
    res.status(404).json({ message: 'Proyek tidak ditemukan' });
  }
});
// ##########################################

app.listen(PORT, () => {
  console.log(`Server backend berjalan di http://localhost:${PORT}`);
});