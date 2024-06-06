import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import '../App.css';

const SearchResults = () => {
  const { query } = useParams();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simular una búsqueda de datos
    const timeoutId = setTimeout(() => {
      // Simular resultados de búsqueda
      const data = [
        // Tus datos simulados aquí
        { id: 1, name: 'Medicamento 1' },
        { id: 2, name: 'Medicamento 2' },
      ];
      
      const filteredResults = data.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
      
      setResults(filteredResults);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [query]);

  if (loading) {
    return (
    <div className="App">
      <Header />
      <div className="main-content">
        <Sidebar />
        <div className='content'>
        <div className="search-results">Cargando...</div>
        </div>
      </div>
    </div>
    )
  }

  if (results.length === 0) {
    return (
      <div className="App">
      <Header />
      <div className="main-content">
        <Sidebar />
        <div className='content'>
        <div className="search-results">
        No se encontró nada <span className="sad-face">:(</span>
      </div>
        </div>
      </div>
    </div>
    );
  }

  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <Sidebar />
        <div className='content'>
        <div className="search-results">
      <h2>Resultados de búsqueda para "{query}"</h2>
      <ul>
        {results.map(result => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul>
    </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
