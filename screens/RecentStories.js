import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageBackground,
  TextInput,
} from "react-native";
import { Icon } from "react-native-elements";
import GradientButton from "../components/GradientButton";

//import Header from "../components/Header"

const RecentStories = ({ route, navigation }) => {
  const [name, setName] = useState("");
  const [summary, setSummary] = useState("");
  const [formState, setFormState] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello Storyteller</Text>
      <View style={{}}>
        <Text style={styles.text1}>Sharing your stories now ensures they are captured for future generations.</Text>
      </View>
      <View style={styles.buttonStyle}>
        <GradientButton title={"Create a Story"} />
      </View>
      <View style={styles.title2}>
        <Text style={styles.text2}>Recent Stories</Text>
      </View>
      <View>
        <Text style={styles.text3}>New Story Title</Text>
      </View>
      <View style={styles.wrap1}>
        <Text style={styles.text4}>New Story Photo</Text>
        <Text style={styles.text5}>New Story Summary</Text>
      </View>
      <Text style={styles.text3}>War Medals</Text>
      <View style={styles.wrap1}>
        <Image style={styles.image} source={require("../assets/img/purpleheart.jpeg")} />
        <Text style={styles.text5}>
          Your grandfather earned two medals of honor when he was in WWII, this is the story of what he did...
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    height: "100%",
  },
  progressBar: {
    marginBottom: 20,
  },
  title: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    color: "#FF5C00",
    fontSize: 24,
    lineHeight: 20,
    marginTop: 55,
    marginBottom: 20,
  },
  barBackground: {
    backgroundColor: "#AD00FF44",
    height: 10,
    borderRadius: 25,
    width: "100%",
  },
  bar: {
    width: "20%",
    height: "100%",
    backgroundColor: "#AD00FF",
    borderRadius: 25,
  },
  buttonStyle: {
    marginTop: 35,
  },
  title2: {
    marginTop: 45,
  },
  text1:{
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 14,
    lineHeight: 16,
    display: "flex",
    alignItems: "center",
    color: "#666666",
  },
  text2: {
    color: "#9900CC",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 22,
    lineHeight: 20,
    marginBottom: 15,
  },
  text3: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 15,
    lineHeight: 20,
    color: "#666666",
  },
  wrap1: {
    flex: 1,
    flexDirection: "row",
  },
  text4: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 20,
    backgroundColor: "#C4C4C4",
    width: 75,
    height: 71,
    marginTop: 10,
    marginRight: 20,
    borderRadius: 5,
  },
  text5: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 14,
    lineHeight: 19,
    marginTop: 10,
  },
  image:{
    width: 75, 
    height: 71,
    borderRadius: 5,
  }
});

export default RecentStories;
