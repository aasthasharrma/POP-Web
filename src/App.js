import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Project1 from './components/Project1'; // Import for Project 1
import Project2 from './components/Project2'; // Import for Project 2
import Project3 from './components/Project3'; // Import for Project 3
import Project4 from './components/Project4'; // Import for Project 4
import './App.css'; // Main CSS file

function App() {
  return (
    <Router basename="/POP-Web">
      <Navbar/>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add routes for each project */}
          <Route path="/projects/project1" element={<Project1 />} />
          <Route path="/projects/project2" element={<Project2 />} />
          <Route path="/projects/project3" element={<Project3 />} />
          <Route path="/projects/project4" element={<Project4 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
