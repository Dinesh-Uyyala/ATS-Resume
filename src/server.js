// server.js
const express = require('express');
const multer = require('multer');
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(express.json());

// POST endpoint to upload and analyze resume
app.post('/api/analyze-resume', upload.single('resume'), async (req, res) => {
  const file = req.file;

  if (!file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  try {
    // Call AI service API here with the resume data
    const apiResponse = await analyzeResume(file.path);
    res.json(apiResponse);
  } catch (error) {
    console.error('Error analyzing resume:', error);
    res.status(500).json({ error: 'Error processing resume' });
  }
});

// Function to send resume to an AI service for analysis
async function analyzeResume(filePath) {
  const response = await axios.post(
    'https://your-ai-service-api.com/analyze', // Replace with actual AI service endpoint
    {
      filePath,
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.AI_API_KEY}`, // API key stored in environment variables
      },
    }
  );

  // Extract keywords, strengths, and suggestions from API response
  return {
    keywords: response.data.keywords,
    strengths: response.data.strengths,
    suggestions: response.data.suggestions,
  };
}

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
