import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import { logoutUser } from '../api/auth-api'
import { DiscussionList } from './DiscussionList'

export default function Dashboard() {
  return (
    <Background>
      <Logo />
      <Header>Let’s go</Header>
      <Paragraph>
        ça c'est la page principale les gars
      </Paragraph>
      <Button mode="outlined">
        Blog
      </Button>
      <Button mode="outlined" onPress={() => navigation.navigate('DiscussionList')}>
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
