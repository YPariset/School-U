import React from 'react'
import { View, StyleSheet, Platform} from 'react-native';
import Button from '../components/Button'
import { logoutUser } from '../api/auth-api'
import { theme } from '../core/theme'
import CardImageExample from '../components/Card'
import { Icon } from 'native-base';
import { Header } from 'react-native-elements';


export default class Dashboard extends React.Component {
  render(){
  return (
    <View style={styles.container} >
      <Header 
      leftComponent={<Icon name="menu" onPress={() => this.props.navigation.openDrawer()} />}
      centerComponent={{ text: 'Coding Factory', style: { color: 'black' } }}
      containerStyle={{
        backgroundColor: 'transparent',
        marginBottom: 20,
        width: '100%'
        
      }}
      
      />
      <CardImageExample style={styles.card}></CardImageExample>
      <View style={styles.container}></View>
     
      <Button style={styles.blog} labelStyle={styles.text1} mode="outlined">
        Blog
      </Button>
      <View style={styles.row}>
      <Button style={styles.carnet} labelStyle={styles.text1} mode="outlined">
        Carnet
      </Button>
      <Button style={styles.messagerie} labelStyle={styles.text1} mode="outlined">
        Messagerie
      </Button>
      </View>
    </View>
  )
}
}

const styles = StyleSheet.create({
  ...Platform.select({ 
                web: {
                  blog:{
                    backgroundColor: "#6986C5",
                    borderRadius: 10,
                    width: '80%',
                    borderWidth: 0
                  },
                  carnet: {
                    backgroundColor: "#FABE7C",
                    width: '40%',
                    borderRadius: 10,
                    borderWidth: 0,
                    marginRight: 25
                  },
                  messagerie: {
                    backgroundColor: "#E46472",
                    width: '40%',
                    borderRadius: 10,
                    borderWidth: 0
                  },
                  headerHome:{
                    marginTop: 40,
                    marginBottom: 20,
                    fontSize: 21,
                    fontWeight: 'bold',
                    color: theme.colors.primary,
                  },
                  text1: {
                    color: "white",
                    fontWeight: 'bold',
                    fontSize: 15,
                    lineHeight: 26,
                  },
                  row: {
                    flexDirection: "row",
                    flexWrap: "nowrap",
                    justifyContent: 'center',
                    width: '100%',
                    padding:20,
                    alignSelf: 'center',
                    alignItems: 'center',
                    
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
                  blog:{
                    backgroundColor: "#6986C5",
                    borderRadius: 10,
                    borderWidth: 0
                  },
                  carnet: {
                    backgroundColor: "#FABE7C",
                    width: '50%',
                    borderRadius: 10,
                    borderWidth: 0,
                    marginRight: 15
                  },
                  messagerie: {
                    backgroundColor: "#E46472",
                    width: '47%',
                    borderRadius: 10,
                    borderWidth: 0
                  },
                  headerHome:{
                    marginTop: 40,
                    marginBottom: 20,
                    fontSize: 21,
                    fontWeight: 'bold',
                    color: theme.colors.primary,
                    alignSelf: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                  },
                  text1: {
                    color: "white",
                    fontWeight: 'bold',
                    fontSize: 15,
                    lineHeight: 26,
                  },
                  row: {
                    flexDirection: "row",
                    flexWrap: "nowrap",
                    justifyContent: 'space-around'
                  },
                  container: {
                    backgroundColor: '#FFF9EC',
                    flex: 1,
                    padding: 20,
                    paddingBottom: 50,
                    width: '100%',
                    justifyContent: 'center',
                  }
              
                } 
              }),
            });