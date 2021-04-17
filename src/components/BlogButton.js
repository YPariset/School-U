import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'
import Fire from '../core/Fire'
import { Ionicons } from '@expo/vector-icons'
import { Button } from 'native-base'

export default class BlogButton extends Component {
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
    let TheBlogButton
    let role = this.state.user.role.label

    if (isParent == this.state.user.role.label) {
      TheBlogButton = null
    } else {
      TheBlogButton = (
        <Button
          transparent
          style={styles.button}
          onPress={() => this.props.navigation.navigate('PostScreen')}
        >
          <Text style={styles.text}>Ajouter</Text>
        </Button>
      )
    }

    return <View>{TheBlogButton}</View>
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
        backgroundColor: '#6986C5',
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
        backgroundColor: '#6986C5',
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
        backgroundColor: '#6986C5',
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
