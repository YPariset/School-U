import { Icon } from 'native-base'
import React, { Component, useState, useCallback, useEffect } from 'react'
import { View, StyleSheet, Text, Color } from 'react-native'
import { GiftedChat, Bubble, Send } from 'react-native-gifted-chat'

export default function Message({ navigation }) {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Bonjour, comment allez vous?',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Raymonde',
          avatar:
            'https://storage-dating.euranka.com/uploads/sites/5/2018/12/photo-profil-rencontre-2019.jpg',
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    )
  }, [])

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
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  photo: {},
  titre: {
    marginLeft: 135,
    marginBottom: 60,
    fontWeight: 'bold',
    fontSize: 23,
  },
  backgroundColor: {
    backgroundColor: '#fff9ec',
  },
  title: {
    marginTop: 60,
    marginBottom: 500,
  },
  listItem: {
    marginBottom: 20,
    marginRight: 20,
    marginLeft: 20,
    borderRadius: 10,
  },
  name: {
    fontWeight: 'bold',
  },
  container: {
    backgroundColor: '#FFF9EC',
    flex: 1,
    resizeMode: 'cover',
  },
  itemContainer: {
    marginTop: 50,
  },
})
