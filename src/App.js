import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Courses from './Components/Courses';
import Internships from './Components/Internships';
import Careers from './Components/Careers';
import Contact from './Components/Contact'; // Ensure this is imported correctly
import FrontendDetails from './Components/FrontendDetails';
import video from './Components/video';


import './index.css';
import Video from './Components/video';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          {/* Assign a unique path for each component */}
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />}/>
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/internships" element={<Internships />} />
          <Route path="/Careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} /> {/* Changed to lowercase for consistency */}
          {/* Add more routes here if necessary */}
          <Route path="/FrontendDetails" element={<FrontendDetails />} />
          <Route path="/video" element={<Video />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
