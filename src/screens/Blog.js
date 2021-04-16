import React from "react";
import { View, Text, StyleSheet, Image, FlatList, Platform, Body, TouchableHighlight} from "react-native";
import { ListItem, CheckBox,} from 'native-base'
import { Ionicons } from "@expo/vector-icons";
import moment from "moment";
import Button from '../components/Button'
import Fire from "../core/Fire";
import { db } from '../core/Fire';
import BlogButton from '../components/BlogButton'
import { TouchableOpacity } from "react-native-gesture-handler";
const def = require('../assets/heart-hover.png');
const spe = require('../assets/heart_full.png');


const firebase = require("firebase");
require("firebase/firestore");


export default class Blog extends React.Component {

    constructor(props){
        super(props)
        this.ref =  Fire.shared.firestore.collection('posts').orderBy('timestamp', 'desc')
        this.useref=
        this.state={
          dataSource : []
        }
      }
      
      componentDidMount(){  
        this.feed = this.ref.onSnapshot(this.feedPosts);
      }
      
      feedPosts = (postSnapShot) =>{
        const post = [];
        postSnapShot.forEach((doc) => {
        const {uid,text,timestamp,image} = doc.data();
        const data=Fire.shared.firestore
        .collection('users')
        .doc(uid)
        .get()
        .then(doc=>{
          post.push({
            avatar:doc.data().avatar
            ,name:doc.data().name,uid,
            
            text,
            timestamp,
            image
          })
          this.setState({
            dataSource : post,
          });
        })
        });
      }

