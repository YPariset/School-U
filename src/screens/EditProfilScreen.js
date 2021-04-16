import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import {View, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, ImageBackground} from 'react-native';
import {
  Text,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { Ionicons } from "@expo/vector-icons";
import { colors } from 'react-native-elements';
import Fire from "../core/Fire";
import * as ImagePicker from 'expo-image-picker';
import UserPermissions from '../helpers/UserPermissions'


export default class EditProfilScreen extends React.Component{
  
  constructor() {
    super();
    this.state = {
        name,
        email,
        password,
        role,
        avatar: null,
        phone:'',
        city: '',
        country: '',
        status: '',
        kids:'' ,
      isLoading: true
  }
}
componentDidMount() {
  const db = firebase.firestore().collection('users').doc(this.props.route.params.uid)
  db.get().then((res) => {
    if (res.exists) {
      const user = res.data();
      this.setState({
          name : user.name,
          email : user.email,
          password,
          role,
          avatar: null,
          phone:user.phone,
          city: user.city,
          country: user.country,
          status: user.status,
          kids: user.kids,
          isLoading: false
      });
    } else {
      console.log("Document does not exist!");
    }
  });
}

inputValueUpdate = (val, prop) => {
  const state = this.state;
  state[prop] = val;
  this.setState(state);
}

updateUser() {
  this.setState({
    isLoading: true,
  });
  const updateDBRef = firebase.firestore().collection('users').doc(this.state.key);
  updateDBRef.set({
    name: this.state.name,
    email: this.state.email,
    phone: this.state.phone,
    city: this.user.city,
    country: this.user.country,
    status: this.user.status,
    kids: this.user.kids
  }).then((docRef) => {
    this.setState({
      email: '',
      phone: '',
      city: '',
      country: '',
      status: '',
      kids: '',
      isLoading: false,
    });
    this.props.navigation.navigate('UserScreen');
  })
  .catch((error) => {
    console.error("Error: ", error);
    this.setState({
      isLoading: false,
    });
  });
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

  updateMobileNumber(){

    var updateData = {
                    MobileNumber: this.state.mobileNumber
                      };

    var updates = {};
    updates['/users/' + userId ] = updateData;

    database.ref('users/' + userId).update({MobileNumber: newNumber});

    alert('Account Updated');

   }


  render(){
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
        source={this.state.user.avatar?{uri:this.state.user.avatar}:null}
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

<Text style={{marginTop:10, marginBottom:10, fontSize:18, fontWeight:'bold'}}>
{this.state.user.name}</Text>

</View>


<View style={styles.action}>
    <Feather name='phone' size={20} color={colors.text}/>
<TextInput
    placeholder='Votre numéro de téléphone'
    placeholderTextColor='#666666'
    keyboardType='number-pad'
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

<View style={styles.action}>
<Ionicons name='add-circle-outline'  size={20} color={colors.text} />
<TextInput
    placeholder='Statut'
    placeholderTextColor='#666666'
    style={styles.textInput}
    autoCorrect={false}
/>
</View>

<View style={styles.action}>
    <Ionicons name='happy-outline' size={20} color={colors.text} />
<TextInput
    placeholder='Mon enfant'
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