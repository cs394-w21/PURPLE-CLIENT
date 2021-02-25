import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";
import { Icon } from "react-native-elements";
import Header from "../components/Header";
import { LinearGradient } from "expo-linear-gradient";
import { Button } from "react-native-paper";
import * as purpleHeart from "../purpleheart.jpeg";

const ReadStoryScreen = (route) => {
  const [favorite, setFavorite] = useState(false);
  return (
    <ScrollView style={styles.container}>
      <Header />
      <View style={styles.pictureGrid}>
        {[0, 1, 2, 3, 4].map(() => (
          <Image
            style={{ width: "33%", height: 200 }}
            source={require("../purpleheart.jpeg")} /* need to fix import */
          />
        ))}
        <TouchableOpacity style={{ width: "33%", height: 200 }}>
          <Text>View All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.caption}>
        <Text style={styles.captionHeader}>Summary</Text>
        <Text style={styles.captionBody}>
          Your grandfather earned two medals of honor when he was in WWII, this
          is the story of what he did...
        </Text>
      </View>
      <View style={styles.contentDiv}>
        <Text>Started: 02/28/2021</Text>
        <Text>Last edited: 03/03/2021</Text>
      </View>
      <View style={styles.contentDiv}>
        <Text style={styles.contentsDivHeader}>This story contains</Text>
        <Text>Audio: 7 minutes</Text>
        <Text>Photos: 6</Text>
        <Text>Documents: 1</Text>
        <Text>Writen portion: 1 minute read</Text>
      </View>
      <View style={styles.contentDiv}>
        <Text style={styles.contentsDivHeader}>Story Access</Text>
        <Text>Family, John Cousin, Angie Aunt</Text>
      </View>

      <LinearGradient
        // TouchableOpacity Linear Gradient
        // Diagonal :0
        style={{
        
        }}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={["#FF5C00", "#FB37FF"]}
      >
        <Button
          style={{
            backgroundColor: "transparent",
            fontWeight: "bold",
          }}
          mode="contained"
        >
          <Text>Play Story</Text>
        </Button>
      </LinearGradient>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 24,
    lineHeight: "20px",
  },
  header: {
    flexDirection: "row",
  },
  pictureGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
export default ReadStoryScreen;
