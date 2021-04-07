import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>School & U</Header>
      <Paragraph>
          La vie de classe en 3 clics
      </Paragraph>
      <Button
        mode="contained"
        labelStyle={{ 
          color: "white",
          fontWeight: 'bold',
          fontSize: 15,
          lineHeight: 26,
        }}
        onPress={() => navigation.navigate('Classroom')}
      >
        Se connecter
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Créer un compte
      </Button>
    </Background>
  )
}
