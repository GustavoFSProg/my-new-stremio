import React from 'react'
import { FaFilm } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Header, HeaderContainer, HeaderText, Text, Content, Container } from './styles'

function Navbar() {
  return (
    <>
      <Header>
        <HeaderContainer>
          <Link to="/dois">
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '-21px',
              }}
            >
              <FaFilm size="20" style={{ marginRight: '8px', color: 'white' }} />
              <HeaderText>Painel</HeaderText>
            </div>
          </Link>
          <Link to="/">
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '-21px',
              }}
            >
              <FaFilm size="20" style={{ marginRight: '8px', color: 'white' }} />
              <HeaderText>Home</HeaderText>
            </div>
          </Link>
          <Link to="/">
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '-21px',
              }}
            >
              <FaFilm size="20" style={{ marginRight: '8px', color: 'white' }} />
              <HeaderText>Séries</HeaderText>
            </div>
          </Link>
        </HeaderContainer>
      </Header>
    </>
  )
}

export default Navbar
