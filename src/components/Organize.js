import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import '../App.css';

const Organize = () => {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <Sidebar />
        <div className='content'>
        
        </div>
      </div>
    </div>
);
};

export default Organize;
