// src/components/Header.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBell, FaEnvelope, FaDesktop } from 'react-icons/fa';
import NotificationPanel from './NotificationPanel';
import '../App.css';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showNotifications, setShowNotifications] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search/${searchQuery}`);
    }
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  return (
    <header className="header">
      <h1 className="logo">MediAid</h1>
      <form className="search-bar" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Ingresar nombre del medicamento"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </form>
      <div className="header-icons">
        <FaBell onClick={toggleNotifications} />
        {showNotifications && <NotificationPanel />}
        <FaEnvelope />
        <FaDesktop />
      </div>
      <div className="welcome">
        <img src="profile-pic.png" alt="Profile" className="profile-pic" />
        <span>Bienvenido a MediAid</span>
      </div>
    </header>
  );
};

export default Header;
