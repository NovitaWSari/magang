import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Splashscreen } from '../pages';
import Home from '../pages/Home';
import FormMagang from '../pages/Formulir';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} >
        <Stack.Screen name='Splashscreen' component={Splashscreen} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name="FormMagang" component={FormMagang} />
    </Stack.Navigator>
  )
}

export default Router