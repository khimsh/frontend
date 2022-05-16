import Link from 'next/link'
import { useRouter } from 'next/router'
import { StyledNav } from './styled/Nav.styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'

export default function Nav({ handleNavClose }) {
  const router = useRouter()

  return (
    <StyledNav>
      <button type='button' onClick={handleNavClose}>
        <FontAwesomeIcon icon={faClose} size='2xl' />
      </button>
      <ul>
        <li className={router.pathname === '/' ? 'active' : null} onClick={handleNavClose}>
          <Link href='/'>home</Link>
        </li>
        <li className={router.pathname === '/projects' ? 'active' : null} onClick={handleNavClose}>
          <Link href='/projects'>projects</Link>
        </li>
        <li className={router.pathname === '/contact' ? 'active' : null} onClick={handleNavClose}>
          <Link href='/contact'>contact</Link>
        </li>
      </ul>
    </StyledNav>
  )
}
