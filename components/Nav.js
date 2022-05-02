import Link from 'next/link'
import { StyledNav } from './styled/Nav.styled'

export default function Nav() {
  return (
    <StyledNav>
      <ul>
        <li>
          <Link href='/'>home</Link>
        </li>
        <li>
          <Link href='/projects'>projects</Link>
        </li>
        <li>
          <a href='/contact'>contact</a>
        </li>
      </ul>
    </StyledNav>
  )
}
