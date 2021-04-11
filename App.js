import React from 'react'
import { Button } from 'react-native'
import 'react-native-gesture-handler'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import firebase from 'firebase/app'
import 'firebase/auth'
import { theme } from './src/core/theme'
import {
  AuthLoadingScreen,
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Dashboard,
  Classroom,
  CarnetScreen,
  Message,
  DiscussionList,
  Blog,
  AjouterArticle,
  AjouterMotCarnetScreen,
  ProfilScreen,
  EditProfilScreen,
  PostScreen,
  CarnetScreen2
} from './src/screens'
import { FIREBASE_CONFIG } from './src/core/config'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer'
import { Icon } from 'native-base'

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

if (!firebase.apps.length) {
  firebase.initializeApp(FIREBASE_CONFIG)
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label="Home"
        onPress={() => props.navigation.navigate('Dashboard')}
      />
      <DrawerItem
        label="Blog"
        onPress={() => props.navigation.navigate('Blog')}
      />
      <DrawerItem
        label="Carnet de liaison"
        onPress={() => props.navigation.navigate('CarnetScreen2')}
      />
      <DrawerItem
        label="Messagerie"
        onPress={() => props.navigation.navigate('DiscussionList')}
      />
      <DrawerItem
        label="Profile"
        onPress={() => props.navigation.navigate('ProfilScreen')}
      />
    </DrawerContentScrollView>
  )
}

function StackNavigator({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="AuthLoadingScreen" screenOptions={{}}>
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerStyle: { backgroundColor: '#FFF9EC' },
          title: 'Home',
          headerLeft: () => (
            <Icon name="menu" onPress={() => navigation.openDrawer()} />
          ),
        }}
      />
      <Stack.Screen
        name="Blog"
        component={Blog}
        options={{ title: null, headerStyle: { backgroundColor: 'white' } }}
      />
      <Stack.Screen
        name="CarnetScreen"
        component={CarnetScreen}
        options={{
          title: 'Carnet de liaison',
          headerStyle: { backgroundColor: '#FFF9EC' },
        }}
      />


      <Stack.Screen
        name="DiscussionList"
        component={DiscussionList}
        options={{
          title: 'Messagerie',
          headerStyle: { backgroundColor: '#FFF9EC' },
        }}
      />
      <Stack.Screen
        name="ProfilScreen"
        component={ProfilScreen}
        options={{
          title: 'Profile',
          headerStyle: { backgroundColor: '#FFF9EC' },
        }}
      />
      <Stack.Screen
        name="AuthLoadingScreen"
        component={AuthLoadingScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="StartScreen"
        component={StartScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Classroom"
        component={Classroom}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Message" component={Message} />
      <Stack.Screen
        name="AjouterMotCarnetScreen"
        component={AjouterMotCarnetScreen}
        options={{ headerStyle: { backgroundColor: '#FFF9EC' } }}
      />
      <Stack.Screen name="EditProfilScreen" component={EditProfilScreen} />
      <Stack.Screen
        name="ResetPasswordScreen"
        component={ResetPasswordScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AjouterArticle"
        component={AjouterArticle}
        options={{ headerShown: false } }
      />
      <Stack.Screen
        name="PostScreen"
        component={PostScreen}
        options={{ headerShown: false } }
      />
      
    </Stack.Navigator>
  )
}

function DrawerNavigator({ navigation, route }) {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Stack" component={StackNavigator} />
    </Drawer.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  )
}
export default App
