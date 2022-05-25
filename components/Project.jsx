import { faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { StyledWork } from './styled/Project.styled'

export default function Work({ project }) {
  const { title, projectImage, site_url, description } = project
  return (
    <StyledWork>
      <figure style={{ position: 'relative', width: '100%', aspectRatio: '1.35' }}>
        {/* fill,fixed,intrinsic,responsive,raw,undefined */}
        <Image
          src={'https://khimshportfolio.herokuapp.com/' + projectImage}
          layout='fill'
          objectFit='contain'
          alt={title}
          priority={true}
        />
      </figure>

      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={site_url} target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faEye} /> view live website
        </a>
      </div>
    </StyledWork>
  )
}
