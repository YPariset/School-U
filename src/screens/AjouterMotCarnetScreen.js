import React, {Component} from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import Button from '../components/Button'


export default function AjouterMotCarnetScreen({ navigation }){



    return (

<View style={styles.container}>


<View style={styles.textAreaContainer} >
    <TextInput
      style={styles.textArea}
      underlineColorAndroid="transparent"
      placeholder="Écrivez votre mot dans le carnet de correspondance"
      placeholderTextColor="grey"
      numberOfLines={10}
      multiline={true}
    />
  </View>

  <Button
        mode="contained"
        labelStyle={{ 
          color: "white",
          fontWeight: 'bold',
          fontSize: 15,
          lineHeight: 26,
        }}
        onPress={() => navigation.navigate('CarnetScreen')}
      >
        <Text>Valider</Text>
      </Button>

    <Button 
    mode="outlined"
    onPress={() => navigation.navigate('StartScreen')}>
      <Text>Retour au menu</Text>
    </Button>

    <Button 
    mode='contained'
    labelStyle={{ 
      color: "white",
      fontWeight: 'bold',
      fontSize: 15,
      lineHeight: 26,
    }}
    onPress={() => navigation.navigate('CarnetScreen')}>
      <Text>Retour au carnet</Text>
    </Button>


</View>

)

}

const styles = StyleSheet.create({
    container:{ 
        backgroundColor: '#FFF9EC',
        flex: 1,
        resizeMode: 'cover',
    },
    itemContainer: {
        marginTop: 50,

    },
    textAreaContainer: {
      padding: 5,
      marginTop: 80
    },
    textArea: {
      height: 150,
      justifyContent: "flex-start"
    }
}
  )