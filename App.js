import React from 'react'
import 'react-native-gesture-handler';
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
  ProfilScreen
} from './src/screens'
import { FIREBASE_CONFIG } from './src/core/config'
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator();

if (!firebase.apps.length) {
  firebase.initializeApp(FIREBASE_CONFIG)
}

export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="AuthLoadingScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Drawer.Screen
            name="AuthLoadingScreen"
            component={AuthLoadingScreen}
          />
          <Drawer.Screen name="StartScreen" component={StartScreen} />
          <Drawer.Screen name="LoginScreen" component={LoginScreen} />
          <Drawer.Screen name="RegisterScreen" component={RegisterScreen} />
          <Drawer.Screen name="Dashboard" component={Dashboard} />
          <Drawer.Screen name="Classroom" component={Classroom} />
          <Drawer.Screen name="CarnetScreen" component={CarnetScreen} />
          <Drawer.Screen name="Message" component={Message} />
          <Drawer.Screen name="DiscussionList" component={DiscussionList} />
          <Drawer.Screen name="Blog" component={Blog} />
          <Drawer.Screen name="AjouterArticle" component={AjouterArticle} />
          <Drawer.Screen name="AjouterMotCarnetScreen" component={AjouterMotCarnetScreen} />
          <Drawer.Screen name="ProfilScreen" component={ProfilScreen} />
          <Drawer.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
