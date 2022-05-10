import Link from 'next/link'
import Footer from './Footer'
import Nav from './Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { StyledContainer } from './styled/Container.styled'
import { StyledHeader } from './styled/Header.styled'
import { StyledLogo } from './styled/Logo.styled'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Layout({ children }) {
  return (
    <>
      <StyledContainer>
        <StyledHeader>
          <StyledLogo>
            <Link href='/'>
              <a>
                <span>i</span>a kh<span>i</span>msh
              </a>
            </Link>
          </StyledLogo>

          <Nav />

          <button type='button'>
            <FontAwesomeIcon icon={faBars} size='2xl' />
          </button>
        </StyledHeader>
      </StyledContainer>

      <main>{children}</main>

      <Footer />
    </>
  )
}
