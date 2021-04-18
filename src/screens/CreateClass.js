import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  SafeAreaView,
  Platform,
  TextInput,
  Text,
} from 'react-native'
import { Input, Item, Form } from 'native-base'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Button from '../components/Button'

function CreateClass({ navigation }) {
    var arr = [];
    while(arr.length < 50){
    var random = Math.floor(Math.random() * 100) + 1;
    if(arr.indexOf(random) === -1) arr.push(random);
}
  return (
    <View style={styles.container}>
      <View style={styles.fondBloc}>
        <View>
          <Text style={styles.titre}>Ajoutez un nom à votre classe</Text>
          <SafeAreaView>
            <View style={styles.form}>
              <View>
              <TextInput style={styles.input} placeholder='Entrez un nom à votre classe' placeholderTextColor='#808080'></TextInput>
                <Text style={styles.inputTitle}> Code de la classe : {random}</Text>
              </View>
            </View>

            <Button
              style={styles.buttonValider}
              labelStyle={styles.text}
              mode="outlined"
              onPress={() => navigation.navigate('Classroom')}
            >
              {' '}
              Valider
            </Button>
          </SafeAreaView>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  ...Platform.select({
    ios: {
      container: {
        flex: 1,
        backgroundColor: '#FFF9EC',
      },
      fondBloc: {
        alignSelf: 'center',
        backgroundColor: '#474749',
        height: 600,
        width: 400,
        borderRadius: 50,
        marginTop: 100,
      },

      titre: {
        marginTop: 50,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: 26,
        textAlign: 'center',
      },

      form: {
        paddingTop: 30,
        paddingBottom: 100,
        width: 300,
        marginLeft: 50,
        marginTop: 150,
      },
      inputTitle: {
        color: 'white',
        fontSize: 15,
        textTransform: 'uppercase',
        marginTop:15
      },
      input: {
        borderBottomColor: 'white',
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: 'white',
      },

      buttonValider: {
        alignSelf: 'center',
        marginTop: 50,
        backgroundColor: '#a4c9c8',
        borderRadius: 10,
        borderWidth: 0,
        width: 200,
      },
      text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
        lineHeight: 26,
      },
    },
    android: {
      container: {
        flex: 1,
        backgroundColor: '#FFF9EC',
      },
      fondBloc: {
        alignSelf: 'center',
        backgroundColor: '#474749',
        height: 550,
        width: 350,
        borderRadius: 50,
        marginTop: 60,
      },

      titre: {
        marginTop: 50,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: 26,
        textAlign: 'center',
      },

      form: {
        paddingTop: 20,
        paddingBottom: 100,
        width: 300,
        marginLeft: 20,
        marginTop: 150,
      },
      inputTitle: {
        color: 'white',
        fontSize: 15,
        textTransform: 'uppercase',
        marginTop:15
      },
      input: {
        borderBottomColor: 'white',
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: 'white',
      },

      buttonValider: {
        alignSelf: 'center',

        backgroundColor: '#a4c9c8',
        borderRadius: 10,
        borderWidth: 0,
        width: 200,
      },
      text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
        lineHeight: 26,
      },
    },
    web: {
      container: {
        flex: 1,
        backgroundColor: '#FFF9EC',
      },
      fondBloc: {
        alignSelf: 'center',
        backgroundColor: '#474749',
        height: 600,
        width: 400,
        borderRadius: 50,
        marginTop: 100,
      },

      titre: {
        marginTop: 50,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: 26,
        textAlign: 'center',
      },

      form: {
        paddingTop: 30,
        paddingBottom: 100,
        width: 300,
        marginLeft: 50,
        marginTop: 150,
      },
      inputTitle: {
        color: 'white',
        fontSize: 15,
        textTransform: 'uppercase',
        marginTop:15
      },
      input: {
        borderBottomColor: 'white',
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: 'white',
      },

      buttonValider: {
        alignSelf: 'center',
        marginTop: 50,
        backgroundColor: '#a4c9c8',
        borderRadius: 10,
        borderWidth: 0,
        width: 200,
      },
      text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
        lineHeight: 26,
      },
    },
    android: {
      container: {
        flex: 1,
        backgroundColor: '#FFF9EC',
      },
      fondBloc: {
        alignSelf: 'center',
        backgroundColor: '#474749',
        height: 550,
        width: 350,
        borderRadius: 50,
        marginTop: 60,
      },

      titre: {
        marginTop: 50,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: 26,
        textAlign: 'center',
      },

      form: {
        paddingTop: 20,
        paddingBottom: 100,
        width: 300,
        marginLeft: 20,
        marginTop: 150,
      },
      inputTitle: {
        color: 'white',
        fontSize: 15,
        textTransform: 'uppercase',
      },
      input: {
        borderBottomColor: 'white',
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: 'white',
      },

      buttonValider: {
        alignSelf: 'center',

        backgroundColor: '#a4c9c8',
        borderRadius: 10,
        borderWidth: 0,
        width: 200,
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

export default CreateClass