    renderPost = post => {
        return (
            <View style={styles.feedItem}>
                <View style={{ flex: 1 }}>
                <View style={{ flexDirection: "row"}}>
                <Image source={{uri: post.avatar}} style={styles.avatar} />
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <View>
                            <Text style={styles.name}>{post.name}</Text>
                            <Text style={styles.timestamp}>{moment(post.timestamp).fromNow()}</Text>
                        </View>
                    </View></View>
                    <Text style={styles.post}>{post.text}</Text>
                    <Image source={{uri: post.image}} style={styles.postImage} resizeMode="cover" />
                    <View style={{ flexDirection: "row" }}>
                        <Ionicons name="heart-outline" size={24} color="#73788B" style={{ marginRight: 16 }} />
                        <Ionicons name="chatbox-outline" size={24} color="#73788B" />
                    </View>
                </View>
            </View>
        );
    };

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    style={styles.feed}
                    data={this.state.dataSource}
                    renderItem={({ item }) => this.renderPost(item)}
                    keyExtractor={(item, index) => {
                        return  index.toString();
                       }}
                    showsVerticalScrollIndicator={false}
                ></FlatList>
                <View style={styles.header}>
              </View>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('PostScreen')}>
              <BlogButton></BlogButton>  
              </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    ...Platform.select({
    web: {
        button:{
            width: 10
        },
        heart: {
            width: 10
        },
        heartColor: {
            width: 10
        },
        container: {
            flex: 1,
            backgroundColor: "#fff9ec"
        },
        header: {
            backgroundColor: "#fff9ec",
            alignItems: "center",
            justifyContent: "center",
            borderBottomWidth: 1,
            borderBottomColor: "#1fe0",
            shadowRadius: 15,
            shadowOpacity: 0.2,
            zIndex: 1, 
            borderRadius: 50,
            marginRight: '47.5%',
            marginLeft: '47.5%',
        }, 
        headerTitle: {
            fontSize: 50,
            fontWeight: "800"   
        },
        feed: {
            marginHorizontal: 16,
            backgroundColor: "#FFF9EC",
        },
        feedItem: {
            backgroundColor: "#FFF",
            borderRadius: 5,
            padding: 8,
            flexDirection: "row",
            marginVertical: 8,
            backgroundColor: 'white',
            marginTop: 10,
            marginBottom: 10,
            borderWidth: 1,
            borderColor: "#474749",
            borderRadius: 10,
            shadowColor: "#000",
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,
            elevation: 8,
            
        },
        avatar: {
            width: 36,
            height: 36,
            borderRadius: 18,
            marginRight: 16
        },
        name: {
            fontSize: 15,
            fontWeight: "500",
            color: "#454D65"
        },
        timestamp: {
            fontSize: 11,
            color: "#C4C6CE",
            marginTop: 4
        },
        post: {
            marginTop: 60,
            fontSize: 14,
            marginLeft: '60%',
            color: "#838899"
        },
        postImage: {
            width: '40%',
            height: 200,
            borderRadius: 5,
            marginVertical: 16,
            marginTop: -50
        }
      },
    ios: {
        button:{
            width: 10
        },
        heart: {
            width: 10
        },
        heartColor: {
            width: 10
        },
        container: {
            flex: 1,
            backgroundColor: "#fff9ec"
        },
        header: {
            backgroundColor: "#fff9ec",
            alignItems: "center",
            justifyContent: "center",
            borderBottomWidth: 1,
            borderBottomColor: "#1fe0",
            shadowRadius: 15,
            shadowOpacity: 0.2,
            zIndex: 1, 
            borderRadius: 50,
            marginRight: 175,
            marginLeft: 175
        }, 
        headerTitle: {
            fontSize: 50,
            fontWeight: "800"   
        },
        feed: {
            marginHorizontal: 16,
            backgroundColor: "#FFF9EC",
        },
        feedItem: {
            backgroundColor: "#FFF",
            borderRadius: 5,
            padding: 8,
            flexDirection: "row",
            marginVertical: 8,
            backgroundColor: 'white',
            marginTop: 10,
            marginBottom: 10,
            borderWidth: 1,
            borderColor: "#474749",
            borderRadius: 10,
            shadowColor: "#000",
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,
            elevation: 8,
        },
        avatar: {
            width: 36,
            height: 36,
            borderRadius: 18,
            marginRight: 16
        },
        name: {
            fontSize: 15,
            fontWeight: "500",
            color: "#454D65"
        },
        timestamp: {
            fontSize: 11,
            color: "#C4C6CE",
            marginTop: 4
        },
        post: {
            marginTop: 16,
            fontSize: 14,
            color: "#838899"
        },
        postImage: {
            width: undefined,
            height: 150,
            borderRadius: 5,
            marginVertical: 16
        }
    },
    android: {
        button:{
            width: 10
        },
        heart: {
            width: 10
        },
        heartColor: {
            width: 10
        },
        container: {
            flex: 1,
            backgroundColor: "#fff9ec"
        },
        header: {
            backgroundColor: "#fff9ec",
            alignItems: "center",
            justifyContent: "center",
            borderBottomWidth: 1,
            borderBottomColor: "#1fe0",
            shadowRadius: 15,
            shadowOpacity: 0.2,
            zIndex: 1, 
            borderRadius: 50,
            marginRight: 175,
            marginLeft: 175
        }, 
        headerTitle: {
            fontSize: 50,
            fontWeight: "800"   
        },
        feed: {
            marginHorizontal: 16,
            backgroundColor: "#FFF9EC",
        },
        feedItem: {
            backgroundColor: "#FFF",
            borderRadius: 5,
            padding: 8,
            flexDirection: "row",
            marginVertical: 8,
            backgroundColor: 'white',
            marginTop: 10,
            marginBottom: 10,
            borderWidth: 1,
            borderColor: "#474749",
            borderRadius: 10,
            shadowColor: "#000",
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,
            elevation: 8,
        },
        avatar: {
            width: 36,
            height: 36,
            borderRadius: 18,
            marginRight: 16
        },
        name: {
            fontSize: 15,
            fontWeight: "500",
            color: "#454D65"
        },
        timestamp: {
            fontSize: 11,
            color: "#C4C6CE",
            marginTop: 4
        },
        post: {
            marginTop: 16,
            fontSize: 14,
            color: "#838899"
        },
        postImage: {
            width: undefined,
            height: 150,
            borderRadius: 5,
            marginVertical: 16
        }
      },
    })
});

