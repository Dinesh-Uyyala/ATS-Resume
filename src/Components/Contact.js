import React, { useState } from 'react';

function Contact() {
  const [results, setResults] = useState(null);
  const [uploadedResume, setUploadedResume] = useState(null);

  // Handle Resume Upload
  const handleResumeUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedResume(file);
      alert(`Resume "${file.name}" uploaded successfully!`);
    }
  };

  // AI Resume Scan Trigger
  const handleResumeScan = () => {
    if (!uploadedResume) {
      alert('Please upload a resume first.');
      return;
    }

    // TODO: Replace with real API logic to scan the resume
    alert('Resume scanned successfully! AI suggestions are now available.');
    // You can add code here to set the actual results after scanning
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center py-24"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-blue-700 mb-10">
          Get in Touch
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* Form Section */}
          <form className="space-y-6 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="First Name"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                College Name
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your College Name"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Email ID
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email ID"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Year of Passing
                </label>
                <input
                  type="number"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Year of Graduation"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Career Gap (in years)
                </label>
                <input
                  type="number"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Career Gap (if any)"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Experience
              </label>
              <select
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="fresher">Fresher</option>
                <option value="experienced">Experienced</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Contact Number
              </label>
              <input
                type="tel"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Contact Number"
                required
              />
            </div>

            {/* Resume Upload Section */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Upload Resume
              </label>
              <input
                type="file"
                className="w-full border border-gray-300 rounded-lg p-3"
                accept=".pdf, .doc, .docx"
                onChange={handleResumeUpload}
              />
            </div>

            {/* Scan Button */}
            <button
              type="button"
              onClick={handleResumeScan}
              className="mt-4 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
            >
              Scan Resume
            </button>
          </form>

          {/* Results Section */}
          {results && (
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-blue-600">
                AI Scan Results
              </h3>
              <ul className="list-disc list-inside space-y-2">
                {results.jobs.map((job, index) => (
                  <li key={index} className="text-gray-800">
                    {job}
                  </li>
                ))}
              </ul>
              <p className="text-gray-600">
                Strengths: {results.strengths}
              </p>
              <p className="text-gray-600">
                Weaknesses: {results.weaknesses}
              </p>
              <p className="text-gray-600">
                Suggestions: {results.suggestions}
              </p>
              <p className="text-gray-600">
                Resume Recommendation: {results.newResumeRecommendation}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}



export default Contact;
