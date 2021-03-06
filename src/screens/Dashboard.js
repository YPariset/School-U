import React from 'react'
import { View, StyleSheet, Platform, Text, Image } from 'react-native'
import Button from '../components/Button'
import { Agenda } from 'react-native-calendars';
import CalendarScreen from './CalendarView';
import moment from 'moment';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      time: '',

      date: '',
    }
    this.daysArray = [
      'Dimanche',
      'Lundi',
      'Mardi',
      'Mercredi',
      'Jeudi',
      'Vendredi',
      'Samedi',
      'Dimanche',
    ]
  }

  componentDidMount() {
    this.Clock = setInterval(() => this.GetTime(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.Clock)
  }

  GetTime() {
    // Creating variables to hold time.
    var date,
      TimeType,
      hour,
      minutes,
      seconds,
      fullTime,
      day,
      month,
      year,
      fullDate

    // Creating Date() function object.
    date = new Date()
    day = date.getDate()
    month = date.getMonth() + 1
    year = date.getFullYear()
    fullDate = day.toString() + '-' + month.toString() + '-' + year.toString()

    // Getting current hour from Date object.
    hour = date.getHours()

    // Checking if the Hour is less than equals to 11 then Set the Time format as AM.
    if (hour <= 11) {
      TimeType = ''
    } else {
      // If the Hour is Not less than equals to 11 then Set the Time format as PM.
      TimeType = ''
    }

    // IF current hour is grater than 12 then minus 12 from current hour to make it in 12 Hours Format.
    if (hour > 24) {
      hour = hour - 12
    }

    // If hour value is 0 then by default set its value to 12, because 24 means 0 in 24 hours time format.
    if (hour == 0) {
      hour = 0
    }

    // Getting the current minutes from date object.
    minutes = date.getMinutes()

    // Checking if the minutes value is less then 10 then add 0 before minutes.
    if (minutes < 10) {
      minutes = '0' + minutes.toString()
    }

    //Getting current seconds from date object.
    seconds = date.getSeconds()

    // If seconds value is less than 10 then add 0 before seconds.
    if (seconds < 10) {
      seconds = '0' + seconds.toString()
    }

    // Adding all the variables in fullTime variable.
    fullTime =
      hour.toString() +
      ':' +
      minutes.toString() +
      ':' +
      seconds.toString() +
      ' ' +
      TimeType.toString()

    // Setting up fullTime variable in State.
    this.setState({
      time: fullTime,
      date: fullDate,
    })

    this.daysArray.map((item, key) => {
      if (key == new Date().getDay()) {
        this.setState({ currentDay: item })
      }
    })
  }

  showTime = () => {
    Alert.alert(this.state.time.toString())
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}>
        <Text>This is empty date!</Text>
      </View>
    );
  }

  renderItem(item) {
    const labels =
      item.labels &&
      item.labels.map(label => (
        <View
          key={`label-${label}`}
          style={{
            padding: 5,
            backgroundColor:
              label === 'Urgent' ? "blue" : "red",
            borderRadius: 3,
          }}
        >
          <Text style={{ color: 'white' }}>{label}</Text>
        </View>
      ));

    return (
      <View style={styles.item}>
        <View>
          <Text
            style={{
              color: '#48506B',
              fontFamily: fonts.primaryRegular,
              marginBottom: 10,
            }}
          >
            {item.name}
          </Text>
          <Text style={{ color: '#9B9B9B', fontFamily: fonts.primaryRegular }}>
            {item.time}
          </Text>
        </View>

        <View styleName="horizontal h-start">{labels}</View>
      </View>
    );
  }

  render() {
    const { items, loadItems } = this.props;
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.blocDate}>
            <View style={styles.jour}>
              <Text style={styles.TextStyle1}>{this.state.currentDay}</Text>
            </View>
            <View style={styles.date}>
              <Text style={styles.TextStyle1}>{this.state.date}</Text>
            </View>
          </View>
          <View>
            <View style={styles.heure}>
              <Text style={styles.TextStyle2}> {this.state.time} </Text>
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
            <View>
              <Button
                style={styles.carnet}
                onPress={() => this.props.navigation.navigate('CarnetScreen')}
                labelStyle={styles.text}
                mode="outlined"
              >
                Carnet
              </Button>
              <Button
                style={styles.messagerie}
                onPress={() => this.props.navigation.navigate('DiscussionList')}
                labelStyle={styles.text}
                mode="outlined"
              >
                Messagerie
              </Button>
            </View>
            <Image
              source={require('../assets/logo.png')}
              style={styles.logo}
            ></Image>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  ...Platform.select({
    web: {
      blog: {
        backgroundColor: '#6986C5',
        borderRadius: 10,
        width: '80%',
        borderWidth: 0,
      },
      carnet: {
        backgroundColor: '#FABE7C',
        width: '40%',
        borderRadius: 10,
        borderWidth: 0,
        marginRight: 25,
      },
      messagerie: {
        backgroundColor: '#E46472',
        width: '40%',
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
      jour: {
        alignSelf: 'center',
      },
      date: {
        alignSelf: 'center',
      },

      heure: {
        marginTop: 30,
        padding: 20,
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
        marginHorizontal: 100,
        marginTop: 100,
      },
    },
    android: {
      blog: {
        backgroundColor: '#6986C5',
        borderRadius: 10,
        borderWidth: 0,
      },
      carnet: {
        backgroundColor: '#FABE7C',
        width: '50%',
        borderRadius: 10,
        borderWidth: 0,
        marginRight: 15,
      },
      messagerie: {
        backgroundColor: '#E46472',
        width: '47%',
        borderRadius: 10,
        borderWidth: 0,
      },

      text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
        lineHeight: 26,
      },
      row: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-around',
      },
      container: {
        backgroundColor: '#FFF9EC',
        flex: 1,
        padding: 20,
        paddingBottom: 50,
        width: '100%',
        justifyContent: 'center',
      },
    },
  }),
})
