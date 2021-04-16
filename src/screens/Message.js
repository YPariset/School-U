import React, { useState, useEffect, useCallback } from 'react'
import { StyleSheet, Text, View, LogBox, TextInput, Button } from 'react-native'
import * as firebase from 'firebase'
import { Icon } from 'native-base'
import 'firebase/firestore'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { GiftedChat, Bubble, Send } from 'react-native-gifted-chat'

const db = firebase.firestore()
const chatsRef = db.collection('chats')

export default function Message() {
  const [user, setUser] = useState(null)
  const [name, setName] = useState('')
  const [messages, setMessages] = useState([])

  useEffect(() => {
    readUser()
    handlePress()
    const unsubscribe = chatsRef.onSnapshot((querySnapshot) => {
      const messagesFirestore = querySnapshot
        .docChanges()
        .filter(({ type }) => type === 'added')
        .map(({ doc }) => {
          const message = doc.data()
          return { ...message, createdAt: message.createdAt.toDate() }
        })
        .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
      appendMessages(messagesFirestore)
    })
    return () => unsubscribe()
  }, [])

  const appendMessages = useCallback(
    (messages) => {
      setMessages((prevMsgs) => GiftedChat.append(prevMsgs, messages))
    },
    [messages]
  )

  async function readUser() {
    const user = await AsyncStorage.getItem('users')
    if (user) {
      setUser(JSON.parse(user))
    }
  }
  async function handlePress() {
    const _id = firebase.auth().currentUser.uid
    const name = firebase.auth().currentUser.email
    const user = { _id, name }
    await AsyncStorage.setItem('users', JSON.stringify(user))
    setUser(user)
  }

  async function handleSend(messages) {
    const writes = messages.map((msg) => chatsRef.add(msg))
    await Promise.all(writes)
  }

  return (
    <View style={{ backgroundColor: '#fff9ec', flex: 1 }}>
      <GiftedChat
        renderSend={(props) => {
          return (
            <Send {...props} textStyle={{ color: '#E46472' }}>
              <View style={{ marginRight: 10, marginBottom: 5 }}>
                <Icon name="ios-send" style={{ color: '#E46472' }} />
              </View>
            </Send>
          )
        }}
        renderBubble={(props) => {
          return (
            <Bubble
              {...props}
              timeTextStyle={{ left: { color: 'white' } }}
              textStyle={{
                right: {
                  color: 'white',
                },
                left: {
                  color: 'white',
                },
              }}
              wrapperStyle={{
                left: {
                  backgroundColor: '#E46472',
                },
                right: {
                  backgroundColor: '#6986C5',
                },
              }}
            />
          )
        }}
        messages={messages}
        user={user}
        onSend={handleSend}
        placeholder="Tapez votre message..."
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  input: {
    height: 50,
    width: '100%',
    borderWidth: 1,
    marginBottom: 20,
    padding: 15,
    borderColor: 'gray',
  },
})
