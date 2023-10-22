import React, { useState, useContext } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate
} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Blog from './components/Blog';
import BlogUnlocked from './components/BlogUnlocked';

function App() {
  const [isBlogUnlocked, setIsBlogUnlocked] = useState(false);

  return (
    <div className="App">
      <Router>
        <Navbar isBlogUnlocked={isBlogUnlocked}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog-unlocked" element={<BlogUnlocked />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
