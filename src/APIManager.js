export const getImages = () => {
    return fetch(`
      http://localhost:8088/images
      `).then((res) => res.json())
  }
export const getProjects = () => {
    return fetch(`
      http://localhost:8088/projects
      `).then((res) => res.json())
  }