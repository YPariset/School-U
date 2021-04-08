import React, {Component, useState, useCallback, useEffect} from 'react';
import { View, StyleSheet, Text, Color } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat'


export default function Message({ navigation }){


   const [messages, setMessages] = useState([]);
 
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Bonjour, comment allez vous?',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Raymonde',
          avatar: 'https://storage-dating.euranka.com/uploads/sites/5/2018/12/photo-profil-rencontre-2019.jpg',
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