import React from 'react'
import {
  ImageBackground,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native'
import { theme } from '../core/theme'

export default function Background({ children }) {
  return (
    <ImageBackground
      source={require('../assets/tableau2.jpeg')}
      resizeMode="stretch"
      style={styles.background}
    >
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        {children}
      </KeyboardAvoidingView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  ...Platform.select({
    web: {
      background: {
        flex: 1,
        width: '100%',
        backgroundColor: theme.colors.surface,
      },
      container: {
        flex: 1,
        padding: 20,
        width: '100%',
        maxWidth: 340,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
      },
    },
    ios: {
      background: {
        flex: 1,
        width: '100%',
        backgroundColor: theme.colors.surface,
      },
      container: {
        flex: 1,
        padding: 20,
        width: '100%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
      },
    },
    android: {
      background: {
        flex: 1,
        width: '100%',
        backgroundColor: theme.colors.surface,
      },
      container: {
        flex: 1,
        padding: 20,
        width: '100%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
      },
    },
  }),
})
