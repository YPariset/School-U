import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'

export default function Blog() {
  return (
    <Background>
      <Logo />
      <Header>Blog</Header>
      <Paragraph>ça c'est le Blog</Paragraph>
      <Button mode="outlined">Blog</Button>
      <Button mode="outlined">Messagerie</Button>
      <Button mode="outlined">Carnet de liaison</Button>
    </Background>
  )
}
