import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { Component } from 'react';
import {View, SafeAreaView, StyleSheet, TextInput, ImageBackground, TouchableOpacity, Image } from 'react-native';
import {
  Text,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Ionicons } from '@expo/vector-icons'
import Feather from 'react-native-vector-icons/Feather';
import { colors } from 'react-native-elements';
import UserPermissions from '../helpers/UserPermissions'
import * as ImagePicker from 'expo-image-picker'
import Fire from "../core/Fire";
import * as firebase from 'firebase'




export default class EditProfilScreen extends Component {
  state = {
    user: {
      name: '',
      email: '',
      password: '',
      role: '',
      avatar: '',
    },
  
  }

   componentDidMount(){
    const user=this.props.uid || Fire.shared.uid
    this.unsubscribe=Fire.shared.firestore.collection('users').doc(user).onSnapshot(doc=>{
      this.setState({user:doc.data()})
    })

 }

 handlePickAvatar = async () => {
  UserPermissions.getCameraPermission()

  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [4, 3],
  })

  if (!result.cancelled) {
    this.setState({ user: { ...this.state.user, avatar: result.uri } })
  }
}

 componentWillUnmount(){
   this.unsubscribe()
 }

 updateUser() {
  const updateDBRef = Fire.shared.firestore.collection('users').doc(uid);
    updateDBRef.set({
      avatar: this.state.avatar,
      
    }).then(doc=> {
      this.setState({
       
        avatar: '',
      
      });
      this.props.navigation.navigate('ProfilScreen');
    })
    .catch((error) => {
      console.error("Error: ", error);
      this.setState({
        isLoading: false,
      });
    });
}

 deleteUser() {
  const dbRef = firebase.firestore().collection('users').doc(this.props.route.params.userkey)
    dbRef.delete().then((res) => {
        console.log('Item removed from database')
        this.props.navigation.navigate('ProfilScreen');
    })
}

openTwoButtonAlert=()=>{
  Alert.alert(
    'Delete User',
    'Are you sure?',
    [
      {text: 'Yes', onPress: () => this.deleteUser()},
      {text: 'No', onPress: () => console.log('No item was removed'), style: 'cancel'},
    ],
    { 
      cancelable: true 
    }
  );
}

  render() {
    return (

<View style={styles.container}>

<View style={{margin:20}}>
<View style={{alignItems:'center'}}>
<TouchableOpacity onPress={this.handlePickAvatar}>
<View style={{
    height:100,
    width:100,
    borderRadius:15,
    justifyContent:'center',
    alignItems:'center'
}}>
    <ImageBackground             
        source={{ uri: this.state.user.avatar }}
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
    {this.state.user.name}</Text>

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

<TouchableOpacity style={styles.commandButton} onPress={this.updateUser}>
                <Text style={styles.panelButton, {color:'#fff'}}>Valider les modifications</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.commandDelete} onPress={this.deleteUser}>
                <Text style={styles.panelDelete, {color:'#fff'}}>Supprimer un compte</Text>
</TouchableOpacity>

</View>
</View>

)
              }
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
    commandDelete: {
      padding: 15,
      borderRadius: 10,
      backgroundColor: '#E46472',
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
    panelDelete: {
      padding: 13,
      borderRadius: 10,
      backgroundColor: 'red',
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