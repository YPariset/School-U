import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import { nameValidator } from '../helpers/nameValidator'
import { signUpUser } from '../api/auth-api'
import Toast from '../components/Toast'
import RadioButtonRN from 'radio-buttons-react-native'
import { Container } from 'native-base'
import { CheckBox } from 'react-native-elements'



export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState({ value: '', error: '' })
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  const [loading, setLoading] = useState()
  const [error, setError] = useState()
  const data = [
    {
      label: 'Parent'
     },
     {
      label: 'Professeur'
     }
    ];

  const onSignUpPressed = async () => {
    const nameError = nameValidator(name.value)
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)


    if (emailError || passwordError || nameError) {
      setName({ ...name, error: nameError })
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }
    setLoading(true)
    const response = await signUpUser({
      name: name.value,
      email: email.value,
      password: password.value,
    })
    if (response.error) {
      setError(response.error)
    }
    setLoading(false)
  }

 

  return (
    <Container>
      <BackButton goBack={navigation.goBack} />
      <Logo/>
  
      <Header>Créer un compte</Header>
      
  <RadioButtonRN
  data={data}
  style={{ resizeMode: 'cover',}}
  />

<CheckBox
  center
  title='M.'/>

<CheckBox
  center
  title='Mme'/>

      <TextInput
        label="Username"
        returnKeyType="next"
        value={name.value}
        onChangeText={(text) => setName({ value: text, error: '' })}
        error={!!name.error}
        errorText={name.error}
      />
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Mot de passe"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />

      <TextInput
        label="Vérifiez votre mot de passe"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />

      <Button
        loading={loading}
        mode="contained"
        labelStyle={{ 
          color: "white",
          fontWeight: 'bold',
          fontSize: 15,
          lineHeight: 26,
        }}
        onPress={onSignUpPressed}
        style={{ marginTop: 24 }}
      >
        Créer un compte
      </Button>
      <View style={styles.row}>
        <Text>Vous avez déja un compte ? </Text>
        <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
          <Text style={styles.link}>Se connecter</Text>
        </TouchableOpacity>
      </View>
      <Toast message={error} onDismiss={() => setError('')} />

    </Container>
  )
}

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    alignItems: 'center', justifyContent: 'center',
    },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  }
})
