import React, {Component} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { ListItem, Button } from 'react-native-elements';


export default function CarnetScreen({ navigation }){


    const list = [
        {
          name: 'Mot du prof 1',
          subtitle: 'date',
        },
        {
          name: 'Mot du prof 2',
          subtitle: 'date',
        },
      ]
      

    return (

<View style={styles.container}>


  {
    list.map((l, i) => (
      <ListItem style={styles.itemContainer} key={i} bottomDivider>
        <ListItem.Content>
          <ListItem.Title style={{fontSize:18, paddingBottom:10}}>{l.name}</ListItem.Title>
          <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    ))
  }

    <Button 
    title='Retour au menu'
    onPress={() => navigation.navigate('StartScreen')}/>

    <Button 
    title='Ajouter un mot dans le carnet'
    onPress={() => navigation.navigate('AjouterMotCarnetScreen')}/>


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

    }
}
  )