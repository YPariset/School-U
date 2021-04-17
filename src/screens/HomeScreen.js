/* eslint-disable class-methods-use-this */
import React from 'react'
import { View, StyleSheet, Platform, Text, Image } from 'react-native'
import {
  Calendar,
  CalendarList,
  Agenda,
  LocaleConfig,
} from 'react-native-calendars'
import Button from '../components/Button'
import moment from 'moment'
import 'moment/locale/fr'
import { Ionicons } from '@expo/vector-icons'

LocaleConfig.locales['fr'] = {
  monthNames: [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre',
  ],
  monthNamesShort: [
    'Janv.',
    'Févr.',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juil.',
    'Août',
    'Sept.',
    'Oct.',
    'Nov.',
    'Déc.',
  ],
  dayNames: [
    'Dimanche',
    'Lundi',
    'Mardi',
    'Mercredi',
    'Jeudi',
    'Vendredi',
    'Samedi',
  ],
  dayNamesShort: ['Dim.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.'],
  today: "Aujourd'hui",
}
LocaleConfig.defaultLocale = 'fr'

class HomeScreen extends React.Component {
  render() {
    return (
      <Agenda
        style={styles.agenda}
        renderEmptyData={() => {
          return (
            <View style={styles.container}>
              <View>
                <View style={styles.blocDate}>
                  <View style={styles.jour}>
                    <Text style={styles.TextStyle1}>{moment().calendar()}</Text>
                  </View>
                  <View style={styles.date}>
                    <Text style={styles.TextStyle1}>
                      {
                        <Ionicons
                          name="notifications"
                          size={19}
                          style={styles.calendrier}
                        ></Ionicons>
                      }
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.formBack}>
                <View style={styles.bloc}>
                  <Button
                    style={styles.blog}
                    onPress={() => this.props.navigation.navigate('Blog')}
                    labelStyle={styles.text}
                    mode="outlined"
                  >
                    Blog
                  </Button>
                  <Button
                    style={styles.carnet}
                    onPress={() =>
                      this.props.navigation.navigate('CarnetScreen')
                    }
                    labelStyle={styles.text}
                    mode="outlined"
                  >
                    Carnet
                  </Button>
                  <Button
                    style={styles.messagerie}
                    onPress={() =>
                      this.props.navigation.navigate('DiscussionList')
                    }
                    labelStyle={styles.text}
                    mode="outlined"
                  >
                    Messagerie
                  </Button>
                  <View></View>
                  <Image
                    source={require('../assets/logo.png')}
                    style={styles.logo}
                  ></Image>
                </View>
              </View>
            </View>
          )
        }}
        markedDates={{
          '2021-04-16': {
            selected: true,
            marked: true,
            selectedColor: '#a4c9c8',
          },
        }}
        hideKnob={false}
        theme={{}}
        // Agenda container style
        style={{}}
      />
    )
  }
}

