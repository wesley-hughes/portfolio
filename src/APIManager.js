export const getImages = () => {
    return fetch(`
    https://portfolio-api-rpk7v.ondigitalocean.app/images
      `).then((res) => res.json())
  }
export const getProjects = () => {
    return fetch(`
    https://portfolio-api-rpk7v.ondigitalocean.app/projects
      `).then((res) => res.json())
  }