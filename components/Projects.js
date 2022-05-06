import { useEffect, useState } from 'react'
import Project from './Project'
import Spinner from './Spinner'

export default function Works() {
  const [projects, setProjects] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('https://khimshportfolio.herokuapp.com/api/projects')
      .then((response) => response.json())
      .then((data) => {
        setProjects(data)
        setIsLoading(false)
      })
      .catch((err) => console.log(err))
  }, [])
  return <>{isLoading ? <Spinner /> : projects.map((project) => <Project key={project._id} project={project} />)}</>
}
