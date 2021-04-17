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
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  Platform,
} from 'react-native'

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
    <View style={styles.container}>
      <BackButton goBack={navigation.goBack} />
      <View style={{ marginTop: 80 }}>
        <Image
          source={require('../assets/logo_small.png')}
          style={styles.Logo}
        ></Image>
      </View>
      <View style={styles.formBack}>
        <Text style={styles.text}>Réinitialiser le mot de passe</Text>

        <TextInput
          style={styles.form}
          theme={{ colors: { primary: '#a4c9c8' } }}
          label="Adresse mail"
          returnKeyType="done"
          value={email.value}
          onChangeText={(text) => setEmail({ value: text, error: '' })}
          error={!!email.error}
          errorText={email.error}
          autoCapitalize="none"
          autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"
          description="Vous allez recevoir un lien pour réinitialiser votre mot de passe."
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
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  ...Platform.select({
    ios: {
      container: {
        backgroundColor: '#FFF9EC',
        flex: 1,
      },
      Logo: {
        marginTop: 100,
        width: 110,
        height: 125,
        alignSelf: 'center',
      },
      formBack: {
        backgroundColor: '#474749',
        marginHorizontal: 10,
        marginTop: 60,
        paddingBottom: 20,
        borderRadius: 50,
      },
      text: {
        alignSelf: 'center',
        marginTop: 30,
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
      },
      form: {
        marginTop: 30,
        alignSelf: 'center',
        width: 380,
      },
      bouton: {
        alignSelf: 'center',
        width: 200,
        marginTop: 30,
        backgroundColor: '#a4c9c8',
        borderRadius: 10,
      },
    },
    android: {
      container: {
        backgroundColor: '#FFF9EC',
        flex: 1,
      },
      Logo: {
        marginTop: 30,
        width: 110,
        height: 127,
        alignSelf: 'center',
      },
      formBack: {
        backgroundColor: '#474749',
        marginHorizontal: 10,
        marginTop: 60,
        paddingBottom: 20,
        borderRadius: 50,
      },
      text: {
        alignSelf: 'center',
        marginTop: 30,
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
      },
      form: {
        marginTop: 30,
        alignSelf: 'center',
        width: 320,
      },
      bouton: {
        alignSelf: 'center',
        width: 200,
        marginTop: 30,
        backgroundColor: '#a4c9c8',
        borderRadius: 10,
      },
    },
    web: {
      container: {
        backgroundColor: '#FFF9EC',
        flex: 1,
      },
      Logo: {
        marginTop: 60,
        marginBottom: 20,

        paddingVertical: 110,
        paddingHorizontal: 95,

        alignSelf: 'center',
      },
      formBack: {
        alignSelf: 'center',
        backgroundColor: '#474749',
        marginHorizontal: 10,
        width: 600,
        height: 500,

        paddingBottom: 20,
        borderRadius: 50,
      },
      text: {
        alignSelf: 'center',
        marginTop: 60,
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
      },
      form: {
        marginTop: 50,
        alignSelf: 'center',
        width: 400,
      },
      bouton: {
        alignSelf: 'center',
        width: 200,
        marginTop: 80,
        backgroundColor: '#a4c9c8',
        borderRadius: 10,
      },
    },
  }),
})
