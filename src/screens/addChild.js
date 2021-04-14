//import React in our code
import React, {useState} from 'react';
import { Form, Item, Input, Text} from 'native-base';


//import all the components we are going to use
import {
    SafeAreaView,
    StyleSheet,
    View,
    Button,
    Image
} from 'react-native';

const App = ({navigation}) => {
  const [shouldShow, setShouldShow] = useState(false);
  return (
    <SafeAreaView style={{flex: 1}}>
    <Form>
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
          <Form>
            
            <Text style={styles.ajoutEnfant}>Ajout d'un deuxieme enfant</Text>
            <Item>
              <Input placeholder="Nom de l'enfant " />
            </Item>
            <Item last>
              <Input placeholder="Code de la classe " />
            </Item>
          </Form>
        ) : null}
        <Button
          title="Ajouter un second enfant"
          onPress={() => setShouldShow(!shouldShow)}
        />
        <Button
          title="Valider"
          onPress={() => navigation.navigate('Dashboard')}
        />
        
      </View>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    margin: 10,
  },
});

export default App;