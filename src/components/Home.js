import React from 'react';
import InventoryStatus from './InventoryStatus';
import Contenido from './Contenido';
import Header from './Header';
import Sidebar from './Sidebar';
import '../App.css';

const Home = () => {
  return (
      <div className="App">
        <Header />
        <div className="main-content">
          <Sidebar />
          <div className='content'>
            <Contenido />
            <InventoryStatus />
          {/* Aquí puedes agregar el contenido del dashboard */}
          </div>
        </div>
      </div>
  );
};

export default Home;
