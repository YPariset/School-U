import React, { Component } from 'react'
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Text,
} from 'native-base'
import { Image, StyleSheet, Platform } from 'react-native'
import Button from '../components/Button'

export default class FormExample extends Component {
  render() {
    return (
      <Container style={{ backgroundColor: '#fff9ec' }}>
        <Header style={styles.header}>
          <Image
            source={require('../assets/logo.png')}
            style={{ backgroundColor: '#fff9ec' }}
          />
        </Header>
        <Content style={styles.background}>
          <Form>
            <Item>
              <Input placeholder="Nom de l'enfant " />
            </Item>
            <Item last>
              <Input placeholder="Code de la classe " />
            </Item>
            <Text style={styles.ajoutEnfant}>Ajout d'un deuxieme enfant</Text>
            <Item>
              <Input placeholder="Nom de l'enfant " />
            </Item>
            <Item last>
              <Input placeholder="Code de la classe " />
            </Item>
          </Form>
          <Button
            style={styles.valider}
            onPress={() => this.props.navigation.navigate('Dashboard')}
            labelStyle={styles.text}
            mode="outlined"
          >
            Valider
          </Button>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  ...Platform.select({
    web: {
      container: {
        backgroundColor: '#FFF9EC',
        flex: 1,
        padding: 20,
        paddingBottom: 50,
        width: '100%',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
      },
      background: {
        backgroundColor: '#fff9ec',
      },
      header: {
        backgroundColor: '#fff9ec',
      },
      ajoutEnfant: {
        marginTop: 35,
        marginBottom: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 26,
      },
      valider: {
        backgroundColor: '#6986C5',
        borderRadius: 10,
        borderWidth: 0,
        width: '30%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 55,
      },
      text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
        lineHeight: 26,
      },
    },
    ios: {
      container: {
        backgroundColor: '#FFF9EC',
        flex: 1,
        padding: 20,
        paddingBottom: 50,
        width: '100%',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
      },
      background: {
        backgroundColor: '#fff9ec',
      },
      header: {
        backgroundColor: '#fff9ec',
        marginTop: 30,
        marginBottom: 30,
      },
      ajoutEnfant: {
        marginTop: 35,
        marginBottom: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 26,
      },
      valider: {
        backgroundColor: '#6986C5',
        borderRadius: 10,
        borderWidth: 0,
        width: '70%',
        marginLeft: 60,
        marginTop: 55,
      },
      text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
        lineHeight: 26,
      },
    },
  }),
})
