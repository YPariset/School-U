import React, { Component } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { MaterialIcons, Ionicons } from '@expo/vector-icons'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import {
  Container,
  Header,
  Content,
  Text,
  Item,
  Input,
  Form,
  Textarea,
} from 'native-base'
import Button from '../components/Button'

export default class AjouterArticle extends Component {
  render() {
    return (
      <Container style={styles.fond}>
        <Content padder>
          <Item>
            <Input placeholder="Titre" style={styles.titre} />
          </Item>
          <Form>
            <Textarea
              rowSpan={5}
              bordered
              placeholder="Votre texte"
              style={styles.texte}
            />
          </Form>
          <View style={styles.pictos}>
            <TouchableOpacity
              style={{ justifyContent: 'center', alignItems: 'center' }}
              onPress={() => this.props.navigation.navigate('AjouterArticle')}
            >
              <Ionicons
                name="images-outline"
                size={30}
                style={{ color: 'grey' }}
              ></Ionicons>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ justifyContent: 'center', alignItems: 'center' }}
              onPress={() => this.props.navigation.navigate('AjouterArticle')}
            >
              <Ionicons
                name="text-outline"
                size={30}
                style={{ color: 'grey' }}
              ></Ionicons>
            </TouchableOpacity>
          </View>
          <View>
            <Button
              mode="contained"
              style={styles.valid}
              labelStyle={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 15,
                lineHeight: 26,
              }}
              onPress={() => this.props.navigation.navigate('Blog')}
            >
              Valider
            </Button>
          </View>
        </Content>
      </Container>
    )
  }
}
const styles = StyleSheet.create({
  fond: {
    backgroundColor: '#fff9eb',
  },

  titre: {
    marginTop: 20,
    backgroundColor: 'white',
  },

  texte: {
    marginTop: 30,
    backgroundColor: 'white',
  },
  pictos: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  valid: {
    alignSelf: 'center',
    width: 200,
    marginTop: 30,
    backgroundColor: '#6986C5',
    borderRadius: 10,
    borderWidth: 0,
  },
})
