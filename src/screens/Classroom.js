import React, { Component } from 'react'
import { View, StyleSheet, Platform, Text, Image } from 'react-native'
import Button from '../components/Button'
import { logoutUser } from '../api/auth-api'
import { theme } from '../core/theme'
import CardImageExample from '../components/Card'
import { Icon } from 'native-base'
import { Header } from 'react-native-elements'
import Fire from '../core/Fire'

export default class Classroom extends Component {
  state = {
    user: {},
  }
  unsubscribe = null

  componentDidMount() {
    const user = this.props.uid || Fire.shared.uid
    this.unsubscribe = Fire.shared.firestore
      .collection('users')
      .doc(user)
      .onSnapshot((doc) => {
        this.setState({ user: doc.data() })
      })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../assets/logo_small.png')}
          style={styles.loginLogo}
        ></Image>
        <View style={styles.fondBloc}>
          <View style={styles.blocBout}>
            <View>
              <Text style={styles.bienvenue}>
                Bienvenue, {this.state.user.name} !
              </Text>
            </View>

            <Button
              style={styles.classe1}
              labelStyle={styles.text}
              mode="outlined"
              onPress={() => this.props.navigation.navigate('Dashboard')}
            >
              Coding Factory
            </Button>
            <Button
              style={styles.classe2}
              onPress={() => navigation.navigate('Dashboard')}
              labelStyle={styles.text}
              mode="outlined"
            >
              Classe 2
            </Button>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  ...Platform.select({
    web: {
      loginLogo: {
        marginTop: 140,
        marginBottom: 20,

        paddingVertical: 110,
        paddingHorizontal: 95,

        alignSelf: 'center',
      },
      bienvenue: {
        color: 'white',
        marginTop: 30,
        marginBottom: 40,
        fontSize: 20,
        fontWeight: 'bold',
      },

      fondBloc: {
        backgroundColor: '#474749',
        height: 300,
        width: 500,
        borderRadius: 50,
        marginTop: 60,
      },
      blocBout: {
        flexDirection: 'column',

        alignItems: 'center',
      },
      classe1: {
        backgroundColor: '#6986C5',
        width: 300,
        borderRadius: 10,
        borderWidth: 0,
      },
      classe2: {
        backgroundColor: '#E46472',
        width: 300,
        borderRadius: 10,
        borderWidth: 0,
        marginTop: 30,
      },
      text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
        lineHeight: 26,
      },
      container: {
        backgroundColor: '#FFF9EC',
        flex: 1,

        width: '100%',

        alignSelf: 'center',
        alignItems: 'center',
      },
    },
    ios: {
      loginLogo: {
        marginTop: 200,
        width: 110,
        height: 125,
        alignSelf: 'center',
      },
      bienvenue: {
        color: 'white',
        marginTop: 30,
        marginBottom: 40,
        fontSize: 20,
        fontWeight: 'bold',
      },

      fondBloc: {
        backgroundColor: '#474749',
        height: 300,
        width: 400,
        borderRadius: 50,
        marginTop: 60,
      },
      blocBout: {
        flexDirection: 'column',

        alignItems: 'center',
      },
      classe1: {
        backgroundColor: '#6986C5',
        width: 300,
        borderRadius: 10,
        borderWidth: 0,
      },
      classe2: {
        backgroundColor: '#E46472',
        width: 300,
        borderRadius: 10,
        borderWidth: 0,
        marginTop: 30,
      },
      text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
        lineHeight: 26,
      },
      container: {
        backgroundColor: '#FFF9EC',
        flex: 1,

        width: '100%',

        alignSelf: 'center',
        alignItems: 'center',
      },
    },
    android: {
      loginLogo: {
        marginTop: 100,
        width: 110,
        height: 125,
        alignSelf: 'center',
      },
      bienvenue: {
        color: 'white',
        marginTop: 30,
        marginBottom: 40,
        fontSize: 20,
        fontWeight: 'bold',
      },

      fondBloc: {
        backgroundColor: '#474749',
        height: 350,
        width: 350,
        borderRadius: 50,
        marginTop: 60,
      },
      blocBout: {
        flexDirection: 'column',

        alignItems: 'center',
      },
      classe1: {
        backgroundColor: '#6986C5',
        width: 300,
        borderRadius: 10,
        borderWidth: 0,
      },
      classe2: {
        backgroundColor: '#E46472',
        width: 300,
        borderRadius: 10,
        borderWidth: 0,
        marginTop: 30,
      },
      text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
        lineHeight: 26,
      },
      container: {
        backgroundColor: '#FFF9EC',
        flex: 1,

        width: '100%',

        alignSelf: 'center',
        alignItems: 'center',
      },
    },
  }),
})
