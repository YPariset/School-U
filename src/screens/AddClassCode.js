import React, { Component } from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import { Input, Item, Text, Form} from "native-base";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Svg, { Ellipse } from "react-native-svg";

function AddClassCode(props) {
  return (
    <View style={styles.container}>
      <View style={styles.iconRow}>
        <Icon name="home" style={styles.icon}></Icon>
        <View style={styles.ellipseStack}>
          <Svg viewBox="0 0 319.13 268.07" style={styles.ellipse}>
            <Ellipse
              stroke="rgba(230, 230, 230,1)"
              strokeWidth={0}
              fill="#fabe7c"
              cx={160}
              cy={134}
              rx={160}
              ry={134}
            ></Ellipse>
          </Svg>
          <Svg viewBox="0 0 259.56 251.05" style={styles.ellipse2}>
            <Ellipse
              stroke="rgba(230, 230, 230,1)"
              strokeWidth={0}
              fill="#6986c5"
              cx={130}
              cy={126}
              rx={130}
              ry={126}
            ></Ellipse>
          </Svg>
          <Text style={styles.titre}>Ajouter un code de classe</Text>
          <SafeAreaView >
            <Form style={styles.premierForm}>
                <Item>
                    <Input placeholder="Numero de la classe" />
                </Item>    
            </Form>
            </SafeAreaView >
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ...Platform.select({ 
                ios: {
                    container: {
                        flex: 1,
                        backgroundColor: "rgba(15,15, 15,0)",
                        flexDirection: "row"
                    },
                    icon: {
                        color: "rgba(128,128,128,1)",
                        fontSize: 40,
                        marginTop: 169
                    },
                    ellipse: {
                        width: 319,
                        height: 268,
                        position: "absolute",
                        top: 0,
                        left: 0
                    },
                    ellipse2: {
                        width: 260,
                        height: 251,
                        position: "absolute",
                        top: 191,
                        left: 291
                    },
                    titre: {
                        top: 104,
                        fontFamily: "roboto-700",
                        color: "#121212",
                        fontSize: 27,
                        marginLeft: 'auto',
                        marginRight: 'auto'
                    },
                    ellipseStack: {
                        width: 551,
                        height: 442,
                        marginLeft: 92
                    },
                    iconRow: {
                        height: 442,
                        flexDirection: "row",
                        flex: 1,
                        marginRight: -99,
                        marginLeft: -209,
                        marginTop: -13
                    }, 
                    premierForm: {
                        paddingTop: 30,
                        paddingBottom: 100,
                        width: '70%',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginTop: 200,
                    }, 
                  
                },
                web: {
                  
                }
              }),
            });



export default AddClassCode;
