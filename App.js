import React from 'react'
import { Button, View } from 'react-native'
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
  addChild,
  PostScreen,
  AddClassCode,
  CalendarScreen,
} from './src/screens'
import { FIREBASE_CONFIG } from './src/core/config'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer'
import { Icon } from 'native-base'
import { logoutUser } from './src/api/auth-api'

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
        onPress={() => props.navigation.navigate('CarnetScreen')}
      />
      <DrawerItem
        label="Messagerie"
        onPress={() => props.navigation.navigate('DiscussionList')}
      />
      <DrawerItem
        label="Profile"
        onPress={() => props.navigation.navigate('ProfilScreen')}
      />
      <DrawerItem
        label="addChild"
        onPress={() => props.navigation.navigate('addChild')}
      />
      <DrawerItem
        label="AddClassCode"
        onPress={() => props.navigation.navigate('AddClassCode')}
      />
      <DrawerItem
        label="CalendarScreen"
        onPress={() => props.navigation.navigate('CalendarScreen')}
      />

      <DrawerItem
        style={{paddingTop: 440, paddingLeft: 65}}
        label="Se déconnecter"
        onPress={() => {
          logoutUser()
          props.navigation.closeDrawer()
        }}
        labelStyle={{
          color: '#E46472',
        }}
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
            <Icon
              style={{ paddingLeft: 15 }}
              name="menu"
              onPress={() => navigation.openDrawer()}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Blog"
        component={Blog}
        options={{ title: 'Blog', headerStyle: { backgroundColor: '#FFF9EC' } }}
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
      <Stack.Screen
        name="Message"
        component={Message}
        options={{ headerStyle: { backgroundColor: '#FFF9EC' } }}
      />
      <Stack.Screen
        name="AjouterMotCarnetScreen"
        component={AjouterMotCarnetScreen}
        options={{headerStyle: { backgroundColor: '#FFF9EC' } }}
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
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PostScreen"
        component={PostScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="addChild"
        component={addChild}
        options={{ headerStyle: { backgroundColor: '#FFF9EC' } }}
      />
      <Stack.Screen
        name="AddClassCode"
        component={AddClassCode}
        options={{ headerStyle: { backgroundColor: '#FFF9EC' } }}
      />
      <Stack.Screen
        name="CalendarScreen"
        component={CalendarScreen}
        options={{ headerStyle: { backgroundColor: '#FFF9EC' } }}
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
