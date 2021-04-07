import React, { Component } from 'react';
import { Image, StyleSheet, Platform } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, View } from 'native-base';
export default class CardImageExample extends Component {
  render() {
    return (
            <Container style={styles.container}>
            <CardItem>
              <Left>
                <Body>
                  <View>
                  <Text>Anniversaire de Lucie !</Text>
                  <Text note>17:00-18:00</Text>
                  </View>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'https://www.epc.asso.fr/wp-content/uploads/2013/10/Logo-GS.png'}} style={{height: 100, width: 200}}/>
            </CardItem>
            <CardItem>
              <Left>
              </Left>
              <Body>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
            </Container>
          
    );
  }
}

const styles = StyleSheet.create({
  ...Platform.select({ 
    web: {
      container: {
        width: '80%',
        borderRadius: 10,
        
      },
    
    },
    ios: {
      container: {
        maxHeight: 200,
        borderRadius: 10,
        
        
      },
      row: {
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: 'space-around'
      },
    }
  })
})