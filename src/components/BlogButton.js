import React, { Component } from 'react';
import {View, Button, Text} from 'react-native';
import Fire from "../core/Fire";


export default class BlogButton extends Component{
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
  let TheBlogButton;  
  let role = this.state.user.role.label;

  if (isParent == this.state.user.role.label) {
    TheBlogButton = null;
  } else {
    TheBlogButton = <Button title='Ajouter' onPress={() => this.props.navigation.navigate('PostScreen')}/>;
  }

  return (
    <View>
      {TheBlogButton}
    </View>
  );

  }
}
