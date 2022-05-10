import { useEffect, useState } from 'react'
import Project from './Project'
import Spinner from './Spinner'

export default function Works({ projects }) {
  return <>{!projects ? <Spinner /> : projects.map((project) => <Project key={project._id} project={project} />)}</>
}
