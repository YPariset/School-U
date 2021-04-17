import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'
import Fire from '../core/Fire'
import { Button } from 'native-base'

export default class CarnetButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        role: {},
      },
    }
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
    let TheCarnetButton
    let role = this.state.user.role.label

    if (isParent == this.state.user.role.label) {
      TheCarnetButton = null
    } else {
      TheCarnetButton = (
        <Button
          transparent
          style={styles.button}
          onPress={() =>
            this.props.navigation.navigate('AjouterMotCarnetScreen')
          }
        >
          <Text style={styles.text}>Ajouter</Text>
        </Button>
      )
    }

    return <View>{TheCarnetButton}</View>
  }
}
const styles = StyleSheet.create({
  ...Platform.select({
    ios: {
      button: {
        height: 30,
        width: 'auto',
        alignSelf: 'center',
        marginTop: 2,
        marginBottom: 15,
        backgroundColor: '#FABE7C',
      },
      text: {
        paddingLeft: 5,
        paddingRight: 5,
        alignSelf: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
      },
    },
    android: {
      button: {
        height: 30,
        width: 'auto',
        alignSelf: 'center',
        marginTop: 5,
        marginBottom: 5,
        backgroundColor: '#FABE7C',
      },
      text: {
        paddingLeft: 5,
        paddingRight: 5,
        alignSelf: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
      },
    },
    web: {
      button: {
        height: 30,
        width: 'auto',
        alignSelf: 'center',
        marginTop: 2,
        marginBottom: 15,
        backgroundColor: '#FABE7C',
      },
      text: {
        paddingLeft: 5,
        paddingRight: 5,
        alignSelf: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
      },
    },
  }),
})
