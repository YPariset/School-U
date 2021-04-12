import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, TextInput, Image } from "react-native";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import { Ionicons } from "@expo/vector-icons";
import Fire from "../core/Fire";
import * as ImagePicker from "expo-image-picker";

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
                alert(error);
            });
    };


    render() {
        return (
            <SafeAreaView style={styles.container}>

                <View style={styles.inputContainer}>
                    <TextInput
                        autoFocus={true}
                        multiline={true}
                        numberOfLines={4}
                        style={{ flex: 1 }}
                        placeholder="Ajouter un mot sur le carnet"
                        onChangeText={content => this.setState({ content })}
                        value={this.state.content}
                    ></TextInput>
                </View>

                <View style={styles.header}>
                    <TouchableOpacity onPress={this.addCarnet}>
                        <Text style={{ fontWeight: "500" }}>Ajouter un mot sur le carnet</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#FFF9EC',
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 32,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderTopWidth:1,
        borderColor: "#D8D9DB"
    },
    inputContainer: {
        margin: 32,
        flexDirection: "row"
    },

});