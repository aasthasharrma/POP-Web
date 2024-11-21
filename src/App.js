import React from 'react';
import './App.css';
import Navbar from './components/Navbar'; // Adjust this path as needed
import Home from './components/Home'; // Adjust this path as needed

function App() {
  return (
    <div className="App">
      <Navbar /> {/* Include the Navbar component */}
      <Home /> {/* Include the Home component */}
    </div>
  );
}

export default App;
