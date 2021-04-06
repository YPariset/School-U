import React, {Component} from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';
import { ListItem, Button } from 'react-native-elements';



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
    title='Valider'
    onPress={() => navigation.navigate('StartScreen')}/>

    <Button 
    title='Back to menu'
    onPress={() => navigation.navigate('StartScreen')}/>

    <Button 
    title='Retour au carnet'
    onPress={() => navigation.navigate('CarnetScreen')}/>


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