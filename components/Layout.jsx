import Link from 'next/link'
import Footer from './Footer'
import Nav from './Nav'
import useWindowDimensions from '../hooks/useWindownDimensions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { StyledContainer } from './styled/Container.styled'
import { StyledHeader } from './styled/Header.styled'
import { StyledLogo } from './styled/Logo.styled'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'

export default function Layout({ children }) {
  const [isNavShown, setIsNavShown] = useState(true)
  const [isSmallScreen, setIsSmallScreen] = useState(false)
  const { height, width } = useWindowDimensions()

  const handleNavClose = () => {
    if (!isSmallScreen) return
    setIsNavShown(false)
  }
  const handleNavOpen = () => {
    if (!isSmallScreen) return
    setIsNavShown(true)
  }

  useEffect(() => {
    if (width > 768) {
      setIsNavShown(true)
      setIsSmallScreen(false)
    } else {
      setIsNavShown(false)
      setIsSmallScreen(true)
    }
  }, [width])

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

          {isNavShown && <Nav handleNavClose={handleNavClose} />}

          <button type='button' onClick={handleNavOpen}>
            <FontAwesomeIcon icon={faBars} size='2xl' />
          </button>
        </StyledHeader>
      </StyledContainer>

      <main>{children}</main>

      <Footer />
    </>
  )
}
