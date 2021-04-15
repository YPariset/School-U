import React from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  StatusBar,
  Platform,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import UserPermissions from '../helpers/UserPermissions'
import * as ImagePicker from 'expo-image-picker'
import Fire from '../core/Fire'
import DropDownPicker from 'react-native-dropdown-picker'
import { ScrollView } from 'react-native-gesture-handler'

export default class RegisterScreen extends React.Component {
  static navigationOptions = {
    header: null,
  }

  state = {
    user: {
      name: '',
      email: '',
      password: '',
      role: '',
      avatar: null,
    },
    errorMessage: null,
  }

  handleSignUp = () => {
    Fire.shared.createUser(this.state.user)
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

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <StatusBar barStyle="dark-content"></StatusBar>
          <View style={styles.inputView}>
            <Text
              style={styles.greeting}
            >{`Hello!\nSign up to get started.`}</Text>
            <TouchableOpacity
              style={styles.avatarPlaceholder}
              onPress={this.handlePickAvatar}
            >
              <Image
                source={{ uri: this.state.user.avatar }}
                style={styles.avatar}
              />
              <Ionicons
                name="ios-add"
                size={40}
                color="black"
                style={{ marginTop: 6, marginLeft: 2 }}
              ></Ionicons>
            </TouchableOpacity>
          </View>

          <View style={styles.errorMessage}>
            {this.state.errorMessage && (
              <Text style={styles.error}>{this.state.errorMessage}</Text>
            )}
          </View>
          <View style={styles.formBack}>
            <View style={styles.form}>
              <View>
                <Text style={styles.inputTitle}>Full Name</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={(name) =>
                    this.setState({ user: { ...this.state.user, name } })
                  }
                  value={this.state.user.name}
                ></TextInput>
              </View>

              <View style={{ marginTop: 28 }}>
                <Text style={styles.inputTitle}>Email Address</Text>
                <TextInput
                  style={styles.input}
                  autoCapitalize="none"
                  onChangeText={(email) =>
                    this.setState({ user: { ...this.state.user, email } })
                  }
                  value={this.state.user.email}
                ></TextInput>
              </View>

              <View style={{ marginTop: 28 }}>
                <Text style={styles.inputTitle}>Password</Text>
                <TextInput
                  style={styles.input}
                  secureTextEntry
                  autoCapitalize="none"
                  onChangeText={(password) =>
                    this.setState({ user: { ...this.state.user, password } })
                  }
                  value={this.state.user.password}
                ></TextInput>
              </View>
              <View style={{ marginTop: 28, marginBottom: 30 }}>
                <Text style={styles.inputTitle}>Rôle</Text>
                <DropDownPicker
                  items={[
                    { label: 'Parent', value: 'Parent' },
                    { label: 'Enseignant', value: 'Enseignant' },
                  ]}
                  labelStyle={{ color: Platform.select({ web: 'white' }) }}
                  defaultIndex={0}
                  containerStyle={{
                    marginTop: 10,
                    height: 40,
                  }}
                  onChangeItem={(role) =>
                    this.setState({ user: { ...this.state.user, role } })
                  }
                />
              </View>
            </View>

            <TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
              <Text style={{ color: '#FFF', fontWeight: '500' }}>Sign up</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{ alignSelf: 'center', marginTop: 32 }}
              onPress={() => this.props.navigation.navigate('LoginScreen')}
            >
              <Text style={{ color: 'white', fontSize: 13 }}>
                Vous avez déjà un compte ?{' '}
                <Text style={{ fontWeight: '500', color: '#E46472' }}>
                  Sign in
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  ...Platform.select({
    web: {
      container: {
        flex: 1,
        backgroundColor: '#FFF9EC',
      },
      greeting: {
        marginTop: 32,
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'center',
        color: 'black',
      },
      inputView: {
        alignItems: 'center',
        width: '100%',
      },
      formBack: {
        alignSelf: 'center',
        backgroundColor: '#474749',
        marginHorizontal: 10,
        width: 600,
        height: 600,

        marginTop: 30,
        paddingBottom: 20,
        borderRadius: 50,
      },
      form: {
        marginTop: 80,
        marginBottom: 10,
        marginHorizontal: 30,
      },
      inputTitle: {
        color: 'white',
        fontSize: 10,
        textTransform: 'uppercase',
      },
      input: {
        borderBottomColor: 'white',
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: 'white',
      },
      button: {
        marginHorizontal: 30,
        backgroundColor: '#a4c9c8',
        borderRadius: 10,
        height: 52,
        alignItems: 'center',
        justifyContent: 'center',
      },
      errorMessage: {
        height: 72,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 30,
      },
      error: {
        color: '#E9446A',
        fontSize: 13,
        fontWeight: '600',
        textAlign: 'center',
      },
      back: {
        position: 'absolute',
        top: 48,
        left: 32,
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: 'rgba(21, 22, 48, 0.1)',
        alignItems: 'center',
        justifyContent: 'center',
      },
      avatarPlaceholder: {
        width: 100,
        height: 100,
        backgroundColor: '#E1E2E6',
        borderRadius: 50,
        marginTop: 48,
        justifyContent: 'center',
        alignItems: 'center',
      },
      avatar: {
        position: 'absolute',
        width: 100,
        height: 100,
        borderRadius: 50,
      },
    },
    ios: {
      container: {
        flex: 1,
        backgroundColor: '#FFF9EC',
      },

      inputView: {
        position: 'absolute',
        top: 64,
        alignItems: 'center',
        width: '100%',
      },
      greeting: {
        marginTop: 32,
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'center',
        color: 'black',
      },
      formBack: {
        backgroundColor: '#474749',
        marginTop: 250,
        marginBottom: 100,
        marginHorizontal: 10,
        paddingBottom: 20,

        borderRadius: 50,
      },
      form: {
        marginTop: 50,
        marginBottom: 48,
        marginHorizontal: 30,
      },
      inputTitle: {
        color: 'white',
        fontSize: 10,
        textTransform: 'uppercase',
      },
      input: {
        borderBottomColor: 'white',
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: 'white',
      },
      button: {
        marginHorizontal: 30,
        backgroundColor: '#a4c9c8',
        borderRadius: 10,
        height: 52,
        alignItems: 'center',
        justifyContent: 'center',
      },
      errorMessage: {
        height: 72,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 30,
      },
      error: {
        color: '#E9446A',
        fontSize: 13,
        fontWeight: '600',
        textAlign: 'center',
      },
      back: {
        position: 'absolute',
        top: 48,
        left: 32,
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: 'rgba(21, 22, 48, 0.1)',
        alignItems: 'center',
        justifyContent: 'center',
      },
      avatarPlaceholder: {
        width: 100,
        height: 100,
        backgroundColor: '#E1E2E6',
        borderRadius: 50,
        marginTop: 48,
        justifyContent: 'center',
        alignItems: 'center',
      },
      avatar: {
        position: 'absolute',
        width: 100,
        height: 100,
        borderRadius: 50,
      },
    },
    android: {
      container: {
        flex: 1,
        backgroundColor: '#FFF9EC',
      },
      imageHeader: {
        marginTop: -116,
        marginLeft: -50,
      },
      imageFooter: {
        position: 'absolute',
        bottom: -325,
        right: -225,
      },
      inputView: {
        position: 'absolute',
        top: 64,
        alignItems: 'center',
        width: '100%',
      },
      greeting: {
        marginTop: 32,
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'center',
        color: '#FFF',
      },
      form: {
        marginBottom: 48,
        marginHorizontal: 30,
      },
      inputTitle: {
        color: '#8A8F9E',
        fontSize: 10,
        textTransform: 'uppercase',
      },
      input: {
        borderBottomColor: '#8A8F9E',
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: '#161F3D',
      },
      button: {
        marginHorizontal: 30,
        backgroundColor: '#E9446A',
        borderRadius: 4,
        height: 52,
        alignItems: 'center',
        justifyContent: 'center',
      },
      errorMessage: {
        height: 72,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 30,
      },
      error: {
        color: '#E9446A',
        fontSize: 13,
        fontWeight: '600',
        textAlign: 'center',
      },
      back: {
        position: 'absolute',
        top: 48,
        left: 32,
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: 'rgba(21, 22, 48, 0.1)',
        alignItems: 'center',
        justifyContent: 'center',
      },
      avatarPlaceholder: {
        width: 100,
        height: 100,
        backgroundColor: '#E1E2E6',
        borderRadius: 50,
        marginTop: 48,
        justifyContent: 'center',
        alignItems: 'center',
      },
      avatar: {
        position: 'absolute',
        width: 100,
        height: 100,
        borderRadius: 50,
      },
    },
  }),
})
