import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProfileSetup from './components/ProfileSetup';
import Home from './components/Home';
import Medication from './components/Medication';
import Organize from './components/Organize';
import Profile from './components/Profile';
import SearchResults from './components/SearchResults';
import './App.css';

function App() {
  return (
    <Router>
          <div>
            <Routes>
              <Route path="/" element={<ProfileSetup />} />
              <Route path="/home" element={<Home />} />
              <Route path="/medication" element={<Medication />} />
              <Route path="/organize" element={<Organize />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/search/:query" element={<SearchResults />} />
            </Routes>
          </div>
    </Router>
  );
}

export default App;
