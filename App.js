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
          <Drawer.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
