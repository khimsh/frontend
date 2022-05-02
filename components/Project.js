import { faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { StyledWork } from './styled/Project.styled'

export default function Work({ project }) {
  const { title, projectImage, site_url, description } = project
  return (
    <StyledWork>
      <a href={site_url} target='_blank' rel='noopener noreferrer'>
        <figure style={{ position: 'relative', width: '100%' }}>
          {/* fill,fixed,intrinsic,responsive,raw,undefined */}
          <Image src={'https://khimshportfolio.herokuapp.com/' + projectImage} layout='responsive' width='100%' height='100%' alt={title} />
        </figure>
      </a>
    </StyledWork>
  )
}
