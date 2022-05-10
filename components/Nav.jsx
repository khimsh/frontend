import Link from 'next/link'
import { useRouter } from 'next/router'
import { StyledNav } from './styled/Nav.styled'

export default function Nav() {
  const router = useRouter()

  return (
    <StyledNav>
      <ul>
        <li className={router.pathname === '/' ? 'active' : null}>
          <Link href='/'>home</Link>
        </li>
        <li className={router.pathname === '/projects' ? 'active' : null}>
          <Link href='/projects'>projects</Link>
        </li>
        <li className={router.pathname === '/contact' ? 'active' : null}>
          <Link href='/contact'>contact</Link>
        </li>
      </ul>
    </StyledNav>
  )
}
