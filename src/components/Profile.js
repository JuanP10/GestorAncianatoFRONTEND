import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import '../App.css';

const Profile = () => {
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

export default Profile;