const styles = StyleSheet.create({
  ...Platform.select({
    web: {
      formBack: {
        backgroundColor: '#474749',
        marginTop: 40,
        borderRadius: 50,
        width: 450,
      },
      bloc: {
        flexDirection: 'column',
        alignItems: 'center',
        alignContent: 'center',
        paddingTop: 60,
        marginBottom: 40,
      },
      blocDate: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 450,
        padding: 20,
        marginTop: 15,
        backgroundColor: '#a4c9c8',
        alignSelf: 'center',
        borderRadius: 50,
      },
      blog: {
        backgroundColor: '#6986C5',
        borderRadius: 10,
        width: '80%',
        borderWidth: 0,
        marginBottom: 20,
      },
      carnet: {
        backgroundColor: '#FABE7C',
        width: '80%',
        borderRadius: 10,
        borderWidth: 0,
        marginBottom: 20,
      },
      messagerie: {
        backgroundColor: '#E46472',
        width: '80%',
        borderRadius: 10,
        borderWidth: 0,
      },

      text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
        lineHeight: 26,
      },
      container: {
        backgroundColor: '#FFF9EC',
        flex: 1,
        paddingTop: 20,
        paddingRight: 200,
        paddingLeft: 200,
        paddingBottom: 100,
        width: '100%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
      },
      item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 10,
      },
      emptyDate: {
        height: 15,
        flex: 1,
        paddingTop: 30,
      },
      logo: {
        alignSelf: 'center',
        width: 370,
        height: 50,
        marginLeft: -10,
        marginTop: 80,
      },
    },
    ios: {
      blocDate: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 350,
        padding: 20,
        marginTop: 10,
        backgroundColor: '#a4c9c8',
        alignSelf: 'center',
        borderRadius: 50,
      },
      TextStyle1: {
        color: '#474749',
        fontSize: 20,
        fontWeight: 'normal',
      },

      TextStyle2: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'normal',
      },
      formBack: {
        backgroundColor: '#474749',
        marginTop: 40,
        borderRadius: 50,
      },
      bloc: {
        flexDirection: 'column',
        alignItems: 'center',
        alignContent: 'center',
        paddingTop: 80,
        marginBottom: 40,
      },
      blog: {
        backgroundColor: '#6986C5',
        borderRadius: 10,
        borderWidth: 0,
        width: 300,
        marginBottom: 20,
      },
      carnet: {
        backgroundColor: '#FABE7C',
        width: 300,
        borderRadius: 10,
        borderWidth: 0,
        marginBottom: 20,
      },
      messagerie: {
        backgroundColor: '#E46472',
        width: 300,
        borderRadius: 10,
        borderWidth: 0,
      },

      text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
        lineHeight: 26,
      },

      container: {
        backgroundColor: '#FFF9EC',
        flex: 1,
        padding: 20,
        paddingBottom: 100,
        width: '100%',
        justifyContent: 'center',
      },
      logo: {
        alignSelf: 'center',
        width: '80%',
        height: 50,
        marginLeft: -10,
        marginTop: 100,
      },
      item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 10,
      },
      emptyDate: {
        height: 15,
        flex: 1,
        paddingTop: 30,
      },
    },
    android: {
      blocDate: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 320,
        padding: 20,
        marginTop: 10,
        backgroundColor: '#a4c9c8',
        alignSelf: 'center',
        borderRadius: 50,
      },
      jour: {
        alignSelf: 'center',
      },
      date: {
        alignSelf: 'center',
      },

      heure: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#474749',
        borderRadius: 50,
        alignSelf: 'center',
      },
      TextStyle1: {
        color: '#474749',
        fontSize: 20,
        fontWeight: 'normal',
      },

      TextStyle2: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'normal',
      },
      formBack: {
        height: 400,
        backgroundColor: '#474749',
        marginTop: 40,
        borderRadius: 50,
        marginHorizontal: 10,
      },
      bloc: {
        flexDirection: 'column',
        alignItems: 'center',
        alignContent: 'center',
        paddingTop: 60,
        marginBottom: 40,
      },
      blog: {
        backgroundColor: '#6986C5',
        borderRadius: 10,
        borderWidth: 0,
        width: 300,
        marginBottom: 20,
      },
      carnet: {
        backgroundColor: '#FABE7C',
        width: 300,
        borderRadius: 10,
        borderWidth: 0,
        marginBottom: 20,
      },
      messagerie: {
        backgroundColor: '#E46472',
        width: 300,
        borderRadius: 10,
        borderWidth: 0,
      },

      text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
        lineHeight: 26,
      },

      container: {
        backgroundColor: '#FFF9EC',
        flex: 1,

        width: '100%',
        justifyContent: 'center',
      },
      logo: {
        alignSelf: 'center',
        width: 300,
        height: 50,
        marginLeft: -10,
        marginTop: 30,
      },
    },
  }),
})

export default HomeScreen
