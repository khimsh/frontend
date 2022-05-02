import Link from 'next/link';
import Footer from './Footer';
import Nav from './Nav';
import { StyledContainer } from './styled/Container.styled';
import { StyledFlex } from './styled/Flex.styled';
import { StyledHeader } from './styled/Header.styled';
import { StyledLogo } from './styled/Logo.styled';

export default function Layout({ children }) {
  return (
    <>
      <StyledHeader>
        <StyledContainer>
          <StyledFlex>
            <StyledLogo>
              <Link href='/'>
                <a>
                  <span>i</span>a kh<span>i</span>msh
                </a>
              </Link>
            </StyledLogo>

            <Nav />
          </StyledFlex>
        </StyledContainer>
      </StyledHeader>

      <main>{children}</main>

      <Footer />
    </>
  );
}
