import React, {Component} from 'react';
import { View, StyleSheet, Text, Color } from 'react-native';
import { ListItem, Avatar, Header, Button } from 'react-native-elements';
import { Icon } from 'native-base';



export default function DiscussionList({ navigation }){


    const list = [
        {
            
          name: 'Raymonde',
          avatar_url: 'https://storage-dating.euranka.com/uploads/sites/5/2018/12/photo-profil-rencontre-2019.jpg',
          subtitle: 'Maman de ...'
        },
        {
          name: 'Cigismond',
          avatar_url: 'https://wl-sympa.cf.tsp.li/resize/728x/jpg/f6e/ef6/b5b68253409b796f61f6ecd1f1.jpg',
          subtitle: 'Papa de ...'
        },
        {
            name: 'Fernand',
            avatar_url: 'https://www.santelog.com/sites/santelog.com/www.santelog.com/files/images/accroche/fotolia_204690549_xs_vieu_beau.jpg',
            subtitle: 'Papa de ...'
          },
        
      ]
      

    return (
<View style={styles.backgroundColor}>
        <Header 
      leftComponent={<Icon name="menu" onPress={() => navigation.openDrawer()} />}
      centerComponent={{ text: 'Coding Factory', style: { color: 'black' } }}
      containerStyle={{
        backgroundColor: 'transparent',
        width: '100%'
        
      }}
      
      />
<View style={styles.title}>
<Text style={styles.titre}>Discussions</Text>
  {
    list.map((l, i) => (
      <ListItem style={styles.listItem} key={i} bottomDivider>
          
        <Avatar rounded source={{uri: l.avatar_url}} />
        <ListItem.Content>
          <ListItem.Title style={styles.name}>{l.name}</ListItem.Title>
          <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron onPress={() => navigation.navigate('Message')} />
        
      </ListItem>
    ))
  }
</View>
</View>

)

}

const styles = StyleSheet.create({
    titre: {
        marginLeft: 120, 
        marginBottom:60,
        fontWeight: 'bold',
        fontSize: 23,
    },
    backgroundColor: {
        backgroundColor: '#fff9ec',
    },
    title: {
        marginTop: 60,
        marginBottom: 500
        
    },
    listItem: {
        marginBottom:20,
        marginRight:20,
        marginLeft:20,
        borderRadius:10
    },
    name: {
        fontWeight: 'bold',
    },
    container:{ 
        backgroundColor: '#FFF9EC',
        flex: 1,
        resizeMode: 'cover',
    },
    itemContainer: {
        marginTop: 50,

    }
}
  )