import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Image,
  Platform,
} from 'react-native'
import Constants from 'expo-constants'
import * as Permissions from 'expo-permissions'
import { Ionicons } from '@expo/vector-icons'
import Fire from '../core/Fire'
import * as ImagePicker from 'expo-image-picker'
import Button from '../components/Button'

const firebase = require('firebase')
require('firebase/firestore')

export default class PostScreen extends React.Component {
  state = {
    text: '',
    image: null,
    user: {},
  }

  componentDidMount() {
    this.getPhotoPermission()
    const user = this.props.uid || Fire.shared.uid
    this.unsubscribe = Fire.shared.firestore
      .collection('users')
      .doc(user)
      .onSnapshot((doc) => {
        this.setState({ user: doc.data() })
      })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  getPhotoPermission = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)

      if (status != 'granted') {
        alert(
          "We need permission to use your camera roll if you'd like to incude a photo."
        )
      }
    }
  }

  handlePost = () => {
    Fire.shared
      .addPost({ text: this.state.text.trim(), localUri: this.state.image })
      .then((ref) => {
        this.setState({ text: '', image: null })
        this.props.navigation.goBack()
      })
      .catch((error) => {
        alert(error)
      })
  }

  pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
    })

    if (!result.cancelled) {
      this.setState({ image: result.uri })
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.postMessage}>
          <View style={styles.inputContainer}>
            <Image
              source={
                this.state.user.avatar ? { uri: this.state.user.avatar } : null
              }
              style={styles.avatar}
            ></Image>
            <TextInput
              autoFocus={true}
              multiline={true}
              numberOfLines={7}
              style={{ flex: 1 }}
              placeholder="Ajouter un mot sur le blog"
              onChangeText={(text) => this.setState({ text })}
              value={this.state.text}
            ></TextInput>
          </View>

          <TouchableOpacity style={styles.photo} onPress={this.pickImage}>
            <Ionicons name="md-camera" size={32} color="#D8D9DB"></Ionicons>
          </TouchableOpacity>
        </View>
        <View style={styles.tailleImageContainer}>
          <Image
            source={{ uri: this.state.image }}
            style={styles.tailleImage}
          ></Image>
        </View>
        <Button
          style={styles.buttonAdd}
          onPress={this.handlePost}
          labelStyle={styles.text}
          mode="outlined"
        >
          Ajouter un mot sur le blog
        </Button>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  ...Platform.select({
    ios: {
        tailleImageContainer: { 
            marginHorizontal: 32, 
            height: 150 
        },
        tailleImage: { 
            width: '100%', 
            height: '100%', 
            marginTop: 20, 
            borderRadius: 10
        },
        container: {
            flex: 1,
            backgroundColor: '#fff9ec',
        },
        titrePage: {
            paddingRight: 100,
            fontWeight: 'bold',
            fontSize: 15,
            lineHeight: 26,
        },
        header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 32,
            paddingVertical: 12,
            borderBottomWidth: 1,
            borderBottomColor: '#D8D9DB',
        },
        inputContainer: {
            marginTop: 20,
            flexDirection: 'row',
        },
        avatar: {
            width: 48,
            height: 48,
            borderRadius: 24,
            marginRight: 7,
            marginLeft: 7
        },
        photo: {
            alignItems: 'flex-end',
            marginHorizontal: 32,
            marginRight: 5,
            marginTop: 70,
        },
        postMessage: {
            backgroundColor: 'white',
            marginLeft: 20,
            marginRight: 20,
            marginTop: 20,
            borderColor: '#a4c9c8',
            borderRadius: 10,
            marginRight: 30,
            marginLeft: 30,
            shadowColor: '#000',
            shadowColor: '#000',
            shadowOffset: {
            width: 0,
            height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,
            elevation: 8,
        },
        buttonAdd: {
            backgroundColor: '#6986C5',
            borderRadius: 10,
            width: '80%',
            borderWidth: 0,
            marginRight: 'auto',
            marginLeft: 'auto',
            marginTop: 70,
        },
        text: {
            color: 'white',
            fontWeight: 'bold',
            fontSize: 15,
            lineHeight: 26,
        },
    },
    android: {
        tailleImageContainer: { 
            marginHorizontal: 32, 
            height: 150 
        },
        tailleImage: { 
            width: '100%', 
            height: '100%', 
            marginTop: 20, 
            borderRadius: 10
        },
        container: {
            flex: 1,
            backgroundColor: '#fff9ec',
        },
        titrePage: {
            paddingRight: 100,
            fontWeight: 'bold',
            fontSize: 15,
            lineHeight: 26,
        },
        header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 32,
            paddingVertical: 12,
            borderBottomWidth: 1,
            borderBottomColor: '#D8D9DB',
        },
        inputContainer: {
            marginTop: 10,
            flexDirection: 'row',
        },
        avatar: {
            width: 48,
            height: 48,
            borderRadius: 24,
            marginRight: 7,
            marginLeft: 7
        },
        photo: {
            alignItems: 'flex-end',
            marginHorizontal: 32,
            marginRight: 5,
            marginTop: 130,
        },
        postMessage: {
            backgroundColor: 'white',
            marginLeft: 20,
            marginRight: 20,
            marginTop: 20,
            borderColor: '#a4c9c8',
            borderRadius: 10,
            marginRight: 30,
            marginLeft: 30,
            shadowColor: '#000',
            shadowColor: '#000',
            shadowOffset: {
            width: 0,
            height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,
            elevation: 8,
        },
        buttonAdd: {
            backgroundColor: '#6986C5',
            borderRadius: 10,
            width: '80%',
            borderWidth: 0,
            marginRight: 'auto',
            marginLeft: 'auto',
            marginTop: -50,
        },
        text: {
            color: 'white',
            fontWeight: 'bold',
            fontSize: 15,
            lineHeight: 26,
        },
    },
    web: {
        tailleImageContainer: { 
            marginHorizontal: 50, 
            height: '100%',  
        },
        tailleImage: { 
            width: '50%', 
            height: '50%', 
            marginTop: 30, 
            paddingTop: 60,
            borderRadius: 10
        },
        container: {
            flex: 1,
            backgroundColor: '#fff9ec',
            width: '100%'
            
        },
        titrePage: {
            paddingRight: 100,
            fontWeight: 'bold',
            fontSize: 15,
            lineHeight: 26,
        },
        header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 32,
            paddingVertical: 12,
            borderBottomWidth: 1,
            borderBottomColor: '#D8D9DB',
        },
        inputContainer: {
            marginTop: 10,
            flexDirection: 'row',
        },
        avatar: {
            width: 48,
            height: 48,
            borderRadius: 24,
            marginRight: 7,
            marginLeft: 7
        },
        photo: {
            alignItems: 'flex-end',
            marginHorizontal: 32,
            marginRight: 5,
            marginTop: 70,
        },
        postMessage: {
            backgroundColor: 'white',
            marginLeft: 20,
            marginRight: 20,
            marginTop: 20,
            borderColor: '#a4c9c8',
            borderRadius: 10,
            marginRight: 30,
            marginLeft: 30,
            shadowColor: '#000',
            shadowColor: '#000',
            shadowOffset: {
            width: 0,
            height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,
            elevation: 8,
        },
        buttonAdd: {
            backgroundColor: '#6986C5',
            borderRadius: 10,
            width: 300,
            borderWidth: 0,
            marginRight: 'auto',
            marginLeft: 'auto',
            marginTop: -400
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
