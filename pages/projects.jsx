import Head from 'next/head'
import { StyledContainer } from '../components/styled/Container.styled'
import { StyledGrid } from '../components/styled/Grid.styled'
import Projects from '../components/Projects'
import { StyledPageHeading } from '../components/styled/Headings.styled'

export default function ProjectsPage({ projects }) {
  return (
    <div>
      <Head>
        <title>Projects | Ia Khimsh</title>
        <meta name='description' content='Ia Khimsh - Markup &amp; Front-End development.' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <section style={{ marginBottom: '5rem' }}>
        <StyledContainer>
          <StyledPageHeading>My Works</StyledPageHeading>

          <StyledGrid>
            <Projects projects={projects} />
          </StyledGrid>
        </StyledContainer>
      </section>
    </div>
  )
}

export async function getStaticProps(context) {
  const data = await fetch('https://khimshportfolio.herokuapp.com/api/projects')
  const projects = await data.json()
  return { props: { projects } }
}
