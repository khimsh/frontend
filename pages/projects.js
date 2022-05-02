import Head from 'next/head'
import { StyledContainer } from '../components/styled/Container.styled'
import { StyledGrid } from '../components/styled/Grid.styled'
import Link from 'next/link'
import Projects from '../components/Projects'
import { StyledHeadingTwo } from '../components/styled/Headings.styled'

export default function ProjectsPage() {
  return (
    <div>
      <Head>
        <title>Projects | Ia Khimsh</title>
        <meta name='description' content='Ia Khimsh - Markup &amp; Front-End development.' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <section style={{ marginBottom: '5rem' }}>
        <StyledContainer>
          <StyledHeadingTwo>
            <Link href='/works'>My Works</Link>
          </StyledHeadingTwo>

          <StyledGrid>
            <Projects />
          </StyledGrid>
        </StyledContainer>
      </section>
    </div>
  )
}
