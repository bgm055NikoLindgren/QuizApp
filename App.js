import React from 'react'
import {Image, StyleSheet, Text, View } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import MyStack from './navigation';
// import Quiz from './components/Quiz';

const App = () => {
  return (
 
      <NavigationContainer>
        <MyStack/>
      </NavigationContainer>

  )
}

export default App

const styles = StyleSheet.create({
  container: {
    padding: 40,
    
  }
})

