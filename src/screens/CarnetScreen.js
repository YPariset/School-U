import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import moment from "moment";
import Button from '../components/Button'
import Fire from "../core/Fire";

const firebase = require("firebase");
require("firebase/firestore");


export default class CarnetScreen extends React.Component {

    constructor(props){
        super(props)
        this.ref =  Fire.shared.firestore.collection('carnet').orderBy('timestamp', 'desc')
        this.useref=
        this.state={
          dataSource : []
        }
      
      }
      componentDidMount(){
        this.feed = this.ref.onSnapshot(this.carnetPosts);
      }
      
      carnetPosts = (postSnapShot) =>{
        const post = [];
        postSnapShot.forEach((doc) => {
        const {uid,content,timestamp} = doc.data();
        const data=Fire.shared.firestore
        .collection('carnet')
        .doc(uid)
        .get()
        .then(doc=>{
          post.push({
            uid,
            content,
            timestamp,
          })
          this.setState
          ({
            dataSource : post,
          });
        })
        });
      }

    renderPost = post => {
        return (
            <View style={styles.carnetItem}>
                <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <View>
                            <Text style={styles.name}>{post.name}</Text>
                            <Text style={styles.timestamp}>{moment(post.timestamp).format("DD-MM-YYYY HH:mm")}</Text>
                        </View>
                    </View>
                    <Text style={styles.post}>{post.content}</Text>

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
                  onPress={() => this.props.navigation.navigate('AjouterMotCarnetScreen')}
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
        backgroundColor: "#EBECF4",
        borderRadius: 5,
        padding: 8,
        flexDirection: "row",
        marginVertical: 8
    },
    name: {
        fontSize: 15,
        fontWeight: "500",
        color: "#454D65"
    },
    timestamp: {
        fontSize: 11,
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