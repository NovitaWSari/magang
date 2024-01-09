import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect } from 'react'

const Splashscreen = ({navigation}) => {
  useEffect (() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 2000)
  }, [])
  return (
    <View>
      <text> Splashscreen </text> 
    </View>
  )
}

export default Splashscreen

const styles = StyleSheet.create({})