import Head from 'next/head'
import Image from 'next/image'
import { StyledHero } from '../components/styled/Hero.styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { StyledContainer } from '../components/styled/Container.styled'
import { StyledFlex } from '../components/styled/Flex.styled'
import { StyledGrid } from '../components/styled/Grid.styled'
import Link from 'next/link'
import Projects from '../components/Projects'
import { StyledHeadingTwo } from '../components/styled/Headings.styled'
import { StyledContactLinks } from '../components/styled/ContactLinks.styled'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Front End Web Developer | Ia Khimsh</title>
        <meta name='description' content='Ia Khimsh - Markup &amp; Front-End development.' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <StyledHero>
        <StyledContainer>
          <StyledFlex>
            <div>
              <h1>Front-End development</h1>

              <ul>
                <li>
                  <a href='mailto:mailto:i.khimsh@gmail.com' aria-label='email'>
                    <FontAwesomeIcon icon={faEnvelope} size='xl' />
                  </a>
                </li>
                <li>
                  <a href='https://github.com/khimsh' target='_blank' rel='noopener noreferrer' aria-label='github'>
                    <FontAwesomeIcon icon={faGithub} size='xl' />
                  </a>
                </li>
                <li>
                  <a href='https://www.linkedin.com/in/ia-khimsh/' target='_blank' rel='noopener noreferrer' aria-label='linkedin'>
                    <FontAwesomeIcon icon={faLinkedin} size='xl' />
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <Image src='/decoration.png' width={586} height={542} alt='Ia Khimsh - Front-End Developer.' />
            </div>
          </StyledFlex>
        </StyledContainer>
      </StyledHero>

      <section style={{ marginBottom: '5rem' }}>
        <StyledContainer>
          <StyledHeadingTwo>
            <Link href='/projects'>My Works</Link>
          </StyledHeadingTwo>

          <StyledGrid>
            <Projects />
          </StyledGrid>
        </StyledContainer>
      </section>

      <section>
        <StyledContainer>
          <StyledHeadingTwo>
            <Link href='/contact'>Get in touch</Link>
          </StyledHeadingTwo>

          <StyledContactLinks>
            <li>
              <a href='mailto:i.khimsh@gmail.com'>i.khimsh@gmail.com</a>
            </li>
            <li>
              <a href='https://github.com/khimsh' target='_blank' rel='noopener noreferrer'>
                github.com/khimsh
              </a>
            </li>
            <li>
              <a href='https://www.linkedin.com/in/ia-khimsh/' target='_blank' rel='noopener noreferrer'>
                linkedin.com/in/ia-khimsh/
              </a>
            </li>
            <li>
              <a href='https://khimsh.github.io/resume/' target='_blank' rel='noopener noreferrer'>
                resume
              </a>
            </li>
          </StyledContactLinks>
        </StyledContainer>
      </section>
    </div>
  )
}
