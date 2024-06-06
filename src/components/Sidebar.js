import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBoxOpen, FaPills, FaCalendarAlt, FaUser } from 'react-icons/fa';
import '../App.css';

const Sidebar = () => {
  const location = useLocation();
  const [selectedIcon, setSelectedIcon] = useState('');

  useEffect(() => {
    // Obtener la parte final de la ruta actual (sin el primer '/')
    const currentPath = location.pathname.slice(1);

    // Actualizar el estado del ícono seleccionado basado en la ruta actual
    setSelectedIcon(currentPath);
  }, [location]);

  return (
    <div className="sidebar">
      <Link to="/home">
        <div className={`sidebar-button ${selectedIcon === 'home' ? 'selected' : ''}`}>
          <FaBoxOpen />
        </div>
      </Link>
      <Link to="/medication">
        <div className={`sidebar-button ${selectedIcon === 'medication' ? 'selected' : ''}`}>
          <FaPills />
        </div>
      </Link>
      <Link to="/organize">
        <div className={`sidebar-button ${selectedIcon === 'organize' ? 'selected' : ''}`}>
          <FaCalendarAlt />
        </div>
      </Link>
      <Link to="/profile">
        <div className={`sidebar-button ${selectedIcon === 'profile' ? 'selected' : ''}`}>
          <FaUser />
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
