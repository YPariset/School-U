import React, { useState } from 'react'
import { Form, Item, Input, Container } from 'native-base'
import { Platform, Text } from 'react-native'
import Button from '../components/Button'

import { SafeAreaView, StyleSheet, View, Image } from 'react-native'

const App = ({ navigation }) => {
  const [shouldShow, setShouldShow] = useState(false)
  return (
    <Container style={styles.background}>
      <Text style={styles.titre}>Ajouter un enfant</Text>
      <SafeAreaView>
        <Form style={styles.premierForm}>
          <Item>
            <Input placeholder="Nom de l'enfant " />
          </Item>
          <Item last>
            <Input placeholder="Nom de la classe " />
          </Item>
        </Form>
        <View style={styles.container}>
          {/*Here we will return the view when state is true 
        and will return false if state is false*/}
          {shouldShow ? (
            <Form style={styles.secondForm}>
              <Text style={styles.ajoutEnfant}>Ajout d'un deuxieme enfant</Text>
              <Item>
                <Input placeholder="Nom de l'enfant " />
              </Item>
              <Item last>
                <Input placeholder="Nom de la classe " />
              </Item>
            </Form>
          ) : null}
          <View style={styles.fondBout}>
            <Button
              style={styles.buttonAddNdChild}
              labelStyle={styles.text}
              mode="outlined"
              onPress={() => setShouldShow(!shouldShow)}
            >
              Ajouter un second enfant
            </Button>

            <Button
              style={styles.buttonValider}
              labelStyle={styles.text}
              mode="outlined"
              onPress={() => navigation.navigate('AddClassCode')}
            >
              {' '}
              Valider{' '}
            </Button>
          </View>
        </View>
      </SafeAreaView>
    </Container>
  )
}

const styles = StyleSheet.create({
  ...Platform.select({
    ios: {
      background: {
        backgroundColor: '#fff9ec',
      },
      fondBout: {
        alignSelf: 'center',
        width: 400,
        height: 200,
        borderRadius: 50,
        backgroundColor: '#474749',
      },

      premierForm: {
        paddingTop: 30,
        paddingBottom: 100,
      },
      secondForm: {
        paddingBottom: 100,
      },
      ajoutEnfant: {
        marginBottom: 30,
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 26,
        textAlign: 'center',
        marginRight: 'auto',
        marginLeft: 'auto',
      },
      text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
        lineHeight: 26,
      },
      titre: {
        marginTop: 30,
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 26,
        textAlign: 'center',
        marginRight: 'auto',
        marginLeft: 'auto',
      },
      buttonAddNdChild: {
        marginTop: 45,
        backgroundColor: '#E46472',
        width: 300,
        borderRadius: 10,
        borderWidth: 0,
        marginRight: 'auto',
        marginLeft: 'auto',
      },
      buttonValider: {
        backgroundColor: '#a4c9c8',
        borderRadius: 10,

        width: 300,
        marginRight: 'auto',
        marginLeft: 'auto',
      },
    },
    web: {
      background: {
        backgroundColor: '#fff9ec',
      },
      fondBout: {
        alignSelf: 'center',
        width: 400,
        height: 220,
        borderRadius: 50,
        backgroundColor: '#474749',
      },

      premierForm: {
        paddingTop: 30,
        paddingBottom: 100,
      },
      secondForm: {
        paddingBottom: 100,
      },
      ajoutEnfant: {
        marginBottom: 30,
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 26,
        textAlign: 'center',
        marginRight: 'auto',
        marginLeft: 'auto',
      },
      text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
        lineHeight: 26,
      },
      titre: {
        marginTop: 30,
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 26,
        textAlign: 'center',
        marginRight: 'auto',
        marginLeft: 'auto',
      },
      buttonAddNdChild: {
        marginTop: 45,
        backgroundColor: '#E46472',
        width: 300,
        borderRadius: 10,
        borderWidth: 0,
        marginRight: 'auto',
        marginLeft: 'auto',
      },
      buttonValider: {
        backgroundColor: '#a4c9c8',
        borderRadius: 10,

        width: 300,
        marginRight: 'auto',
        marginLeft: 'auto',
        marginTop: 20,
      },
    },
    android: {
      background: {
        backgroundColor: '#fff9ec',
      },
      fondBout: {
        alignSelf: 'center',
        width: 350,
        height: 200,
        borderRadius: 50,
        backgroundColor: '#474749',
      },

      premierForm: {
        paddingTop: 30,
        paddingBottom: 50,
      },
      secondForm: {
        paddingBottom: 50,
      },
      ajoutEnfant: {
        marginBottom: 30,
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 26,
        textAlign: 'center',
        marginRight: 'auto',
        marginLeft: 'auto',
      },
      text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
        lineHeight: 26,
      },
      titre: {
        marginTop: 20,
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 26,
        textAlign: 'center',
        marginRight: 'auto',
        marginLeft: 'auto',
      },
      buttonAddNdChild: {
        marginTop: 35,
        backgroundColor: '#E46472',
        width: 300,
        borderRadius: 10,
        borderWidth: 0,
        marginRight: 'auto',
        marginLeft: 'auto',
      },
      buttonValider: {
        backgroundColor: '#a4c9c8',
        borderRadius: 10,

        width: 300,
        marginRight: 'auto',
        marginLeft: 'auto',
      },
    },
  }),
})

export default App
