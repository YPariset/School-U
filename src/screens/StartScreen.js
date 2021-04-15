import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  Image,
  StatusBar,
  Platform,
} from 'react-native'

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <StatusBar barStyle="light-content"></StatusBar>

      <Image
        source={require('../assets/Craie_couleur.png')}
        style={styles.craic}
      />

      <Image source={require('../assets/logo_large.png')} style={styles.logo} />

      <Paragraph style={styles.para}>"La vie de classe en 3 clics"</Paragraph>
      <Button
        mode="contained"
        style={styles.bouton}
        labelStyle={{
          color: 'white',
          fontWeight: 'bold',
          fontSize: 15,
          lineHeight: 26,
        }}
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Se connecter
      </Button>
      <Button
        mode="outlined"
        style={styles.bouton_creer}
        labelStyle={{
          color: '#E46472',
          fontWeight: 'bold',
          fontSize: 15,
          lineHeight: 26,
        }}
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Créer un compte
      </Button>
      <View style={styles.craibView}>
        <Image
          source={require('../assets/craie_blanches.png')}
          style={styles.craib}
        />
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  ...Platform.select({
    web: {
      craicView: {
        flex: 0,
        alignSelf: 'center',
      },
      craibView: {
        flex: 0,
        marginTop: 200,
        flexDirection: 'row',
        alignItems: 'flex-end',
        alignSelf: 'center',
      },

      craic: {
        width: 100,
        height: 100,
      },

      craib: {
        width: 200,
        height: 150,
      },
      bouton: {
        alignSelf: 'center',
        width: 200,
        marginTop: 30,
        backgroundColor: '#a4c9c8',
        borderRadius: 10,
      },
      bouton_creer: {
        alignSelf: 'center',
        width: 200,
        marginTop: 30,
        borderRadius: 10,
        backgroundColor: '#FFF9EC',
      },
      logo: {
        alignSelf: 'center',
        width: 350,
        height: 50,
        marginTop: 50,
        marginBottom: 50,
      },
      para: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 50,
        color: '#FFF9EC',
      },
    },
    ios: {
      craicView: {
        flex: 0,
        alignSelf: 'center',
      },
      craibView: {
        flex: 0,
        flexDirection: 'row',
        alignItems: 'flex-end',
        alignSelf: 'center',
      },

      craic: {
        width: '30%',
        height: 'auto',
        aspectRatio: 3 / 2,
      },

      craib: {
        alignItems: 'flex-end',
        marginTop: 100,
        width: '30%',
        height: 'auto',
        aspectRatio: 3 / 2,
      },
      bouton: {
        alignSelf: 'center',
        width: 200,
        marginTop: 30,
        backgroundColor: '#a4c9c8',
        borderRadius: 10,
      },
      bouton_creer: {
        alignSelf: 'center',
        width: 200,
        marginTop: 30,
        borderRadius: 10,
        backgroundColor: '#FFF9EC',
      },
      logo: {
        alignSelf: 'center',
        width: 350,
        height: 50,
        marginTop: 50,
        marginBottom: 50,
      },
      para: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 50,
        color: '#FFF9EC',
      },
    },
  }),
})
