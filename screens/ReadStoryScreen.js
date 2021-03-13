import React from "react";
import { Text, StyleSheet, ScrollView } from "react-native";
import Header from '../components/Header'

const ReadStoryScreen = ({route}) => {
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
    fontFamily: "roboto-regular",
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
