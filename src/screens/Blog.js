import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import moment from "moment";
import Button from '../components/Button'
import Fire from "../core/Fire";
import { db } from '../core/Fire';


const firebase = require("firebase");
require("firebase/firestore");


// temporary data until we pull from Firebase
/*const posts = [
    {
        id: "1",
        name: "Joe McKay",
        text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        timestamp: 1569109273726,
        avatar: require("../assets/tempAvatar.jpg"),
        image: require("../assets/tempImage1.jpg")
    },
    {
        id: "2",
        name: "Karyn Kim",
        text:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        timestamp: 1569109273726,
        avatar: require("../assets/tempAvatar.jpg"),
        image: require("../assets/tempImage2.jpg")
    },
    {
        id: "3",
        name: "Emerson Parsons",
        text:
            "Amet mattis vulputate enim nulla aliquet porttitor lacus luctus. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant.",
        timestamp: 1569109273726,
        avatar: require("../assets/tempAvatar.jpg"),
        image: require("../assets/tempImage3.jpg")
    },
    {
        id: "4",
        name: "Kathie Malone",
        text:
            "At varius vel pharetra vel turpis nunc eget lorem. Lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor. Adipiscing tristique risus nec feugiat in fermentum.",
        timestamp: 1569109273726,
        avatar: require("../assets/tempAvatar.jpg"),
        image: require("../assets/tempImage4.jpg")
    }
];*/


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
                <Image source={{uri: post.avatar}} style={styles.avatar} />
                <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <View>
                            <Text style={styles.name}>{post.name}</Text>
                            <Text style={styles.timestamp}>{moment(post.timestamp).fromNow()}</Text>
                        </View>

                        <Ionicons name="ellipsis-horizontal-outline" size={24} color="#73788B" />
                    </View>
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
                <Button
                  onPress={() => this.props.navigation.navigate('PostScreen')}
                >
                <Ionicons
                  name="add-circle-outline"
                  size={30}
                  style={{ color: 'grey'}}
                ></Ionicons>
                </Button>
              </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EBECF4"
    },
    header: {
        height: 100,
        backgroundColor: "#FFF",
        alignItems: "center",
        justifyContent: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#EBECF4",
        shadowColor: "#454D65",
        shadowOffset: { height: 5 },
        shadowRadius: 15,
        shadowOpacity: 0.2,
        zIndex: 1
    },
    headerTitle: {
        fontSize: 50,
        fontWeight: "800"
    },
    feed: {
        marginHorizontal: 16
    },
    feedItem: {
        backgroundColor: "#FFF",
        borderRadius: 5,
        padding: 8,
        flexDirection: "row",
        marginVertical: 8
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
});