import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
  LayoutAnimation,
  Platform,
  ScrollView,
} from 'react-native'
import * as firebase from 'firebase'

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null,
  }

  state = {
    email: '',
    password: '',
    errorMessage: null,
  }

  handleLogin = () => {
    const { email, password } = this.state

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => this.setState({ errorMessage: error.message }))
  }

  render() {
    LayoutAnimation.easeInEaseOut()

    return (
      <View style={styles.container}>
        <ScrollView>
          <StatusBar barStyle="dark-content"></StatusBar>
          <View style={{ marginTop: 80 }}>
            <Image
              source={require('../assets/logo_small.png')}
              style={styles.loginLogo}
            ></Image>
            <View style={styles.formBack}>
              <View style={styles.errorMessage}>
                {this.state.errorMessage && (
                  <Text style={styles.error}>{this.state.errorMessage}</Text>
                )}
              </View>

              <View style={styles.form}>
                <View>
                  <Text style={styles.inputTitle}>Email </Text>
                  <TextInput
                    style={styles.input}
                    autoCapitalize="none"
                    onChangeText={(email) => this.setState({ email })}
                    value={this.state.email}
                  ></TextInput>
                </View>

                <View style={{ marginTop: 32 }}>
                  <Text style={styles.inputTitle}>Mot de passe</Text>
                  <TextInput
                    style={styles.input}
                    secureTextEntry
                    autoCapitalize="none"
                    onChangeText={(password) => this.setState({ password })}
                    value={this.state.password}
                  ></TextInput>
                </View>
              </View>

              <TouchableOpacity
                style={styles.button}
                onPress={this.handleLogin}
              >
                <Text style={{ color: '#FFF', fontWeight: '500' }}>
                  S'identifier
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{ alignSelf: 'center', marginTop: 32 }}
                onPress={() => this.props.navigation.navigate('RegisterScreen')}
              >
                <Text style={{ color: 'white', fontSize: 13 }}>
                  Pas encore de compte ?{' '}
                  <Text style={{ fontWeight: '500', color: '#E46472' }}>
                    Créez-en un
                  </Text>
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ alignSelf: 'center', marginTop: 32 }}
                onPress={() =>
                  this.props.navigation.navigate('ResetPasswordScreen')
                }
              >
                <Text style={{ color: 'white', fontSize: 13 }}>
                  Mot de passe oublié ?{' '}
                  <Text style={{ fontWeight: '500', color: '#E46472' }}>
                    Cliquez ici
                  </Text>
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  ...Platform.select({
    web: {
      container: {
        flex: 1,
        backgroundColor: '#FFF9EC',
      },

      loginLogo: {
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
      form: {
        marginVertical: 60,
        marginHorizontal: 30,
      },
      inputTitle: {
        color: 'white',
        fontSize: 10,
        textTransform: 'uppercase',
      },
      input: {
        borderBottomColor: 'white',
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: 'white',
      },
      button: {
        marginHorizontal: 30,
        backgroundColor: '#a4c9c8',
        borderRadius: 10,
        height: 52,
        alignItems: 'center',
        justifyContent: 'center',
      },
      errorMessage: {
        height: 72,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 30,
      },
      error: {
        color: '#E9446A',
        fontSize: 13,
        fontWeight: '600',
        textAlign: 'center',
      },
    },
    ios: {
      container: {
        backgroundColor: '#FFF9EC',
        flex: 1,
      },

      loginLogo: {
        marginTop: 100,
        width: 110,
        height: 125,
        alignSelf: 'center',
      },

      formBack: {
        backgroundColor: '#474749',
        marginHorizontal: 10,
        marginTop: 30,
        paddingBottom: 20,
        borderRadius: 50,
      },
      form: {
        marginBottom: 48,
        marginHorizontal: 30,
      },
      inputTitle: {
        color: 'white',
        fontSize: 10,
        textTransform: 'uppercase',
      },
      input: {
        borderBottomColor: 'white',
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: 'white',
      },
      button: {
        marginHorizontal: 30,
        backgroundColor: '#a4c9c8',
        borderRadius: 10,
        height: 52,
        alignItems: 'center',
        justifyContent: 'center',
      },
      errorMessage: {
        height: 72,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 30,
      },
      error: {
        color: '#E9446A',
        fontSize: 13,
        fontWeight: '600',
        textAlign: 'center',
      },
    },
    android: {
      container: {
        backgroundColor: '#FFF9EC',
        flex: 1,
      },

      loginLogo: {
        marginTop: 5,
        width: 110,
        height: 127,
        alignSelf: 'center',
      },

      formBack: {
        backgroundColor: '#474749',
        marginHorizontal: 10,
        marginTop: 30,
        paddingBottom: 20,
        borderRadius: 50,
      },
      form: {
        marginBottom: 48,
        marginHorizontal: 30,
      },
      inputTitle: {
        color: 'white',
        fontSize: 10,
        textTransform: 'uppercase',
      },
      input: {
        borderBottomColor: 'white',
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: 'white',
      },
      button: {
        marginHorizontal: 30,
        backgroundColor: '#a4c9c8',
        borderRadius: 10,
        height: 52,
        alignItems: 'center',
        justifyContent: 'center',
      },
      errorMessage: {
        height: 72,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 30,
      },
      error: {
        color: '#E9446A',
        fontSize: 13,
        fontWeight: '600',
        textAlign: 'center',
      },
    },
  }),
})
