import React from 'react';
import { Link } from 'react-router-dom';

const FrontendDetails = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-xl shadow-xl overflow-hidden max-w-3xl">
        <div className="p-6 sm:p-10">
          <h1 className="text-4xl font-extrabold text-blue-700 mb-4">Front End Development</h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Master modern front-end development techniques and build stunning, interactive web applications with 
            technologies like HTML, CSS, JavaScript, and frameworks such as React and Angular.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">What You'll Learn:</h2>
            <ul className="list-inside list-disc text-gray-800 space-y-2">
              <li>HTML & CSS Fundamentals</li>
              <li>JavaScript Essentials</li>
              <li>React and Angular Frameworks</li>
              <li>Project-Based Learning for Real-World Skills</li>
            </ul>
          </div>
          <Link
            to="/video"
            className="block text-center px-6 py-3 bg-blue-700 text-white font-bold rounded-md shadow hover:bg-blue-800 transition duration-300"
          >
            Start Your Journey
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FrontendDetails;
