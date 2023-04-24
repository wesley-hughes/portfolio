export const getImages = () => {
    return fetch(`
      http://localhost:8088/images
      `).then((res) => res.json())
  }