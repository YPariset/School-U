import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'
import { View, StyleSheet, TextInput, Text, Image } from 'react-native'

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Image source={require('../assets/logo.png')} style={styles.logo} />

      <Paragraph style={styles.para}>"La vie de classe en 3 clics"</Paragraph>
      <Button
        mode="contained"
        style={styles.bouton}
        labelStyle={{
          color: 'white',
          fontWeight: 'bold',
          fontSize: 15,
          lineHeight: 26,
        }}
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Se connecter
      </Button>
      <Button
        mode="outlined"
        style={styles.bouton_creer}
        labelStyle={{
          color: '#E46472',
          fontWeight: 'bold',
          fontSize: 15,
          lineHeight: 26,
        }}
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Créer un compte
      </Button>
    </Background>
  )
}

const styles = StyleSheet.create({
  bouton: {
    alignSelf: 'center',
    width: 200,
    marginTop: 30,
    backgroundColor: '#6986C5',
    borderRadius: 10,
  },
  bouton_creer: {
    alignSelf: 'center',
    width: 200,
    marginTop: 30,
    borderRadius: 10,
  },
  logo: {
    width: 300,
    height: 50,
    marginBottom: 100,
  },
  para: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 50,
    color: '#6986C5',
  },
})
