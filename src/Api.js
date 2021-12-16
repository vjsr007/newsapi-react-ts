export const get = ({ url }) =>
  fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json()
      }
      throw new Error(`Error getting data, status: ${response?.status}`)
    })
    .catch(error => {
      throw error
    })
