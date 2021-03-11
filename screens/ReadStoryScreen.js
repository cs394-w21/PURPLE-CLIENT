import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from "react-native";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";
import { Icon } from "react-native-elements";
import Header from '../components/Header'

const ReadStoryScreen = (route) => {
  const [favorite, setFavorite] = useState(false);
  return (
    <ScrollView style={styles.container}>
      <Header />
      <Text>
        {route.params.story.story}
      </Text>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  body: {
    fontFamily: "Roboto",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "19px",
    letterSpacing: "0em",
    textAlign: "left"

  },
  header: {
    flexDirection: "row",
    marginBottom: 20
  },
  container: {
    padding: 20,

  }
});
export default ReadStoryScreen;
