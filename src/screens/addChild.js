//import React in our code
import React, {useState} from 'react';
import { Form, Item, Input, Text, Container} from 'native-base';
import Button from '../components/Button'

//import all the components we are going to use
import {
    SafeAreaView,
    StyleSheet,
    View,
    //Button,
    Image
} from 'react-native';

const App = ({navigation}) => {
  const [shouldShow, setShouldShow] = useState(false);
  return (
    <Container style={styles.background}>
    <Text style={styles.titre}>Ajouter un enfant</Text>
    <SafeAreaView >
    <Form style={styles.premierForm}>
    <Item>
        <Input placeholder="Nom de l'enfant " />
          </Item>
            <Item last>
            <Input placeholder="Code de la classe " />
        </Item>
    </Form>
      <View style={styles.container}>
        {/*Here we will return the view when state is true 
        and will return false if state is false*/}
        {shouldShow ? (
          <Form style={styles.secondForm}>
            <Text style={styles.ajoutEnfant}>Ajout d'un deuxieme enfant</Text>
            <Item>
              <Input placeholder="Nom de l'enfant " />
            </Item>
            <Item last>
              <Input placeholder="Code de la classe " />
            </Item>
          </Form>
        ) : null}
        <Button style={styles.buttonAddNdChild}
          labelStyle={styles.text} mode="outlined"
          onPress={() => setShouldShow(!shouldShow)}
        >Ajouter un second enfant</Button>

        
        <Button style={styles.buttonValider}
          labelStyle={styles.text} mode="outlined"
          onPress={() => navigation.navigate('Dashboard')}
        > Valider </Button>
        
        
        
      </View>
      
    </SafeAreaView>
    </Container>
  );
};

const styles = StyleSheet.create({
  ...Platform.select({ 
                ios: {
                  background: {
                    backgroundColor: '#fff9ec',
                  }, 
                  buttonValider: {
                    marginBottom: 200
                  }, 
                  premierForm: {
                    paddingTop: 30,
                    paddingBottom: 100
                  }, 
                  secondForm: {
                    paddingBottom: 100,
                  }, 
                  ajoutEnfant: {
                    marginBottom: 30,
                    color: "black",
                    fontWeight: 'bold',
                    fontSize: 18,
                    lineHeight: 26,
                    textAlign: 'center', 
                    marginRight: 'auto', 
                    marginLeft: 'auto'
                  }, 
                  text: {
                    color: "white",
                    fontWeight: 'bold',
                    fontSize: 15,
                    lineHeight: 26,
                  },
                  titre: {
                    marginTop: 30,
                    color: "black",
                    fontWeight: 'bold',
                    fontSize: 18,
                    lineHeight: 26,
                    textAlign: 'center', 
                    marginRight: 'auto', 
                    marginLeft: 'auto'
                  },
                  buttonAddNdChild: {
                    marginTop: 100, 
                    backgroundColor: "#FABE7C",
                    width: '70%',
                    borderRadius: 10,
                    borderWidth: 0,
                    marginRight: 'auto', 
                    marginLeft: 'auto'
                  }, 
                  buttonValider: {
                    backgroundColor: "#6986C5",
                    borderRadius: 10,
                    borderWidth: 0, 
                    width: '90%', 
                    marginRight: 'auto', 
                    marginLeft: 'auto'
                  },
                },
                web: {
                  
                }
              }),
            });

export default App;