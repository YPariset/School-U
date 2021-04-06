import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'
import {
  Container,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Icon,
  Left,
  Body,
  Right,
} from 'native-base'
import { View, StyleSheet, Image } from 'react-native'

export default function Blog() {
  return (
    <Background>
      <View>
        <Header>Blog</Header>
        <View style={styles.icon}>
          <Icon style={styles.plus} name="add-circle-outline"></Icon>
        </View>
      </View>
    </Background>
  )
}
const styles = StyleSheet.create({
  icon: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },

  plus: {
    fontSize: 50,
  },
})
