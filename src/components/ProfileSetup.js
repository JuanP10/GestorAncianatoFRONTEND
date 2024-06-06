import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const ProfileSetup = () => {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [accounts, setAccounts] = useState(() => {
    const savedAccounts = localStorage.getItem('accounts');
    return savedAccounts ? JSON.parse(savedAccounts) : [];
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isSignUp) {
      // Lógica para crear una cuenta
      const newAccount = { fullName, username, password, userType };
      const updatedAccounts = [...accounts, newAccount];
      setAccounts(updatedAccounts);
      localStorage.setItem('accounts', JSON.stringify(updatedAccounts));
      setIsSignUp(false);
      alert('Cuenta creada exitosamente. Por favor, inicia sesión.');
    } else {
      // Lógica para iniciar sesión
      const account = accounts.find(acc => acc.username === username && acc.password === password);
      if (account) {
        console.log({ fullName: account.fullName, username: account.username, userType: account.userType });
        navigate('/home');
      } else {
        alert('Usuario o contraseña incorrectos.');
      }
    }
  };

  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="profile-setup-container">
      <form className="profile-setup-form" onSubmit={handleSubmit}>
        <h2>{isSignUp ? 'Crear Cuenta' : 'Inicio de sesión'}</h2>
        {isSignUp && (
          <div className="form-group">
            <label>Nombre Completo</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
        )}
        <div className="form-group">
          <label>Usuario</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Clave</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {isSignUp && (
          <div className="form-group">
            <label>Tipo de Usuario</label>
            <select
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              required
            >
              <option value="">Selecciona Tipo De Usuario</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
          </div>
        )}
        <div className="form-buttons">
          <button type="submit">{isSignUp ? 'Crear Cuenta' : 'Continuar'}</button>
          <button type="button" onClick={toggleSignUp}>
            {isSignUp ? 'Volver al Inicio de Sesión' : 'Crear Cuenta'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileSetup;
