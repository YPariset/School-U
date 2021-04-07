import React, { Component } from 'react'
import { Image, StyleSheet } from 'react-native'
import { MaterialIcons, Ionicons } from '@expo/vector-icons'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Footer,
} from 'native-base'

export default class Blog extends Component {
  render() {
    return (
      <Container style={styles.fond}>
        <Header />
        <Content>
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Body>
                <Text>Anniversaire Lucie</Text>
                <Text note>April 15, 2016</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Image
                  source={require('../assets/anniversaireenfant.jpeg')}
                  style={{ height: 200, width: 400, flex: 1 }}
                />
                <Text>C'était trop bien !!!!!!</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Body>
                <Text>Chanson</Text>
                <Text note>April 15, 2016</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  Au clair de la lune {'\n'}
                  {'\n'}Au clair de la Lune {'\n'}Mon ami Pierrot{'\n'}
                  Prêtes-moi ta plume {'\n'}Pour écrire un mot {'\n'}Ma
                  chandelle est morte
                  {'\n'}Je n'ai plus de feu {'\n'}Ouvres-moi ta porte {'\n'}Pour
                  l'amour de Dieu
                  {'\n'}Au clair de la Lune {'\n'}Pierrot répondit {'\n'}Je n'ai
                  pas de plume Je suis dans mon lit {'\n'}Vas chez la voisine{' '}
                  {'\n'}Je crois qu'elle y est
                  {'\n'}Car dans sa cuisine On bat le briquet{'\n'}
                </Text>
                <Text>J'adore ! 🥰</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>8 Likes</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
        <Footer style={styles.icon}>
          <TouchableOpacity
            style={{ justifyContent: 'center', alignItems: 'center' }}
            onPress={() => this.props.navigation.navigate('AjouterArticle')}
          >
            <Ionicons
              name="add-circle-outline"
              size={50}
              style={{ color: 'grey' }}
            ></Ionicons>
          </TouchableOpacity>
        </Footer>
      </Container>
    )
  }
}
const styles = StyleSheet.create({
  fond: {
    backgroundColor: '#fff9eb',
  },

  icon: {
    backgroundColor: '#fff9eb',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
})
