import { useState } from 'react'
import Router from 'next/router'
import Head from 'next/head'
import { StyledContainer } from '../components/styled/Container.styled'
import { StyledPageHeading } from '../components/styled/Headings.styled'
import { StyledLoginForm } from '../components/styled/Forms.styled'

function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const user = {
      email,
      password,
    }

    const options = { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(user) }

    fetch('https://khimshportfolio.herokuapp.com/api/users/login', options)
      .then((resp) => {
        console.log(resp.data)
        if (resp.ok) {
          Router.push('/dashboard')
        }
      })
      .catch((err) => console.log(err))
  }

  return (
    <div>
      <Head>
        <title>Login | Ia Khimsh</title>
        <meta name='description' content='Ia Khimsh - Markup &amp; Front-End development.' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <section style={{ marginBottom: '5rem' }}>
        <StyledContainer>
          <StyledPageHeading>Login</StyledPageHeading>

          <StyledLoginForm>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor='email'>email</label>
                <input type='email' name='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div>
                <label htmlFor='password'>password</label>
                <input type='password' name='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>

              <button type='submit'>login</button>
            </form>
          </StyledLoginForm>
        </StyledContainer>
      </section>
    </div>
  )
}

export default LoginPage
