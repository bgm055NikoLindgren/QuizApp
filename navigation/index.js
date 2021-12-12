import { createStackNavigator } from '@react-navigation/stack';
import Quiz from '../components/Quiz';
import Start from '../components/Start'
import Result from '../components/Result';
import About from '../components/About';
import React from 'react'

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Start" component={Start} options={{headerShown: false}} />
      <Stack.Screen name="Quiz" component={Quiz} options={{headerShown: false}}/>
      <Stack.Screen name="Result" component={Result} options={{headerShown: false}}/>
      <Stack.Screen name="About" component={About} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}

export default MyStack;