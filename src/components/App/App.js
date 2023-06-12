import React, { useState, useEffect } from 'react';
import './App.css';
import { getUrls } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

const App = () => {
  const [allUrls, setUrls] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    try {
      getUrls().then((data) => {
        console.log(data.urls)
        setUrls(data.urls);
      });
    } catch (err) {
      setError(err);
    }
  }, []);

  const addUrl = (newUrl) => {
    setUrls([...allUrls, newUrl])
  }

  return (
    <main className="App">
      <header>
        <h1>URL Shortener</h1>
        <UrlForm addUrl={addUrl}/>
      </header>
      {error && (
        <div className="error-text">
          {error.name}: {error.message}
        </div>
      )}

      <UrlContainer allUrls={allUrls} />
    </main>
  );
};

export default App;
