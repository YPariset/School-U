import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Header } from 'react-native-elements';


export default function ProfilScreen({ navigation }){


    return (

<SafeAreaView style={styles.container}>
<View style={styles.userInfoSection}>
<View style={{flexDirection: 'row', marginTop:15}}>
<Avatar.Image 
            source={
                require('../assets/dad_avatar.jpeg')
            }
            size={80}
          />
<View style={{marginLeft:20}}>
    <Title style={styles.title, {marginBottom: 5, marginTop:15}}>
        John Doe
    </Title>
    <Caption style={styles.caption}>@j_doe</Caption>
</View>
</View>
</View>

<View style={styles.userInfoSection}>

<View style={styles.row}>
    <Icon name='map-marker-radius' size={20} color='#777777'></Icon>
    <Text style={{color:'#777777', marginLeft:20}}>Paris, France</Text>
</View>
<View style={styles.row}>
    <Icon name='phone' size={20} color='#777777'></Icon>
    <Text style={{color:'#777777', marginLeft:20}}>06 XX XX XX XX</Text>
</View>
<View style={styles.row}>
    <Icon name='email' size={20} color='#777777'></Icon>
    <Text style={{color:'#777777', marginLeft:20}}>johndoe@gmail.com</Text>
</View>
</View>

<View style={styles.infoBoxWrapper}>
    <View style={styles.infoBox}>
        <Title>Statut</Title>
        <Caption>Cool dad 😎✌🏻</Caption>
    </View>
    <View style={styles.infoBox}>
        <Title>Mes enfants</Title>
        <Caption>Papa de Louane, 10 ans</Caption>
    </View>
</View>
<View style={styles.menuWrapper}>

    <TouchableRipple onPress={()=>{}}>
        <View style={styles.menuItem}>
            <Icon name='share-outline' color='#777777' size={25}></Icon>
            <Text style={styles.menuItemText}>Contact me</Text>
        </View>
    </TouchableRipple>

    <TouchableRipple onPress={()=>{navigation.navigate('EditProfilScreen')}}>
        <View style={styles.menuItem}>
            <Icon name='account-edit-outline' color='#777777' size={25}></Icon>
            <Text style={styles.menuItemText}>Modifier le profil</Text>
        </View>
    </TouchableRipple>

    <TouchableRipple onPress={()=>{}}>
        <View style={styles.menuItem}>
            <Icon name='account-cog-outline' color='#777777' size={25}></Icon>
            <Text style={styles.menuItemText}>Paramètres</Text>
        </View>
    </TouchableRipple>
</View>

</SafeAreaView>

)

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF9EC',
    },
    userInfoSection: {
      paddingHorizontal: 30,
      marginBottom: 25,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
      fontWeight: '500',
    },
    row: {
      flexDirection: 'row',
      marginBottom: 10,
    },
    infoBoxWrapper: {
      borderBottomColor: '#dddddd',
      borderBottomWidth: 1,
      borderTopColor: '#dddddd',
      borderTopWidth: 1,
      flexDirection: 'row',
      height: 100,
    },
    infoBox: {
      width: '50%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    menuWrapper: {
      marginTop: 10,
    },
    menuItem: {
      flexDirection: 'row',
      paddingVertical: 15,
      paddingHorizontal: 30,
    },
    menuItemText: {
      color: '#777777',
      marginLeft: 20,
      fontWeight: '600',
      fontSize: 16,
      lineHeight: 26,
    },
  });