import React from 'react'
import 'react-native-gesture-handler';
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import firebase from 'firebase/app'
import 'firebase/auth'
import { theme } from './src/core/theme'
import {
  Dashboard,
  CarnetScreen,
  DiscussionList,
  Blog,
  ProfilScreen,
  AjouterArticle,
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
          <Drawer.Screen name="Dashboard" component={Dashboard} options={{ title: 'Home' }} />
          <Drawer.Screen name="Carnet" component={CarnetScreen} options={{ title: 'Carnet de liaison' }} />
          <Drawer.Screen name="DiscussionList" component={DiscussionList} options={{ title: 'Messagerie' }} />
          <Drawer.Screen name="Blog" component={Blog} />
          <Drawer.Screen name="ProfilScreen" component={ProfilScreen} options={{ title: 'Profile' }} />
          <Stack.Screen name="AjouterArticle" component={AjouterArticle}  options={{
                drawerLabel: () => null,
  
            }}  />

        </Drawer.Navigator>
        
      </NavigationContainer>
    </Provider>
  )
}
