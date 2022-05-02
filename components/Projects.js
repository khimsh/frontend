import { useEffect, useState } from 'react'
import Project from './Project'

export default function Works() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch('https://khimshportfolio.herokuapp.com/api/projects')
      .then((response) => response.json())
      .then((data) => {
        setProjects(data)
      })
      .catch((err) => console.log(err))
  }, [])
  return (
    <>
      {projects.map((project) => (
        <Project key={project._id} project={project} />
      ))}
    </>
  )
}
