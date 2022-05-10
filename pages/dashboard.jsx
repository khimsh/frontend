import Head from 'next/head'
import { StyledContainer } from '../components/styled/Container.styled'
import { StyledPageHeading } from '../components/styled/Headings.styled'

export default function DashboardPage() {
  return (
    <div>
      <Head>
        <title>Get in touch | Ia Khimsh</title>
        <meta name='description' content='Ia Khimsh - Markup &amp; Front-End development.' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <section>
        <StyledContainer>
          <StyledPageHeading>Dashboard</StyledPageHeading>
        </StyledContainer>
      </section>
    </div>
  )
}
