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
        // console.log(data.urls)
        setUrls(data.urls);
      });
    } catch (err) {
      setError(err);
    }
  }, []);

  const addUrl = (newUrl) => {
    setUrls([...allUrls, newUrl])
  }

  const postNewUrl = async (newUrl) => {
    const url = "http://localhost:3001/api/v1/urls"
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(newUrl),
        headers: {
          'Content-type': 'application/json'
        }
      });
      const postedUrl = await response.json()
      setUrls([...allUrls, postedUrl])
      console.log(allUrls)
    } catch(error) {
      setError(error.message)
    }
  }

  return (
    <main className="App">
      <header>
        <h1>URL Shortener</h1>
        <UrlForm addUrl={addUrl} postNewUrl={postNewUrl} />
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
