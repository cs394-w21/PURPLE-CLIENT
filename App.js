import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Story from './components/Story';
import Success from './components/Success';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PlayScreen from './screens/PlayScreen';



const Stack = createStackNavigator();

export default function App() {
  const story = {
    title: 'testtest',
    image: '../test1.jpg'
  }
  // <Success></Success>
  //       <StatusBar style="auto" />

  //      {/*<Story story={story} />*/}

  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
          name="PlayScreen" 
          component={PlayScreen}
          options={{headerShown: false, title: ''}}
          />
        </Stack.Navigator>
      </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
