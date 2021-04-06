import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import { logoutUser } from '../api/auth-api'

export default function CarnetScreen() {
  return (
    <Background>
      <Logo />
      <Header>Carnet Screen</Header>
      <Paragraph>
        ça c'est la page Carnet Screen
      </Paragraph>
      <Button mode="outlined">
        Blog
      </Button>
      <Button mode="outlined">
        Messagerie
      </Button>
      <Button mode="outlined">
        Carnet de liaison
      </Button>
      <Button mode="outlined" onPress={logoutUser}>
        Logout
      </Button>
    </Background>
  )
}
