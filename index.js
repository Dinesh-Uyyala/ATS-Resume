const express = require("express");
const multer = require("multer");
const pdfParse = require("pdf-parse");
const mammoth = require("mammoth");
const fs = require("fs");
const path = require("path");

// Initialize Express app
const app = express();
const PORT = 3000;

// Configure multer for file uploads
const upload = multer({
  dest: "uploads/", // Directory to store uploaded files
  fileFilter: (req, file, cb) => {
    const fileTypes = /pdf|docx/;
    const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimeType = fileTypes.test(file.mimetype);

    if (extName && mimeType) {
      cb(null, true);
    } else {
      cb(new Error("Only PDF and DOCX files are allowed"));
    }
  },
});

// Function to parse PDF resumes
const parsePDF = async (filePath) => {
  const dataBuffer = fs.readFileSync(filePath);
  return pdfParse(dataBuffer);
};

// Function to parse DOCX resumes
const parseDOCX = async (filePath) => {
  const result = await mammoth.extractRawText({ path: filePath });
  return result.value;
};

// Analyze content and provide suggestions
const analyzeResume = (content) => {
  const suggestions = [];

  if (!content.includes("Skills")) {
    suggestions.push("Add a 'Skills' section highlighting your key competencies.");
  }
  if (!content.includes("Experience")) {
    suggestions.push("Include an 'Experience' section to detail your work history.");
  }
  if (!content.includes("Education")) {
    suggestions.push("Add an 'Education' section listing your academic qualifications.");
  }
  if (content.split(" ").length < 200) {
    suggestions.push("Expand your resume to include more relevant details.");
  }

  return suggestions;
};

// Upload and process the resume
app.post("/upload-resume", upload.single("resume"), async (req, res) => {
  try {
    const file = req.file;
    if (!file) {
      return res.status(400).send("No file uploaded.");
    }

    let content = "";

    if (file.mimetype === "application/pdf") {
      const parsed = await parsePDF(file.path);
      content = parsed.text;
    } else if (file.mimetype === "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
      content = await parseDOCX(file.path);
    }

    // Analyze resume content
    const suggestions = analyzeResume(content);

    // Clean up uploaded file
    fs.unlinkSync(file.path);

    res.status(200).json({
      message: "Resume analyzed successfully.",
      suggestions,
    });
  } catch (error) {
    console.error("Error processing resume:", error);
    res.status(500).send("An error occurred while processing the resume.");
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
