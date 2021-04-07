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
import { Checkbox } from 'react-native-paper';
import { MaterialIcons } from "@expo/vector-icons";


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
  
const [genderIndex, setGenderIndex] = useState(0);   
const genderList = ["M.", "Mme"];
const genderChangeHandler = 
(index) => {
  setGenderIndex((preIndex) => index);
}

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
    <Container style={styles.container}>
      <BackButton goBack={navigation.goBack} />

  
      <Header>Créer un compte</Header>
  
  <View> 
  <Text>Vous êtes ?</Text>   
  <RadioButtonRN
  data={data}
  style={{ resizeMode: 'cover',}}
  />
  </View>


  <View style={{ flexDirection: "row", paddingTop:10 }}>
                    {genderList.map((data, index) => (
                      <TouchableOpacity
                        key={data}
                        style={{
                          flexDirection: "row",
                          margin: 10,
                          flex: 3,
                          justifyContent: "space-evenly",
                        }}
                        onPress={genderChangeHandler.bind(this, index)}
                      >
                        <MaterialIcons
                          name={
                            index === genderIndex
                              ? "radio-button-checked"
                              : "radio-button-unchecked"
                          }
                          size={18}
                          color='#ccc'
                        />
                        <Text style={styles.termsText}>{data}</Text>
                      </TouchableOpacity>
                    ))}
</View> 



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
          lineHeight: 20,
        }}
        onPress={onSignUpPressed}
        style={{ marginTop: 20 }}
      >
        Créer un compte
      </Button>
      <View style={styles.row}>
      <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
        <Text>Vous avez déja un compte ? </Text></TouchableOpacity>
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
      backgroundColor: '#FFF9EC',
      flex: 1,
      resizeMode: 'cover',
      padding: 75,
  },

})
