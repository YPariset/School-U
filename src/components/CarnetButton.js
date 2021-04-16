import React, { Component } from 'react';
import {View, Button, Text} from 'react-native';
import Fire from "../core/Fire";


export default class CarnetButton extends Component{
 constructor(props){
   super(props); 
   this.state={
    user:{
      role:{}
    },
  }
 }
 
   unsubscribe=null

   componentDidMount(){
      const user=this.props.uid || Fire.shared.uid
      this.unsubscribe=Fire.shared.firestore.collection('users').doc(user).onSnapshot(doc=>{
        this.setState({user:doc.data()})
      })

   }

   componentWillUnmount(){
     this.unsubscribe()
   }


render() {

  let isParent = 'Parent';
  let TheCarnetButton;  
  let role = this.state.user.role.label;

  if (isParent == this.state.user.role.label) {
    TheCarnetButton = null;
  } else {
    TheCarnetButton = <Button title='Ajouter' onPress={() => this.props.navigation.navigate('AjouterMotCarnetScreen')}/>;
  }

  return (
    <View>
      {TheCarnetButton}
    </View>
  );

  }
}
