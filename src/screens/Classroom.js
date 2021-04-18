import React, { Component } from 'react'
import { View, StyleSheet, Platform, Text, Image } from 'react-native'
import Button from '../components/Button'
import { logoutUser } from '../api/auth-api'
import { theme } from '../core/theme'
import CardImageExample from '../components/Card'
import { Icon } from 'native-base'
import { Header } from 'react-native-elements'
import Fire from '../core/Fire'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default class Classroom extends Component {
  state = {
    user: {
      role:{}
    },
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
    let isParent = 'Parent'
    let TheClassroomButton
    let AddChild
    let AddClass
    let role = this.state.user.role.label

    if (isParent != this.state.user.role.label) {
      AddClass = (
        <TouchableOpacity
        onPress={() => this.props.navigation.navigate('CreateClass')}
        mode="outlined"
        >
      <Text style={{ fontWeight: '500', color: '#FFF', marginTop:10 }}> Ajouter une classe</Text>
      </TouchableOpacity>
          )
    } else {
      TheClassroomButton = (
        <Button
        labelStyle={styles.text}
        style={styles.classe2}
        onPress={() => this.props.navigation.navigate('HomeScreen')}
        mode="outlined"
      >
        <Text>CLASSROOM N°2</Text>
      </Button>
      )
        AddChild = (
      <TouchableOpacity
      onPress={() => this.props.navigation.navigate('addChild')}
      mode="outlined"
      >
    <Text style={{ fontWeight: '500', color: '#FFF', marginTop:10 }}> Ajouter un enfant</Text>
    </TouchableOpacity>
        )
    }
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
              onPress={() => this.props.navigation.navigate('HomeScreen')}
            >
              Coding Factory
            </Button>
            <View>{TheClassroomButton}</View>
            <View>{AddChild}</View>
            <View>{AddClass}</View>
            
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
        height: 350,
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
        marginTop: 40,
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
