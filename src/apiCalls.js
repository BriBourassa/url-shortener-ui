export const getUrls = () => {
  return fetch('http://localhost:3001/api/v1/urls')
      .then(response => response.json())
      .catch(err => {
        throw new Error(err)
      })
}

export default getUrls