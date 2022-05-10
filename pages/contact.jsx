import Head from 'next/head'
import { StyledContainer } from '../components/styled/Container.styled'
import { StyledPageHeading } from '../components/styled/Headings.styled'
import { StyledContactLinks } from '../components/styled/ContactLinks.styled'

export default function ContactPage() {
  return (
    <div>
      <Head>
        <title>Get in touch | Ia Khimsh</title>
        <meta name='description' content='Ia Khimsh - Markup &amp; Front-End development.' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <section>
        <StyledContainer>
          <StyledPageHeading>Get in touch</StyledPageHeading>

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
