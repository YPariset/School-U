import React from 'react'
import { View, Text, StyleSheet, Image, FlatList, Platform } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import moment from 'moment'
import Button from '../components/Button'
import Fire from '../core/Fire'
import CarnetButton from '../components/CarnetButton'
import { TouchableOpacity } from 'react-native-gesture-handler'

const firebase = require('firebase')
require('firebase/firestore')

export default class CarnetScreen extends React.Component {
  constructor(props) {
    super(props)
    this.ref = Fire.shared.firestore
      .collection('carnet')
      .orderBy('timestamp', 'desc')
    this.useref = this.state = {
      dataSource: [],
    }
  }
  componentDidMount() {
    this.feed = this.ref.onSnapshot(this.carnetPosts)
  }

  carnetPosts = (postSnapShot) => {
    const post = []
    postSnapShot.forEach((doc) => {
      const { uid, content, timestamp } = doc.data()
      const data = Fire.shared.firestore
        .collection('carnet')
        .doc(uid)
        .get()
        .then((doc) => {
          post.push({
            uid,
            content,
            timestamp,
          })
          this.setState({
            dataSource: post,
          })
        })
    })
  }

  renderPost = (post) => {
    return (
      <View style={styles.carnetItem}>
        <View style={{ flex: 1 }}>
          <View style={styles.messagesCarnet}>
            <View>
              <View>
                <Text style={styles.name}>{post.name}</Text>
                <Text style={styles.timestamp}>
                  {moment(post.timestamp).format('DD / MM / YYYY ')}{' '}
                </Text>
                <Ionicons
                  name="calendar"
                  size={19}
                  style={styles.calendrier}
                ></Ionicons>

                <Text style={styles.timestampHours}>
                  {moment(post.timestamp).format('HH:mm')}{' '}
                </Text>
              </View>
            </View>
            <Text style={styles.post}>{post.content}</Text>
          </View>
        </View>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.feed}
          data={this.state.dataSource}
          renderItem={({ item }) => this.renderPost(item)}
          keyExtractor={(item, index) => {
            return index.toString()
          }}
          showsVerticalScrollIndicator={false}
        ></FlatList>
        <View style={styles.header}></View>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('AjouterMotCarnetScreen')
          }
        >
          <CarnetButton navigation={this.props.navigation}></CarnetButton>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  ...Platform.select({
    ios: {
      container: {
        flex: 1,
        backgroundColor: '#fff9ec',
      },
      header: {
        backgroundColor: '#fff9ec',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#1fe0',
        shadowRadius: 15,
        shadowOpacity: 0.2,
        zIndex: 1,
        borderRadius: 50,
        marginRight: 175,
        marginLeft: 175,
      },
      headerTitle: {
        fontSize: 50,
        fontWeight: '800',
      },
      feed: {
        marginHorizontal: 16,
      },
      feedItem: {
        backgroundColor: '#EBECF4',
        borderRadius: 5,
        padding: 8,
        flexDirection: 'row',
        marginVertical: 8,
      },
      name: {
        fontSize: 15,
        fontWeight: '500',
        color: '#454D65',
      },
      timestamp: {
        fontSize: 11,
        marginTop: 5,
        paddingLeft: 8,
        fontWeight: 'bold',
      },
      timestampHours: {
        fontSize: 11,
        marginTop: -17,
        paddingLeft: 40,
      },
      post: {
        //marginTop: -5,
        marginBottom: 30,
        paddingLeft: 80,
        paddingRight: 9,
        textAlign: 'justify',
        fontSize: 18,
        color: '#838899',
      },
      postImage: {
        width: undefined,
        height: 150,
        borderRadius: 5,
        marginVertical: 16,
      },
      messagesCarnet: {
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#474749',
        borderRadius: 10,
        shadowColor: '#000',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 8,
      },
      buttonPlus: {
        color: 'grey',
      },
      button: {
        marginTop: 10,
      },
      calendrier: {
        marginTop: 5,
        color: 'grey',
        marginLeft: 8,
      },
    },
    android: {
      container: {
        flex: 1,
        backgroundColor: '#fff9ec',
      },
      header: {
        backgroundColor: '#fff9ec',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#1fe0',
        shadowRadius: 15,
        shadowOpacity: 0.2,
        zIndex: 1,
        borderRadius: 50,
        marginRight: 175,
        marginLeft: 175,
      },
      headerTitle: {
        fontSize: 50,
        fontWeight: '800',
      },
      feed: {
        marginHorizontal: 16,
      },
      feedItem: {
        backgroundColor: '#EBECF4',
        borderRadius: 5,
        padding: 8,
        flexDirection: 'row',
        marginVertical: 8,
      },
      name: {
        fontSize: 15,
        fontWeight: '500',
        color: '#454D65',
      },
      timestamp: {
        fontSize: 11,
        marginTop: 5,
        paddingLeft: 8,
        fontWeight: 'bold',
      },
      timestampHours: {
        fontSize: 11,
        marginTop: -17,
        paddingLeft: 40,
      },
      post: {
        //marginTop: -5,
        marginBottom: 30,
        paddingLeft: 80,
        paddingRight: 9,
        textAlign: 'justify',
        fontSize: 18,
        color: '#838899',
      },
      postImage: {
        width: undefined,
        height: 150,
        borderRadius: 5,
        marginVertical: 16,
      },
      messagesCarnet: {
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#474749',
        borderRadius: 10,
        shadowColor: '#000',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 8,
      },
      buttonPlus: {
        color: 'grey',
      },
      button: {
        marginTop: 10,
      },
      calendrier: {
        marginTop: 5,
        color: 'grey',
        marginLeft: 8,
      },
    },
    web: {
      container: {
        flex: 1,
        backgroundColor: '#fff9ec',
      },
      header: {
        backgroundColor: '#fff9ec',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#1fe0',
        shadowRadius: 15,
        shadowOpacity: 0.2,
        zIndex: 1,
        borderRadius: 50,
        marginRight: 175,
        marginLeft: 175,
      },
      headerTitle: {
        fontSize: 50,
        fontWeight: '800',
      },
      feed: {
        marginHorizontal: 16,
      },
      feedItem: {
        backgroundColor: '#EBECF4',
        borderRadius: 5,
        padding: 8,
        flexDirection: 'row',
        marginVertical: 8,
      },
      name: {
        fontSize: 15,
        fontWeight: '500',
        color: '#454D65',
      },
      timestamp: {
        fontSize: 11,
        marginTop: 5,
        paddingLeft: 8,
        fontWeight: 'bold',
      },
      timestampHours: {
        fontSize: 11,
        marginTop: -17,
        paddingLeft: 40,
      },
      post: {
        //marginTop: -5,
        marginBottom: 30,
        paddingLeft: 80,
        paddingRight: 9,
        textAlign: 'justify',
        fontSize: 18,
        color: '#838899',
      },
      postImage: {
        width: undefined,
        height: 150,
        borderRadius: 5,
        marginVertical: 16,
      },
      messagesCarnet: {
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#474749',
        borderRadius: 10,
        shadowColor: '#000',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 8,
      },
      buttonPlus: {
        color: 'grey',
      },
      button: {
        marginTop: 10,
      },
      calendrier: {
        marginTop: 5,
        color: 'grey',
        marginLeft: 8,
      },
    },
  }),
})
