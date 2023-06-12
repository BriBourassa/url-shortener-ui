import React, { useState } from 'react';

const UrlForm = ({ addUrl, postNewUrl }) => {
  const [formData, setFormData] = useState({
    title: '',
    urlToShorten: ''
  })

  const handleNameChange = e => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = e => {
    e.preventDefault();
    const newUrl = {
      id:Date.now(),
      ...formData
    }
    addUrl(newUrl)
    postNewUrl(newUrl)
    clearInputs();
  }

  const clearInputs = () => {
    setFormData({title: '', urlToShorten: ''});
  }


    return (
      <form>
        <input
          type='text'
          placeholder='Title...'
          name='title'
          value={formData.title}
          onChange={handleNameChange}
        />

        <input
          type='text'
          placeholder='URL to Shorten...'
          name='urlToShorten'
          value={formData.urlToShorten}
          onChange={handleNameChange}
        />

        <button onClick={handleSubmit}>
          Shorten Please!
        </button>
      </form>
    )
  
}

export default UrlForm;
