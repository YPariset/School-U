import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import {View, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, ImageBackground} from 'react-native';
import {
  Text,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { colors } from 'react-native-elements';



export default function EditProfilScreen({ navigation }){


    return (

<View style={styles.container}>

<View style={{margin:20}}>
<View style={{alignItems:'center'}}>
<TouchableOpacity onPress={()=> {} }>
<View style={{
    height:100,
    width:100,
    borderRadius:15,
    justifyContent:'center',
    alignItems:'center'
}}>
    <ImageBackground             
        source={require('../assets/dad_avatar.jpeg')}
        style={{height:100, width:100}}
        imageStyle={{borderRadius:15}}
    >
        <View style={{
            flex:1,
            justifyContent:'center',
            alignItems:'center'
        }}>
            <Icon name='camera' size={35} color='#fff'
                style={{
                    opacity:0.7,
                    alignItems:'center',
                    justifyContent:'center',
                    borderWidth:1,
                    borderColor:'#fff',
                    borderRadius:10
                }}
            >
                </Icon></View>
    </ImageBackground>

</View>
</TouchableOpacity>

<Text style={{marginTop:10, fontSize:18, fontWeight:'bold'}}>
    John Doe</Text>

</View>

<View style={styles.action}>
    <FontAwesome name='user-o' size={20} color={colors.text}/>
<TextInput
    placeholder='Votre nom'
    placeholderTextColor='#666666'
    style={styles.textInput}
    autoCorrect={false}
/>
</View>

<View style={styles.action}>
    <Feather name='phone' size={20} color={colors.text}/>
<TextInput
    placeholder='Votre numéro de téléphone (pas obligatoire)'
    placeholderTextColor='#666666'
    keyboardType='number-pad'
    style={styles.textInput}
    autoCorrect={false}
/>
</View>

<View style={styles.action}>
    <FontAwesome name='envelope-o' size={20} color={colors.text}/>
<TextInput
    placeholder='Votre adresse mail'
    keyboardType='email-address'
    placeholderTextColor='#666666'
    style={styles.textInput}
    autoCorrect={false}
/>
</View>

<View style={styles.action}>
    <Icon name='map-marker-outline' size={20} color={colors.text}/>
<TextInput
    placeholder='Ville'
    placeholderTextColor='#666666'
    style={styles.textInput}
    autoCorrect={false}
/>
</View>

<View style={styles.action}>
    <FontAwesome name='globe' size={20} color={colors.text} />
<TextInput
    placeholder='Pays'
    placeholderTextColor='#666666'
    style={styles.textInput}
    autoCorrect={false}
/>
</View>

<TouchableOpacity style={styles.commandButton} onPress={()=>{}}>
                <Text style={styles.panelButton, {color:'#fff'}}>Valider les modifications</Text>
</TouchableOpacity>

</View>

</View>

)

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF9EC',
    },
    commandButton: {
      padding: 15,
      borderRadius: 10,
      backgroundColor: '#6986C5',
      alignItems: 'center',
      marginTop: 10,
    },
    panel: {
      padding: 20,
      backgroundColor: '#FFFFFF',
      paddingTop: 20,
    },
    header: {
      backgroundColor: '#FFFFFF',
      shadowColor: '#333333',
      shadowOffset: {width: -1, height: -3},
      shadowRadius: 2,
      shadowOpacity: 0.4,
      paddingTop: 20,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    panelHeader: {
      alignItems: 'center',
    },
    panelHandle: {
      width: 40,
      height: 8,
      borderRadius: 4,
      backgroundColor: '#00000040',
      marginBottom: 10,
    },
    panelTitle: {
      fontSize: 27,
      height: 35,
    },
    panelSubtitle: {
      fontSize: 14,
      color: 'gray',
      height: 30,
      marginBottom: 10,
    },
    panelButton: {
      padding: 13,
      borderRadius: 10,
      backgroundColor: '#6986C5',
      alignItems: 'center',
      marginVertical: 7,
    },
    panelButtonTitle: {
      fontSize: 17,
      fontWeight: 'bold',
      color: 'white',
    },
    action: {
      flexDirection: 'row',
      marginTop: 10,
      marginBottom: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#f2f2f2',
      paddingBottom: 5,
    },
    actionError: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#FF0000',
      paddingBottom: 5,
    },
    textInput: {
      flex: 1,
      paddingLeft: 10,
      color: '#05375a',
    },
  });