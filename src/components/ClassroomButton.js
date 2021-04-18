import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'
import Fire from '../core/Fire'
import { Button } from 'native-base'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default class ClassroomButton extends Component {
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
    let TheClassroomButton
    let role = this.state.user.role.label

    if (isParent != this.state.user.role.label) {
      TheClassroomButton = null
    } else {
      TheClassroomButton = (
        <TouchableOpacity
          transparent
          onPress={() =>
            this.props.navigation.navigate('HomeScreen')
          }>
            <Text style={styles.text}>
            CLASSROOM N°2</Text></TouchableOpacity>
      )
    }

    return <View>{TheClassroomButton}</View>
  }
}

const styles = StyleSheet.create({
  ...Platform.select({
    web: {
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
        alignSelf:'center'
      },
    },
    ios: {
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
        alignSelf:'center'
      },
    },
    android: {
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
        alignSelf:'center'
      },

    },
  }),
})