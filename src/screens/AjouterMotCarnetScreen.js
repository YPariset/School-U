import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, TextInput, Image, Platform } from "react-native";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import { Ionicons } from "@expo/vector-icons";
import Fire from "../core/Fire";
import * as ImagePicker from "expo-image-picker";
import Button from '../components/Button'

const firebase = require("firebase");
require("firebase/firestore");

export default class AjouterMotCarnetScreen extends React.Component {
    state = {
        content: "",
    };

    componentDidMount() {
    }


    addCarnet = () => {
        Fire.shared
            .addMotCarnet({ content: this.state.content.trim()})
            .then(ref => {
                this.setState({ content: ""});
                this.props.navigation.goBack();
            })
            .catch(error => {
                alert('Vous ne pouvez malheureusement rien publier en tant que parent 🥲');
            });
    };


    render() {
        return (
            <SafeAreaView style={styles.container}>

                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.TexteInput}
                        autoFocus={true}
                        multiline={true}
                        numberOfLines={4}
                        
                        placeholder=" Ajouter un mot sur le carnet"
                        onChangeText={content => this.setState({ content })}
                        value={this.state.content}
                        style={styles.TexteInput}
                    ></TextInput>
                </View>

                <View style={styles.header}>
                    

                    <Button
                style={styles.buttonAdd}
                onPress={this.addCarnet}
                labelStyle={styles.text}
                mode="outlined"
              >
                Ajouter un mot sur le carnet
              </Button>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
  ...Platform.select({ 
                ios: {
                    container: {
                        backgroundColor: "#fff9ec",
                        
                    }, 
                    inputContainer: {
                        backgroundColor: 'white',
                        marginTop: 30,
                        marginBottom: 15,
                        borderWidth: 1,
                        borderColor: "#6986C5",
                        borderRadius: 10,
                        marginRight: 30, 
                        marginLeft: 30,
                        shadowColor: "#000",
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 3,
                        },
                        shadowOpacity: 0.27,
                        shadowRadius: 4.65,
                        elevation: 8,
                        paddingBottom: 130,
                    }, 
                    header: {
                        paddingBottom: 800,
                    }, 
                    buttonAdd: {
                        backgroundColor: '#FABE7C',
                        borderRadius: 10,
                        width: '80%',
                        borderWidth: 0,
                        marginRight: 'auto', 
                        marginLeft: 'auto'
                    }, 
                    text: {
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 15,
                        lineHeight: 26,
                    },
                },
                android: {
                    container: {
                        backgroundColor: "#fff9ec",
                        
                    }, 
                    inputContainer: {
                        backgroundColor: 'white',
                        marginTop: 30,
                        marginBottom: 15,
                        borderWidth: 1,
                        borderColor: "#6986C5",
                        borderRadius: 10,
                        marginRight: 30, 
                        marginLeft: 30,
                        shadowColor: "#000",
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 3,
                        },
                        shadowOpacity: 0.27,
                        shadowRadius: 4.65,
                        elevation: 8,
                        paddingBottom: 130,
                    }, 
                    header: {
                        paddingBottom: 800,
                    }, 
                    buttonAdd: {
                        backgroundColor: '#FABE7C',
                        borderRadius: 10,
                        width: '80%',
                        borderWidth: 0,
                        marginRight: 'auto', 
                        marginLeft: 'auto'
                    }, 
                    text: {
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 15,
                        lineHeight: 26,
                    },
                },
                web: {
                    container: {
                        backgroundColor: "#fff9ec",
                        
                    }, 
                    inputContainer: {
                        backgroundColor: 'white',
                        marginTop: 30,
                        marginBottom: 15,
                        borderWidth: 1,
                        borderColor: "#6986C5",
                        borderRadius: 10,
                        marginRight: 30, 
                        marginLeft: 30,
                        shadowColor: "#000",
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 3,
                        },
                        shadowOpacity: 0.27,
                        shadowRadius: 4.65,
                        elevation: 8,
                        paddingBottom: 130,
                    }, 
                    header: {
                        paddingBottom: 800,
                    }, 
                    buttonAdd: {
                        backgroundColor: '#FABE7C',
                        borderRadius: 10,
                        width: '80%',
                        borderWidth: 0,
                        marginRight: 'auto', 
                        marginLeft: 'auto'
                    }, 
                    text: {
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 15,
                        lineHeight: 26,
                    },
                }
        }),
});