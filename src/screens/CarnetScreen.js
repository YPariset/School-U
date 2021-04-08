import React, {Component} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialIcons, Ionicons  } from '@expo/vector-icons'; 
import Button from '../components/Button'
import { Header } from 'react-native-elements';
import { Icon } from 'native-base';

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
            mode="contained"
            labelStyle={{ 
              color: "white",
              fontWeight: 'bold',
              fontSize: 15,
              lineHeight: 26,
            }}
    onPress={() => navigation.navigate('StartScreen')}>
        <Text>Retour au menu </Text>
    </Button>

    <Button 
    style={styles.button}
    onPress={() => navigation.navigate('AjouterMotCarnetScreen')}>
        <Ionicons name="add-circle-outline" size={30} style={{color:'grey'}}></Ionicons>
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
    button: {
      backgroundColor: "transparent",
   
    }
}
  )