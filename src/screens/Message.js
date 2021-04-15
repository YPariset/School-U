import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View,LogBox, TextInput, Button} from 'react-native';
import * as firebase from 'firebase';
import 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GiftedChat } from 'react-native-gifted-chat';

const db = firebase.firestore();
const chatsRef = db.collection('chats');

export default function Message() {

  const [ user, setUser ] = useState(null);
  const  [name, setName ] = useState('');
  const [ messages, setMessages ] = useState([]);

  useEffect(()=>{
    readUser();
    const unsubscribe = chatsRef.onSnapshot(querySnapshot =>{
      const messagesFirestore = querySnapshot
            .docChanges()
            .filter(({type})=> type === 'added')
            .map(({doc})=>{
              const message = doc.data()
              return { ...message, createdAt: message.createdAt.toDate() }
            }).sort((a, b) => b.createdAt.getTime()- a.createdAt.getTime())
        appendMessages(messagesFirestore);
    })
    return () => unsubscribe();
  },[]);

  const appendMessages = useCallback((messages)=>{
    setMessages((prevMsgs)=>GiftedChat.append(prevMsgs,messages))
  },[messages]);

  async function readUser(){
    const user = await AsyncStorage.getItem('users')
    if(user){
      setUser(JSON.parse(user));
    }
  };
  async function handlePress(){
    //const _id = Math.random().toString(36).substring(7);
    const user = firebase.auth().currentUser.uid;
    await AsyncStorage.setItem('users',JSON.stringify(user));
    setUser(user)
  };
  
  async function handleSend (messages){
    const writes = messages.map( msg => chatsRef.add(msg))
    await Promise.all(writes)
  }

  if(!user){
    return (
      <View style={styles.container}>
        <Button onPress={handlePress} title='Enter the chat'/>
      </View>
    )
  };
  return (
     <GiftedChat 
        messages={messages} 
        user={user}
        onSend={handleSend}
      />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding:30,
  },
  input:{
    height:50,
    width:'100%',
    borderWidth:1,
    marginBottom:20,
    padding:15,
    borderColor:'gray'
  }
});
