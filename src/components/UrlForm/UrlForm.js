import React, { useState } from 'react';

const UrlForm = ({ addUrl, postNewUrl }) => {
  const [formData, setFormData] = useState({
    title: '',
    long_url: ''
  })

  const handleNameChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = e => {
    e.preventDefault();
    const newUrl = {
      ...formData
    }
    console.log(newUrl, 'this is confusing')
    const newStuff = postNewUrl(newUrl)
    // console.log(newStuff)
    addUrl(newUrl)
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
          name='long_url'
          value={formData.long_url}
          onChange={handleNameChange}
        />

        <button onClick={handleSubmit}>
          Shorten Please!
        </button>
      </form>
    )
};

export default UrlForm;
