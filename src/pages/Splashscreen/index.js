import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const Splashscreen = ({navigation}) => {
  useEffect (() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 2000)
  }, [])
  return (
    <View>
      <Text>Splashscreen</Text>
    </View>
  )
}

export default Splashscreen

const styles = StyleSheet.create({})