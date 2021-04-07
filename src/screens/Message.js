import React, {Component, useState, useCallback, useEffect} from 'react';
import { View, StyleSheet, Text, Color } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import TouchableScale from 'react-native-touchable-scale';
import { GiftedChat } from 'react-native-gifted-chat'


export default function Message({ navigation }){


   const [messages, setMessages] = useState([]);
 
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])
 
  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])
      

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  )
}



const styles = StyleSheet.create({
    photo: {

    },
    titre: {
        marginLeft: 135, 
        marginBottom:60,
        fontWeight: 'bold',
        fontSize: 23,
    },
    backgroundColor: {
        backgroundColor: '#fff9ec',
    },
    title: {
        marginTop: 60,
        marginBottom: 500
        
    },
    listItem: {
        marginBottom:20,
        marginRight:20,
        marginLeft:20,
        borderRadius:10
    },
    name: {
        fontWeight: 'bold',
    },
    container:{ 
        backgroundColor: '#FFF9EC',
        flex: 1,
        resizeMode: 'cover',
    },
    itemContainer: {
        marginTop: 50,

    }
}
  )