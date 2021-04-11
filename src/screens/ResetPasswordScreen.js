import React, { useState } from 'react'
import Background from '../components/Background'
import BackButton from '../components/BackButton'
import Logo from '../components/Logo'
import Header from '../components/Header'
import TextInput from '../components/TextInput'
import Button from '../components/Button'
import { emailValidator } from '../helpers/emailValidator'
import { sendEmailWithPassword } from '../api/auth-api'
import Toast from '../components/Toast'
import { View, StyleSheet, TouchableOpacity } from 'react-native'

export default function ResetPasswordScreen({ navigation }) {
  const [email, setEmail] = useState({ value: '', error: '' })
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState({ value: '', type: '' })

  const sendResetPasswordEmail = async () => {
    const emailError = emailValidator(email.value)
    if (emailError) {
      setEmail({ ...email, error: emailError })
      return
    }
    setLoading(true)
    const response = await sendEmailWithPassword(email.value)
    if (response.error) {
      setToast({ type: 'error', message: response.error })
    } else {
      setToast({
        type: 'success',
        message: 'Email with password has been sent.',
      })
    }
    setLoading(false)
  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Reinitialiser le mot de passe</Header>
      <TextInput
        theme={{ colors: { primary: '#a4c9c8' } }}
        label="E-mail address"
        returnKeyType="done"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        description="You will receive email with password reset link."
      />
      <Button
        loading={loading}
        mode="contained"
        style={styles.bouton}
        labelStyle={{
          color: 'white',
          fontWeight: 'bold',
          fontSize: 15,
          lineHeight: 26,
        }}
        onPress={sendResetPasswordEmail}
      >
        Envoyer
      </Button>
      <Toast {...toast} onDismiss={() => setToast({ value: '', type: '' })} />
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
})
