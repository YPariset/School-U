import React from 'react'
import { View, StyleSheet, Platform, Text} from 'react-native';
import Button from '../components/Button'
import { logoutUser } from '../api/auth-api'
import { theme } from '../core/theme'
import CardImageExample from '../components/Card'
import { Icon } from 'native-base';
import { Header } from 'react-native-elements';


export default class Classroom extends React.Component {
  render(){
  return (
    <View style={styles.container} >
      <Text>Welcome, User !</Text>  
      <Button style={styles.classe1} labelStyle={styles.text} mode="outlined">
        Classe 1
      </Button>
      <Button style={styles.classe2} labelStyle={styles.text} mode="outlined">
        Classe 2
      </Button>
      </View>
  )
}
}

const styles = StyleSheet.create({
  ...Platform.select({ 
                web: {
                  classe1: {
                    backgroundColor: "#6986C5",
                    width: '40%',
                    borderRadius: 10,
                    borderWidth: 0,
                  },
                  classe2: {
                    backgroundColor: "#E46472",
                    width: '40%',
                    borderRadius: 10,
                    borderWidth: 0,
                  },
                  text: {
                    color: "white",
                    fontWeight: 'bold',
                    fontSize: 15,
                    lineHeight: 26,
                  },
                  container: {
                    backgroundColor: '#FFF9EC',
                    flex: 1,
                    paddingTop: 20,
                    paddingRight: 200,
                    paddingLeft: 200,
                    paddingBottom: 20,
                    width: '100%',
                    alignSelf: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }
                },
                ios: {
                    classe1: {
                        backgroundColor: "#6986C5",
                        width: '80%',
                        borderRadius: 10,
                        borderWidth: 0,
                      },
                      classe2: {
                        backgroundColor: "#E46472",
                        width: '80%',
                        borderRadius: 10,
                        borderWidth: 0,
                      },
                  text: {
                    color: "white",
                    fontWeight: 'bold',
                    fontSize: 15,
                    lineHeight: 26,
                  },
                  container: {
                    backgroundColor: '#FFF9EC',
                    flex: 1,
                    padding: 20,
                    paddingBottom: 50,
                    width: '100%',
                    justifyContent: 'center',
                    alignSelf: 'center',
                    alignItems: 'center',
                    
                  }
              
                } 
              }),
            });