import React, { Component } from 'react'
import { View, StyleSheet, Text, Color, Platform } from 'react-native'
import { ListItem, Avatar, Header, Button } from 'react-native-elements'
import { Icon } from 'native-base'

export default function DiscussionList({ navigation }) {
  const list = [
    {
      name: 'Classe Coding Factory',
      avatar_url: 'https://pbs.twimg.com/profile_images/1336344105186680847/QPxaTQrx_400x400.jpg',
      subtitle: 'Conversation de groupe',
    },
  ]

  return (
    <View style={styles.backgroundColor}>
      <View style={styles.title}>
        <Text style={styles.titre}>Discussions</Text>
        {list.map((l, i) => (
          <ListItem style={styles.listItem} key={i} bottomDivider onPress={() => navigation.navigate('Message')}>
            <Avatar rounded source={{ uri: l.avatar_url }} />
            <ListItem.Content>
              <ListItem.Title style={styles.name}>{l.name}</ListItem.Title>
              <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron onPress={() => navigation.navigate('Message')} />
          </ListItem>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  ...Platform.select({ 
                  ios: {
                    backgroundColor: {
                      backgroundColor: '#fff9ec',
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
                    titre: {
                      marginLeft: 'auto',
                      marginRight: 'auto', 
                      marginBottom:60,
                      fontWeight: 'bold',
                      fontSize: 23,
                  },
                  title: {
                    marginTop: 30,
                    marginBottom: 500
                  },
                },
                web: {
                  backgroundColor: {
                    backgroundColor: '#fff9ec',
                  },
                  listItem: {
                    marginBottom:20,
                    marginRight:450,
                    marginLeft:450,
                    borderRadius:10
                  },
                  name: {
                    fontWeight: 'bold',
                  },
                  titre: {
                    textAlign: 'center',
                    marginBottom:60,
                    fontWeight: 'bold',
                    fontSize: 23,
                },
                title: {
                  marginTop: 60,
                  marginBottom: 500
                },
                }
              }),
            });