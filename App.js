import React from 'react'
import { Button } from 'react-native'
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
  ProfilScreen,
  EditProfilScreen

} from './src/screens'
import { FIREBASE_CONFIG } from './src/core/config'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator();

if (!firebase.apps.length) {
  firebase.initializeApp(FIREBASE_CONFIG)
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem label="Home" onPress={() => props.navigation.navigate('Dashboard')} />
      <DrawerItem label="Blog" onPress={() => props.navigation.navigate('Blog')} />
      <DrawerItem label="Carnet de liaison" onPress={() => props.navigation.navigate('CarnetScreen')} />
      <DrawerItem label="Messagerie" onPress={() => props.navigation.navigate('DiscussionList')} />
      <DrawerItem label="Profile" onPress={() => props.navigation.navigate('ProfilScreen')} />
    </DrawerContentScrollView>
  );
}

function StackNavigator({navigation}) {
  return (
    <Stack.Navigator 
    initialRouteName="AuthLoadingScreen"
    screenOptions={{
    headerShown: false,
    }}
    >
      <Stack.Screen name="Dashboard" component={Dashboard} options={{ title: 'Home' }}/>
      <Stack.Screen name="Blog" component={Blog} options={{ title: 'Blog' }}  />
      <Stack.Screen name="CarnetScreen" component={CarnetScreen} options={{ title: 'Carnet de liaison' }} />
      <Stack.Screen name="DiscussionList" component={DiscussionList} options={{ title: 'Messagerie' }} />
      <Stack.Screen name="ProfilScreen" component={ProfilScreen} options={{ title: 'Profile' }} />
      <Stack.Screen name="AuthLoadingScreen" component={AuthLoadingScreen} />
      <Stack.Screen name="StartScreen" component={StartScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="Classroom" component={Classroom} />
      <Stack.Screen name="Message" component={Message} />
      <Stack.Screen name="AjouterMotCarnetScreen" component={AjouterMotCarnetScreen} />
      <Stack.Screen name="EditProfilScreen" component={EditProfilScreen} />
      <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />
      <Stack.Screen name="AjouterArticle" component={AjouterArticle} />
    </Stack.Navigator>
  );
}

function DrawerNavigator({navigation, route}) {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Stack" component={StackNavigator} />
    </Drawer.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};
export default App;
