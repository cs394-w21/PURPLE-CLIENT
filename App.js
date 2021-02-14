import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Story from './components/story'
export default function App() {
  const story = {
    title: 'testtest',
    image: '../test1.jpg'
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Story story={story} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
